/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

// const getNode = (node) => {
//   if (typeof node !== 'string') {
//     throw new Error('getNode 함수의 인수는 문자타입 이어야 합니다');
//   }
//   return document.querySelector(node);
// };

// const getNodes = (node) => {
//   if (typeof node !== 'string') {
//     throw new Error('getNode 함수의 인수는 문자타입 이어야 합니다');
//   }
//   return document.querySelectorAll(node);
// };
const first = getNode('.first');
const spans = getNodes('span');

/* 문서 대상 확인 */
// - matches

console.log(first.matches('div')); //false // target에 항목(selector)가 있어?
console.log(first.matches('span')); //true
// - contains

console.log(getNode('h1').contains(first)); //true // target에 항목(selector)의 부모 안에 자식 노드가 있어?
