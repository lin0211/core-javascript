/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;
console.log(typeof YEAR); //number
console.log(typeof String(YEAR)); //string
console.log(typeof (YEAR + '')); //string

// undefined, null
let days = null;
let weekend;

console.log(typeof days); //object
console.log(typeof (days + '')); //string
console.log(typeof weekend); //undefined
console.log(typeof (weekend + '')); //string

// boolean

let isTrue = true;
let isFalse = false;

console.log(typeof (isTrue + '')); //string

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

let friend;
console.log(Number(friend)); //NaN

// null
let money = null;
console.log(Number(money)); //0

// boolean
let cutie = true;
console.log(Number(cutie)); //1

// string -> 숫자로
let num = '250';
console.log(Number(num));
console.log(+num);
console.log(num / 1);
console.log(num * 1);

// numeric string
const width = '105.3px';
console.log(Number(width)); //NaN
console.log(parseInt(width, 10)); //105
// parseInt radix 몇진수인지 기본값이 10진수이지만 써주는게 좋다.
console.log(parseFloat(width)); //105.3

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''

console.log(Boolean(friend)); //false
console.log(Boolean('')); //false
console.log(Boolean(' ')); //true

// 위에 나열한 것 이외의 것들
