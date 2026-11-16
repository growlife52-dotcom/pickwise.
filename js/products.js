// 상품명, 추천 단위, 아이콘을 함께 관리합니다.
export const products=[['우유','mL','milk'],['생수','L','water'],['쌀','kg','rice'],['달걀','개','eggs'],['휴지','롤','paper'],['세제','L','soap'],['과자','g','cookie'],['샴푸','mL','shampoo']];
// 참고 이미지처럼 색감 있는 이모지를 사용합니다. 기기마다 모양이 조금 달라요.
export function icon(type){
 const illustrations={milk:'🥛',water:'💧',rice:'🍚',eggs:'🥚',paper:'🧻',soap:'🧴',cookie:'🍪',shampoo:'🫧'};
 return `<span class="product-illustration" aria-hidden="true">${illustrations[type]||illustrations.milk}</span>`;
}
