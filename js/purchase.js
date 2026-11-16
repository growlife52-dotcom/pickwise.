// 기존 기록에는 구매 방식 값이 없어도 묶음·할인 조건으로 복원합니다.
export function purchaseMode(p){
 const bundle=Number(p.bundle)>1,discount=p.discount!=='none';
 return p.purchaseMode??(bundle?(discount?'both':'bundle'):(discount?'discount':'normal'));
}
export function selectPurchaseMode(p,mode){
 if(!['normal','discount','bundle','both'].includes(mode))throw Error('구매 방식을 확인해 주세요.');
 const next={...p,purchaseMode:mode};
 if(!['bundle','both'].includes(mode))next.bundle=1;
 if(!['discount','both'].includes(mode)){next.discount='none';next.rate=0;}
 return next;
}
