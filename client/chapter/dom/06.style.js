/* -------------------- */
/* DOM Styling          */
/* -------------------- */

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first');

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
console.log(first.className); //getter
//console.log((first.className = 'fff')); //setter

// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

//first.classList.add('hello'); // class를 추가
//first.classList.remove('hello'); // class를 제거
//first.classList.toggle('hello'); //class가 존재할 경우 class를 제거하고, 그렇지 않은 경우엔 추가
//first.classList.contains('hello'); //확인

// function addClass(node, className) {
//   if (typeof node === 'string') node = getNode(node);
//   if (typeof className !== 'string') {
//     throw new TypeError(
//       'addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
//     );
//   }

//   node.classList.add(className);
// }

// function removeClass(node, className) {
//   if (typeof node === 'string') node = getNode(node);
//   if (!className) {
//     node.className = '';
//     //node.removeAttribute('class');
//     return;
//   }
//   if (typeof className !== 'string') {
//     throw new TypeError(
//       'removeClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
//     );
//   }
//   node.classList.remove(className);
// }

// function toggleClass(node, className) {
//   if (typeof node === 'string') node = getNode(node);
//   if (typeof className !== 'string') {
//     throw new TypeError(
//       'toggleClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
//     );
//   }

//   return node.classList.toggle(className);
// }

addClass('.first', 'hello');
/* 스타일 변경 방법 --------------------------------------------------------- */
//추가의 개념
first.style.background = 'orange';
//전체를 바꾸는 개념
first.style.cssText = `
display = flex;
margin: 10px;
border:1px dotted red;
`;

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

console.log(getComputedStyle(first)['background-color']);

// function getCss(node, prop) {
//   if (typeof node === 'string') node = getNode(node);
//   if (!(prop in document.body.style)) {
//     throw new SyntaxError(
//       'getCss 함수의 두 번째 인수는 유효한 css 속성이 아닙니다.'
//     );
//   }

//   return getComputedStyle(node).getPropertyValue(prop);
// }

// function setCss(node, prop, value) {
//   if (typeof node === 'string') node = getNode(node);
//   if (!(prop in document.body.style)) {
//     throw new SyntaxError(
//       'getCss 함수의 두 번째 인수는 유효한 css 속성이 아닙니다.'
//     );
//   }
//   if (!value)
//     throw new SyntaxError('setCss 함수의 세번째 인수는 필수값입니다.');

//   node.style[prop] = value;
// }

// const css = (node, prop, value) =>
//   !value ? getCss(node, prop) : setCss(node, prop, value);
