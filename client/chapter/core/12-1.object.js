/* global isObject */

// 구조분해와 숏핸드 객체
function makeUser(name, age) {
  const { a1, b2 } = { a: 10, b: 30 };

  return { name, age };
}

const user = makeUser('tiger', 36);

/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /*css*/ `
.dialog {
  position: fixed;
  z-index: 10000;
  top: 50%;
  left: 50%;
  width: 60vw;
  max-width: 800px;
  height: 40vh;
  min-height: 280px;
  transform: translate(-50%, -50%);
}
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: 800,
  height: '40vh',
  minHeight: 280,
  transform: 'translate(-50%,-50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uid: 'user-id-aszxcmklqwe!@#123',
  name: 'tiger',
  email: 'seonbeom2@gmail.com',
  isSignIn: false,
  permission: 'paid', // paid | free
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

console.log(authUser.uid);
console.log(authUser['uid']);
console.log(authUser.name);
console.log(authUser['name']);
console.log(authUser.email);
console.log(authUser['email']);
console.log(authUser.isSignIn);
console.log(authUser['isSignIn']); //get
console.log((authUser.permission = ''));
console.log((authUser['permission'] = 'paid')); //set

Object.prototype.SIGN = true;

for (let key in authUser) {
  if ({}.hasOwnProperty.call(authUser, key)) {
    console.log(key);
    console.log(authUser[key]);
  }
}

// 객체의 key만을 모아놓은 배열
let keyList = Object.keys(authUser);
// 객체의 value만을 모아놓은 배열
let valueList = Object.values(authUser);

// 계산된 프로퍼티 (computed property)
let calculateProperty = 'tel'; // phone | tel

function createUser(name, age, phone = '010-0000-0000') {
  return {
    name,
    age,
    [calculateProperty]: phone,
  };
}

const user = createUser('tiger', '35');

// 프로퍼티 포함 여부 확인

// 프로퍼티 나열

// 프로퍼티 제거(remove) or 삭제(delete)
// 제거 authUser.email = null;
// 삭제 delete authUser.email

// 비워두기

function removeProperty(object, key) {
  if (isObject(object)) {
    object[key] = null;
  }
}

removeProperty(authUser, 'name');

// 삭제
function deleteProperty(obj, prop) {
  delete obj[prop];
}

// removeProperty(authUser, 'name')
// deleteProperty(authUser, 'name')

Object.prototype.toString.call(null); //[object Null]
Object.prototype.toString.call(null).slice(8, -1).toLowercase(); //Null

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  name,
  email,
  authorization,
  isLogin,
};

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

const arr = [10, 100, 1000, 10000];

// const a1 = arr[0]
// const a2 = arr[1]

const [a1, a2, a3, a4] = arr;

for (let [key, value] of Object.entries(authUser)) {
  // let key = keyValue[0];
  // let value = keyValue[1];

  console.log(key);
}

const [first, second, third] = document.querySelectorAll('span'); // NodeList

// const first = document.querySelector('.first');
// const second = document.querySelector('.second');
// const third = document.querySelector('.third');

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

const scores = {
  Tom: 85,
  Bob: 50,
  Alex: 6,
  Mary: 33,
};

// const {} = salaries;
// 순서는 상관 없다.
// 변수의 이름을 변경가능
// const {Tom, Bob, Alex, Mary} = scores
const { Tom: tom, Bob: bob, Alex: alex, Mary: mary } = scores;

function createUserData(obj) {
  console.log(obj);

  const { userName, age, job, gender = 'male' } = obj;
  return {
    userName,
    age,
    job,
    gender,
  };
}

createUserData({
  userName: 'tiger',
  age: 40,
  job: 'developer',
});
