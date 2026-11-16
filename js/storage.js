const key='kkomkkom-records-v1';
export function readRecords(){try{const data=JSON.parse(localStorage.getItem(key)||'[]');return Array.isArray(data)?data.filter(r=>r&&typeof r.id==='string'&&Array.isArray(r.products)&&r.products.length===2):[];}catch{return [];}}
export function writeRecords(records){localStorage.setItem(key,JSON.stringify(records));}
