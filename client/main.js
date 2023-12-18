//모듈 프로그래밍

//name export (이름 내보내기) -> {이름}
//default export (기본 내보내기) -> 이름
import { getNode, clearContents, insertLast, getNodes } from './lib/index.js';

// const result = getNode('.result');
// const first = getNode('#firstNumber');
// const second = getNode('#secondNumber');
// const clear = getNode('#clear');

// result.innerHTML = first.value + second.value;

// function handleInput() {
//   const firstValue = +first.value;
//   const secondValue = +second.value;
//   const total = firstValue + secondValue;
//   clearContents(result);
//   insertLast(result, total);

//   //result.textContent = total;

//   /*
//     result.textContent = ''
//     insertLast(result,total)
//   */
// }

// function handleClear(e) {
//   e.preventDefault();
//   clearContents(first);
//   clearContents(second);
//   result.textContent = '-';
// }

// first.addEventListener('input', handleInput);
// second.addEventListener('input', handleInput);
// clear.addEventListener('click', handleClear);

// 이벤트 위임
const calculator = getNode('.calculator');
const result = getNode('.result');
const clear = getNode('#clear');
const numberInputs = Array.from(getNodes('input:not(#clear)'));

function handleInput() {
  const total = numberInputs.reduce((acc, cur) => acc + Number(cur.value), 0);

  clearContents(result);
  insertLast(result, total);
}

function handleClear(e) {
  e.preventDefault();

  numberInputs.forEach(clearContents);
  result.textContent = '-';
}

calculator.addEventListener('input', handleInput);
clear.addEventListener('click', handleClear);
