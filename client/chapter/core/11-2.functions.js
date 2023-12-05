/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

// 함수선언문
// function calcTotal(moneyA, moneyB, moneyC, moneyD) {
//   return moneyA + moneyB + moneyC + moneyD;
// }

// const resultX = calcTotal(10000, 8900, 1360, 2100);
// const resultY = calcTotal(21500, 3200, 9800, 4700);
// const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (a, b, c, d, e, f, g) {
  //함수 안에서만 접근 가능한 인수들의 집합 객체로써 배열과 유사하여 유사 배열 변수 :  arguments
  //arguments 객체를 사용해서 함수의 매개변수 없이 모든 아이템들을 수집 : 모든 값 더하기.
  // console.log(arguments);

  let total = 0;
  // 1. for 문
  // for (let i = 0; i < arguments.length; i++) {
  //   total += arguments[i];
  // }

  // 2. for of
  // for (let value of arguments) {
  //   total += value;
  // }

  // 빌려쓰기 - 1회성!
  // Array.prototype.forEach.call(arguments, function (item) {
  //   total += item;
  // });

  // arguments의 (태생) 부모 자체를 배열로 바꿔 버리면? - 오염이지만 위험하지 않음!!
  // arguments.__proto__ = Array.prototype;

  // arguments는 유사배열이기 때문에 진짜 배열로 변환해야함.
  // 유사 배열을 진짜 배열로 변환하는 방법
  // 1. 구식
  const arr1 = Array.prototype.slice.call(arguments);
  // 2. array static method
  const arr2 = Array.from(arguments);
  // 3. Spread syntax
  const arr3 = [...arguments];

  console.log(arr1);
  console.log(arr2);
  console.log(arr3);

  // 배열의 합구하기
  // forEach
  // arr3.forEach((a) => {
  //   total += a;
  // });

  // map : 값을 반환, 배열만 반환
  // filter : 값을 반환, 배열만 반환
  // reduce: 값을 반환
  total = arr3.reduce((arr, cur) => arr + cur, 0);

  return total;

  // return a + b + c + d + e + f + g;
};

const result = calculateTotal(1000, 2300, 5000, 1500, 3500, 4600, 35000);
console.log(result);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression;

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression;

// 콜백 함수 (표현)식
let callbackFunctionExpression = function (isActive, success, fail) {
  if (isActive) {
    success();
  } else {
    fail();
  }
};

callbackFunctionExpression(
  false,
  () => {
    console.log('성공!');
  },
  () => {
    console.log('실패!');
  }
);

// 함수 선언문 vs. 함수 (표현)식

function movePage(url, success, fail) {
  url.match(/http.www/) || typeof url === 'string' ? success() : fail();
}

movePage(
  'https://www.naver.com',
  () => {
    console.log('해당페이지로 이동');
  },
  () => {
    console.log('잘못된 url입니다');
  }
);

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;
//  함수가 선언 됨과 동시에 실행되는 것을 말한다.
// var를 가둬두기 위해 만들어짐. - var는 function 안에 가둠

(function a() {})();

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression

let IIFE;

// 함수가 선언 됨과 동시에 실행되는 것을 말합니다.

// 📂
// import css from 'css.js' // module

// var는 블록 스코프 : x
// var는 함수 스코프 : o

// incapsulation (캡슐화)
// 모듈화

// const MASTER = (function (g){

//   console.log( g.alert() );
//   let uuid =  'askdjazxjd!@#!@$123';

//   return {
//     getKey(){
//       return uuid
//     },
//     setKey(value){
//       uuid = value
//     }
//   }

// })(window);

// // console.log(MASTER.getKey());

// MASTER.setKey('새로운 비밀번호')

const css = (function () {
  function getStyle(node, prop) {
    if (typeof node === 'string') node = document.querySelector(node);
    if (typeof prop !== 'string')
      throw new Error(
        'getStyle 함수의 두 번째 인수는 string 타입 이어야 합니다.'
      );

    return getComputedStyle(node, null)[prop];
  }

  function setStyle(node, prop, value) {
    if (typeof node === 'string') node = document.querySelector(node);
    if (typeof prop !== 'string')
      throw new Error(
        'setStyle 함수의 두 번째 인수는 string 타입 이어야 합니다.'
      );
    if (!value)
      throw new Error('setStyle 함수의 세 번째 인수는 필수값 입니다.');

    node.style[prop] = value;
  }

  function css(node, prop, value) {
    // if(!value){
    //   return getStyle(node,prop) // getter
    // }else{
    //   setStyle(node,prop,value) // setter
    // }

    return !value ? getStyle(node, prop) : setStyle(node, prop, value);
  }

  return css;
})();
