/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
// arguments가 없다! .
let calcAllMoney = (...args) => {
  return args.reduce((acc, cur) => {
    acc + cur;
  }, 0);
};

let calcMoney2 = (...args) => args.reduce((acc, cur) => acc + cur, 0);

calcAllMoney(10000, 8900, 1360, 2100);

// 함수 선언 → 화살표 함수 (표현)식
//                rest parameter
/*
let calcAllMoney = (...args) => {

  let total = 0;
  
  
  total = args.reduce(function(acc,cur){

    return acc + cur;

  },0)

  return total;

};

const result = calcAllMoney(1000,5000,4500,15000);

console.log( result );
*/

// 화살표 함수와 this

// 일반 함수의 양면의 얼굴   //생성자
// arrow 함수는 생성자 함수 등록이 불가능하다!!

function Button(name) {
  this.name = name;
}

const b = new Button('tiger'); // 객체가 생선된다.

// 일반함수
// - constructor 내장
// - this: 나를 호출한 대상을 this로 찾음
// - 객체의 메서드로 사용이 많이 됨. => this를 찾기 위해

// 화살표함수
// - constructor 비내장
// - this: 자체를 바인딩(가지지)않음
// - 메서드 안의 함수로 많이 사용됨. // 내 상위 this를 가져오기 위해

const user = {
  total: 0,
  name: 'lin',
  age: 30,
  address: 'Korea ---',
  grades: [80, 90, 100],
  totalGrades: () => {
    console.log(this); //arrow 함수는 this를 갖고 있지 않음. 때문에 g상위나 global 올라감
  },
};

const user2 = {
  total: 0,
  name: 'lin',
  age: 30,
  address: 'Korea ---',
  grades: [80, 90, 100],
  totalGrades: function () {
    console.log('일반 함수 : ', this); // user2

    function globalHi() {
      console.log('globalHi : ', this); //global
    }
    globalHi();

    const arrowHi = () => {
      console.log('arrowHi : ', this); //arrow
    };
    arrowHi();
  },
};
user2.totalGrades();

const user3 = {
  total: 0,
  name: '상원',
  age: 13,
  address: '서울시 중랑구 면목동',
  grades: [80, 90, 100],
  totalGrades: function () {
    this.grades.forEach((item) => {
      this.total += item;
    });
    return this.total;
  },
};

console.log(user3.totalGrades());

/*        결과적으로는              */
const finaluser = {
  total: 0,
  name: 'lin',
  age: 30,
  address: 'Korea ---',
  grades: [80, 90, 100],
  // concise method: 일반 함수처럼 this를 잘 찾아준다. 그리고 constructor은 비내장
  totalGrades() {
    this.grades.forEach((item) => (this.total += item));
    return this.total;
  },
};

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */
// 재귀함수
// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
  let result = 1;

  for (let i = 0; i < powerCount; i++) {
    result *= numeric;
  }
  return result;
};

// let powExpression = (numeric, powerCount) => {
//   Array(powerCount).fill(null).reduce((acc)=>{
//     return acc * numeric
//   },1)
// }

let powExpression = (numeric, powerCount) =>
  Array(powerCount)
    .fill(null)
    .reduce((acc) => acc * numeric, 1);

powExpression(2, 53);

// repeat(text: string, repeatCount: number): string;
const repeatExpression = (string, count) => Array(count).fill(string).join('');

const repeat = (string, count) => {
  let result = '';
  for (let i = 0; i < count; i++) {
    result += string;
  }
  return result;
};

repeat('hello-', 3);
repeatExpression('hello-', 3);

// map : 배열을 받아 새로운 배열을 반환(생성)환하기 위해

// filter : 배열을 받아 필터링된 값들만 배열로 반환하기 위해

// reduce : 배열을 받아 무언가의 값으로 만들기 위해

// forEach : 배열을 받아 순환하기 위해 (값 반환 x)
