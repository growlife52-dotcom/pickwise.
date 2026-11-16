import test from 'node:test';
import assert from 'node:assert/strict';
import {purchaseMode,selectPurchaseMode} from '../js/purchase.js';
import {calculate} from '../js/calculator.js';
const p={name:'생수',price:6000,amount:500,unit:'mL',bundle:6,discount:'two',rate:0,coupon:1000,shipping:500};
test('기존 기록에서 구매 방식을 복원',()=>{assert.equal(purchaseMode(p),'both');assert.equal(purchaseMode({...p,bundle:1}),'discount');assert.equal(purchaseMode({...p,discount:'none'}),'bundle');assert.equal(purchaseMode({...p,bundle:1,discount:'none'}),'normal');});
test('일반 상품으로 바꾸면 숨겨진 행사와 묶음이 적용되지 않음',()=>{const next=selectPurchaseMode(p,'normal');assert.equal(next.bundle,1);assert.equal(next.discount,'none');assert.equal(calculate(next).quantity,500);assert.equal(next.coupon,1000);});
test('할인만/묶음만 선택하면 다른 조건은 초기화',()=>{assert.equal(selectPurchaseMode(p,'discount').bundle,1);assert.equal(selectPurchaseMode(p,'bundle').discount,'none');assert.equal(selectPurchaseMode({...p,rate:20},'bundle').rate,0);});
test('묶음+할인은 두 조건과 비용을 정확하게 결합',()=>{const next=selectPurchaseMode(p,'both');const result=calculate(next);assert.equal(result.quantity,9000);assert.equal(result.payment,11500);assert.equal(p.bundle,6);});
