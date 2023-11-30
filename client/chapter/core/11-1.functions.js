/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

function getRandomValue() {
  return Math.random() > 0.5 ? 1 : 0; //1아니면 0을 내보내는 함수
}

// 함수 선언
function calcPrice(priceA, priceB, priceC = 0, priceD = getRandomValue()) {
  // 인수가 없을 때
  // 1.
  // if(!priceC) priceC = 0;
  // 2.
  // priceC ||= 0; //priceC = priceC || 0;
  // 3.
  // priceC ??= 0; //priceC = priceC ?? 0;

  // validation
  if (!priceA || !priceB) {
    throw new Error(
      'calcPrice 함수의 첫번째, 두번째 인수는 필수 입력값입니다.'
    );
  }
  // 오류가 발생하면 모든 코드읽기가 멈추게 된다. -> try catch 사용!

  return priceA + priceB + priceC + priceD;
}
// priceC 자리에 인수가 없다면 undefined가 되어 NaN이 return 된다.

// 함수 호출
const result = calcPrice(130, 250);
console.log(result);

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건
// 1. 하나의 기능만을 수행한다.
// 2. 함수 이름과 매개변수 이름을 직관적으로 잘짓는다. (어떤 기능의 함수인지 바로 알수있게)
// 3. 재사용성이 좋아야 한다.

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
function rem(px, defaultPx = 16) {
  if (!px) throw new Error('rem 함수의 첫번째 인수는 필수 입력 값입니다.');

  const pixel = parseInt(px);
  const defaultPixel = parseInt(defaultPx);
  const result = `${pixel / defaultPixel}rem`;
  return result;
}

// console.log(rem(20));
// console.log(rem('25px'));
// console.log(rem('30px', 10));

// console.assert(rem(20) === '1.25rem');
// console.assert(rem('25px') === '1.5625rem');
// console.assert(rem('30px', 10) === '3rem');

/*
function rem(pxValue,base = 16){
    if(!pxValue) throw new Error('rem 함수의 첫 번째 인수는 필수 입력 값 입니다.');
    if(typeof pxValue === 'string'){
    pxValue = parseInt(pxValue,10);
  }
  if(typeof base === 'string'){
    base = parseInt(base,10);
  }  
  return pxValue / base + 'rem'
} 
*/

/*
 단축! && 연산자는 첫번째 false를 찾는것으로 값이 숫자면 string이 아니기 때문에 바로 반환, 하지만 string 인경우 뒤에가 실행됨으로 parseInt 변환값으로 나온다. 
  typeof pxValue === 'string' && (pxValue = parseInt(pxValue,10));
  typeof base === 'string' && (base = parseInt(base,10));
*/

/*
함수만들때 순서
1.function name
2. parameter, arguments
3. return value
4. validation
5. text [test driven development]
*/

// css(node: string, prop: string, value: number|strung) : string;
// 스타일값 가져오기
// document.body.style //css computed 된 값은 불러올수 없음 - html 모두 불러온 다음 확인할수있기 때문에
// getComputedStyle(document.body).fontSize

function getStyle(node, prop) {
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }
  if (typeof node !== 'string') {
    throw new Error('getStyle 함수의 두번째 인수는 string 타입이어야 합니다. ');
  }

  return getComputedStyle(node, null)[prop];
}

// getStyle('.first', 'font-size')    ->'32px'
// getStyle('body', 'color')          ->'rgb(0, 0, 0)'

function setStyle(node, prop, propValue) {
  if (
    typeof node === 'string' &&
    typeof prop === 'string' &&
    typeof propValue === 'string'
  ) {
    node = document.querySelector(node);
    node.style[prop] = propValue;
  }
}

// setStyle('body', 'backgroundColor', 'orange');
// setStyle('.first', 'backgroundColor', 'pink');

/* 
  function setStyle(node,prop,value){

    if(typeof node === 'string') node = document.querySelector(node);
    if(typeof prop !== 'string') throw new Error('setStyle 함수의 두 번째 인수는 string 타입 이어야 합니다.');
    if(!value) throw new Error('setStyle 함수의 세 번째 인수는 필수값 입니다.')
    
    node.style[prop] = value;

  }
  setStyle('.first','background','hotpink');
*/

function css(node, prop, value) {
  // if (!value) {
  //   return getStyle(node, prop);
  // } else {
  //   setStyle(node, prop, value);
  // }

  return !value ? getStyle(node, prop) : setStyle(node, prop, value);
}

css('.first', 'backgroundColor'); //getter
css('.first', 'backgroundColor', 'hotpink'); //setter

/*
  // const css =  (node,prop,value) =>!value ? getStyle(node,prop) : setStyle(node,prop,value);

  function css(node,prop,value){
    // if(!value){
    //   return getStyle(node,prop) // getter
    // }else{
    //   setStyle(node,prop,value) // setter
    // }

    return !value ? getStyle(node,prop) : setStyle(node,prop,value);

  } 
*/

// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 style 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.

//
// function sayHi() {
//   // (1) 함수 생성
//   alert('Hello');
// }

// let func = sayHi; // (2) 함수 복사

// func(); // Hello     // (3) 복사한 함수를 실행(정상적으로 실행됩니다)!
// sayHi(); // Hello    //     본래 함수도 정상적으로 실행됩니다.

/* 
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();}

function showOk() {
  alert( "동의하셨습니다." );
}

function showCancel() {
  alert( "취소 버튼을 누르셨습니다." );
}

// 사용법: 함수 showOk와 showCancel가 ask 함수의 인수로 전달됨
ask("동의하십니까?", showOk, showCancel);
*/

// 함수 표현식은 실제 실행 흐름이 해당 함수에 도달했을 때 함수를 생성합니다. 따라서 실행 흐름이 함수에 도달했을 때부터 해당 함수를 사용할 수 있습니다.

// 위 예시를 이용해 설명해 보도록 하겠습니다. 스크립트가 실행되고, 실행 흐름이 let sum = function…의 우측(함수 표현식)에 도달 했을때 함수가 생성됩니다. 이때 이후부터 해당 함수를 사용(할당, 호출 등)할 수 있습니다.

// 하지만 함수 선언문은 조금 다릅니다.

// 함수 선언문은 함수 선언문이 정의되기 전에도 호출할 수 있습니다.

// 그럼 if문 밖에서 welcome 함수를 호출할 방법은 없는 걸까요?

// 함수 표현식을 사용하면 가능합니다. if문 밖에 선언한 변수 welcome에 함수 표현식으로 만든 함수를 할당하면 되죠.  -> 많은 일은 아님.

// 요약
// 함수는 값입니다. 따라서 함수도 값처럼 할당, 복사, 선언할 수 있습니다.
// “함수 선언(문)” 방식으로 함수를 생성하면, 함수가 독립된 구문 형태로 존재하게 됩니다.
// “함수 표현식” 방식으로 함수를 생성하면, 함수가 표현식의 일부로 존재하게 됩니다.
// 함수 선언문은 코드 블록이 실행되기도 전에 처리됩니다. 따라서 블록 내 어디서든 활용 가능합니다.
// 함수 표현식은 실행 흐름이 표현식에 다다랐을 때 만들어집니다.
