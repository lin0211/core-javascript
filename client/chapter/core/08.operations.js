let counter = 1;
console.log(counter);
console.log(counter++);
console.log(counter);

'' + 1 + 0; //"10"   "" + 가 먼저  string
'' - 1 + 0; // -1    "" -         숫자형
true + false; // 1
6 / '3'; // 2
'2' * '3'; // 6
4 + 5 + 'px'; // "9px"
'$' + 4 + 5; // "$45"
'4' - 2; // 2
'4px' - 2; // NaN
7 / 0; //Infinity
'  -9  ' + 5; //"  -9  5"
'  -9  ' - 5; //-14
null + 1; //1
undefined + 1; //NaN
' \t \n' - 2; //-2   escape sequence 0로 인식

/* ---------------- */
/* Operators        */
/* ---------------- */

// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상
let a = '10';
let b = '30';

// 단항 연산자
let unary = +a;
console.log('unary: ', unary);

// 이항 연산자
let binary = a + b;
let binary2 = +a + +b;
console.log('binary: ', binary);
console.log('binary2: ', binary2);

// 삼항 연산자
let ternary = a === 10 ? true : false;
console.log('ternary: ', ternary);

// 산술 연산자: 덧셈
let addition = 1 + 2;

// 산술 연산자: 뺄셈
let subtraction = 20 - 1;

// 산술 연산자: 곱셈
let multiplication = 3 * 3;

// 산술 연산자: 나눗셈
let division = 8 / 2;

// 산술 연산자: 나머지
let remainder = 4 % 3;

// 산술 연산자: 거듭 제곱
let power;

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1, 2, 3] + [4, 5, 6]; //1,2,34,5,6 string으로 인식함
console.log([1, 2, 3].concat([4, 5, 6]));

let first = [1, 2, 3];
let second = [4, 5, 6];

// spread syntax
console.log([...first, ...second]);

// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)

// 선,후 증감 연산자
// ++, --

let counter1 = 0;
console.log(++counter1);
console.log(counter1);

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
// let total = (count % 4) * (count /= 2) + count ** 3; // ?
// console.log(total);

let total = count % 4;
count = count / 2;
let pow = count ** 3;
total = total * count + pow;
console.log(total);
