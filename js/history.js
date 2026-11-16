import {compare} from './calculator.js';
const nameKey=name=>name.trim().normalize('NFKC').replace(/\s+/g,' ').toLocaleLowerCase('ko-KR');
// 예전 저장 형식도 원본 입력으로 다시 계산해 동일한 단위 기준을 적용합니다.
export function buildHistory(records){
 return records.flatMap(record=>{
  try{
   if(!Number.isFinite(Date.parse(record.date)))return [];
   const result=compare(record.products);
   return [{...record,result,key:nameKey(record.products[0].name)+'|'+result.items[0].dimension}];
  }catch{return [];}
 }).sort((a,b)=>Date.parse(b.date)-Date.parse(a.date));
}
export function previousRecord(history,record){
 const index=history.findIndex(r=>r.id===record.id);
 return history.slice(index+1).find(r=>r.key===record.key)??null;
}
export function priceChange(previous,current){
 const difference=current-previous;
 return {difference,percent:previous===0?null:difference/previous*100};
}
