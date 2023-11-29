/* -------------------- */
/* Do While Loop        */
/* -------------------- */

let i = 0;

// do {
//   console.log('do while', i);
//   i++;
// } while (i < 2);

// 조건이 맞지 않아도 1번은 실행하게 된다.

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

//

// do ~ while 문 (순환)
// let start = 0;
// let num2 = prompt('number>', 0);
// do {
//   console.log(start);
//   start++;
// } while (start < num2);

// let repeat = prompt('number>', 0);
// let count = 0;
// do{
//   if( count >= 10){
//     break;
//   }
//   console.log(++count);
// }while(repeat--)

// - 위 do ~ while 문을 순방향으로 순환되도록 설정

// class 가 여러개라면 첫번째를 가져옴 여러개 가져오려면 querySelectorAll
// let first = document.querySelector('.first');

// do {
//   console.log(first.nodeType);
//   first = first.nextSibling;
// } while (first.nodeType !== document.ELEMENT_NODE);

// nextSibling은 node에서 가장 작은 요소를 먼저 찾는다 - 공백을 생각하기때문에 nextSibling을 계속 써야함.
// nodeType으로 노드의 타입 확인으로 공백을 제거 해줄수 있다.
// document.ELEMENT_NODE === 1
// document.ATTRIBUTE_NODE === 2
// document.TEXT_NODE === 3

// nextElementSibling 있음.. 허허

// function next(node) {
//   do {
//     node = node.nextSibling;
//   } while (node.nodeType !== 1);

//   return node;
// }

// const second = next(first);
// const third = next(second);

// console.log(second);
let second = document.querySelector('.second');
function preview(node) {
  do {
    node = node.previousSibling;
  } while (node.nodeType !== 1);
  return node;
}

const first = preview(second);
