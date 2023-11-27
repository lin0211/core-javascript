/* -------------------------------------------- */
/*                  Legacy var                  */
/* -------------------------------------------- */

// var로 선언한 변수의 스코프는 함수 스코프이거나 전역 스코프입니다.
// 블록 기준으로 스코프가 생기지 않기 때문에 블록 밖에서 접근 가능합니다.

//  환경 ->  선언부마 호이스팅 되기 때문에

// console.log(outside); {yellow}
// var outside = 'outer';

// 먼저 자신의 블록 안에 있는지 검색하고 밖을 검사

/*{white}
var outside = 'outer';
{
  console.log(outside);

  var inside = 'inner';
}

console.log(inside);
*/
//var는 블록 스코프가 먹지 않고 밖에서도 불러와짐.

/*{pink}
let outside = 'outer';
{
  console.log(outside);

  let inside = 'inner';
}

console.log(inside);
*/
// 05.legacyVar.js:33 Uncaught ReferenceError: inside is not defined

// var는 변수의 중복 선언을 허용합니다 , let은 불가

// var a = 10;
// var a = 5;

// let b = 10;
// let b = 5;

// 선언하기 전 사용할 수 있는 var
console.log(c);
var c = 1234;
