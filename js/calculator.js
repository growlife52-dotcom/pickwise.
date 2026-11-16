// 단위 환산과 할인 계산은 화면과 분리합니다.
export const units = {mL:['액체',1,100,'100mL',2000,50],L:['액체',1000,100,'100mL',20,.5],g:['무게',1,100,'100g',2000,50],kg:['무게',1000,100,'100g',20,.5],개:['개',1,1,'1개',100,1],롤:['롤',1,1,'1롤',100,1],장:['장',1,1,'1장',200,5]};
export function calculate(p){
 const u=units[p.unit];
 if(!u || !p.name?.trim()) throw Error('상품 이름과 단위를 확인해 주세요.');
 for(const key of ['price','amount','bundle']) if(!Number.isFinite(Number(p[key])) || Number(p[key])<=0) throw Error('가격, 용량, 묶음 수량은 0보다 큰 숫자로 입력해 주세요.');
 if(!Number.isInteger(Number(p.bundle))) throw Error('묶음 수량은 정수로 입력해 주세요.');
 for(const key of ['coupon','shipping','rate']) if(!Number.isFinite(Number(p[key])) || Number(p[key])<0) throw Error('할인율, 쿠폰, 배송비는 0 이상의 숫자로 입력해 주세요.');
 if(p.rate>100) throw Error('할인율은 0~100%로 입력해 주세요.');
 if(!['none','one','two','rate'].includes(p.discount)) throw Error('할인 조건을 확인해 주세요.');
 const paid=p.discount==='two'?2:1, received=p.discount==='one'?2:p.discount==='two'?3:1;
 const subtotal=Number(p.price)*paid*(p.discount==='rate'?1-p.rate/100:1);
 if(p.coupon>subtotal) throw Error('쿠폰 금액은 할인 후 상품 금액보다 클 수 없어요.');
 const payment=subtotal-Number(p.coupon)+Number(p.shipping);
 const quantity=Number(p.amount)*Number(p.bundle)*received*u[1];
 return {...p,payment,quantity,unitPrice:payment/quantity*u[2],basis:u[3],dimension:u[0]};
}
export function compare(products){
 const items=products.map(calculate);
 if(items[0].dimension!==items[1].dimension) throw Error('같은 종류의 단위를 골라 주세요. mL와 L, g과 kg은 서로 비교할 수 있어요.');
 const [a,b]=items; const tie=Math.abs(a.unitPrice-b.unitPrice)<1e-9;
 const winner=tie?null:a.unitPrice<b.unitPrice?0:1;
 return {items,winner,percent:tie?0:(Math.max(a.unitPrice,b.unitPrice)-Math.min(a.unitPrice,b.unitPrice))/Math.max(a.unitPrice,b.unitPrice)*100};
}
