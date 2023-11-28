/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let age = 20;
if (age >= 14 && age <= 90) {
  console.log('14세 이상 90세 이하입니다');
}

let a = 10;
let b = '';
let value = Boolean(b); //false

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log(AandB); //빈문자

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB); //빈문자

// logical AND assignment 논리곱 할당 연산자
// a &&= b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };
// {thisIsFalsy:false}

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };
// 2 ----> [2,3].length

// 로그인 구현하기

// let userName = prompt("who's there?");

// if (userName?.toLowerCase() === 'admin') {
//   let inputPW = prompt('password?');
//   if (inputPW === 'TheMaster') {
//     console.log('welcome');
//   } else if (inputPW === null || inputPW === '') {
//     console.log('canceled');
//   } else {
//     console.log('wrong password');
//   }
// } else if (userName === null || userName.replace(/\s*/g,'') === '') {
//   console.log('canceled');
// } else {
//   console.log('wrong user.');
// }

// optional chaining - ? 값이 없으면 말아~

// 로그인을 함수로

function login() {
  let userName = prompt("who's there?");

  if (!userName) return;

  if (userName?.toLowerCase() === 'admin') {
    let inputPW = prompt('password?');
    if (inputPW === 'TheMaster') {
      console.log('welcome');
    } else if (inputPW === null || inputPW === '') {
      console.log('canceled');
    } else {
      console.log('wrong password');
    }
  } else if (userName === null || userName.replace(/\s*/g, '') === '') {
    console.log('canceled');
  } else {
    console.log('wrong user.');
  }
}
