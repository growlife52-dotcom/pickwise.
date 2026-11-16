// 상품 이름 · 추천 단위 · 그림을 함께 관리합니다.
export const products=[['우유','mL','milk'],['생수','L','water'],['쌀','kg','rice'],['달걀','개','eggs'],['휴지','롤','paper'],['세제','L','soap'],['과자','g','cookie'],['샴푸','mL','shampoo'],['두부','g','tofu'],['치약','g','toothpaste'],['사과','개','apple'],['물티슈','장','tissue']];
// 같은 크기와 둥근 형태의 컬러 SVG로 기기마다 동일한 그림을 보여 줍니다.
export function icon(type){
 const shapes={
 milk:'<path d="M20 13h24l6 12-4 32H19l-3-32z" fill="#e3f1fb"/><path d="M20 13h24l-4 12H16z" fill="#aed6ef"/><path d="M40 25h10l-4 32h-9z" fill="#82b7d9"/><path d="M20 31h17v19H20z" fill="#fff"/><path d="M24 38h9v7h-9z" fill="#80b5d5"/>',
 water:'<path d="M33 7C27 19 15 32 15 41a18 18 0 0 0 36 0C51 32 39 19 33 7z" fill="#59bce8"/><path d="M27 25c-5 8-8 13-7 18" fill="none" stroke="#c3edff" stroke-width="5" stroke-linecap="round"/>',
 rice:'<path d="M13 34h40l-7 23H20z" fill="#e77884"/><ellipse cx="33" cy="33" rx="21" ry="10" fill="#f8f0e6"/><path d="M18 29c0-18 30-18 30 0" fill="#fff"/><path d="m23 23 2 2m6-7 1 3m7 1 2 2m-12 4 2 2m8-1 2 1" stroke="#c5ceca" stroke-width="2" stroke-linecap="round"/>',
 eggs:'<path d="M33 9c-9 0-17 19-17 30a17 17 0 0 0 34 0C50 28 42 9 33 9" fill="#dfa06c"/><path d="M25 20c-4 6-6 12-6 18" stroke="#f8d4af" stroke-width="5" stroke-linecap="round"/>',
 paper:'<path d="M15 24h34v31H15z" fill="#d9d3e2"/><ellipse cx="32" cy="24" rx="17" ry="9" fill="#f7f3f7"/><ellipse cx="32" cy="24" rx="6" ry="4" fill="#9b8da8"/><path d="M44 26h10v31H33V33z" fill="#fff"/><path d="M39 40h12m-12 8h12" stroke="#e4e1ea" stroke-width="2"/>',
 soap:'<path d="M27 10h17v5H27z" fill="#dc728d"/><path d="M31 14h8v9h-8z" fill="#fab3c6"/><rect x="19" y="22" width="30" height="36" rx="8" fill="#ee9cb5"/><path d="M33 30c-3 5-7 9-7 13a7 7 0 0 0 14 0c0-4-4-8-7-13" fill="#fff0f4"/>',
 cookie:'<circle cx="33" cy="33" r="24" fill="#d6a072"/><circle cx="31" cy="31" r="21" fill="#e9bc8a"/><g fill="#865447"><circle cx="24" cy="20" r="4"/><circle cx="39" cy="23" r="4"/><circle cx="20" cy="36" r="3"/><circle cx="34" cy="36" r="4"/><circle cx="43" cy="42" r="3"/><circle cx="28" cy="47" r="3"/></g>',
 shampoo:'<path d="M26 9h20v5H26z" fill="#9a8ac5"/><path d="M31 14h8v8h-8z" fill="#c9b8e8"/><rect x="20" y="22" width="28" height="36" rx="9" fill="#b5a2dc"/><ellipse cx="34" cy="40" rx="8" ry="11" fill="#f0e9fc"/><path d="M34 34v13m0-6 4-4" stroke="#9d87c7" stroke-width="2" stroke-linecap="round"/>',
 tofu:'<rect x="10" y="25" width="46" height="31" rx="6" fill="#bfd7ca"/><path d="m15 24 23-10 14 11-23 10z" fill="#fff7df"/><path d="M15 24v21l14 8V35z" fill="#f4e9c6"/><path d="m29 35 23-10v20L29 53z" fill="#fff1d0"/>',
 toothpaste:'<path d="m20 14 27 7-8 33-27-7z" fill="#f5fafb"/><path d="m18 24 27 7-4 15-27-7z" fill="#74b9c4"/><path d="m17 49 20 5-2 8-20-5z" fill="#90a6b5"/><path d="m21 12 27 7" stroke="#b7c8cf" stroke-width="4"/>',
 apple:'<path d="M33 22c-20-15-33 13-17 31 7 9 13 1 17 3 4-2 10 6 17-3 16-18 3-46-17-31" fill="#e87974"/><path d="M33 23V12" stroke="#94704e" stroke-width="4" stroke-linecap="round"/><path d="M34 16c0-10 11-12 16-9-1 9-9 12-16 9" fill="#91b895"/><path d="M20 29c-4 5-4 10-2 14" stroke="#ffb1a8" stroke-width="4" stroke-linecap="round"/>',
 tissue:'<rect x="9" y="28" width="48" height="28" rx="7" fill="#9ccfd0"/><path d="m25 34-4-19 18-5 5 24z" fill="#fff"/><path d="m21 15 10 9 8-14" fill="#e9eff2"/><path d="M20 36h26" stroke="#589fa9" stroke-width="3" stroke-linecap="round"/>'
 };
 return `<svg class="product-illustration" viewBox="0 0 66 66" aria-hidden="true">${shapes[type]||shapes.milk}</svg>`;
}
