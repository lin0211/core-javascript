/* ------------ */
/* For Loop     */
/* ------------ */

// 2 ~ 10까지의 짝수 출력하기

for (let i = 1; i <= 10; i++) {
  if (i % 2 != 0) continue;
  console.log(i);
}

let k = 1;
while (k <= 10) {
  if (k % 2 == 0) console.log(k);
  k++;
}

const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

let i = 0;
let l = frontEndDev.length;

while (i < l) {
  // console.log(frontEndDev[i]);
  i += 1;
}

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.

// for (let i = 0; i < frontEndDev.length; i++) {
//   if (frontEndDev[i] === 'SVG' || frontEndDev[i] === 'jQuery') continue;
//   console.log(frontEndDev[i]);
// }

/*{white}
let l = frontEndDev.length;
for(let i = 0; i < l; i++){
  
  let value = frontEndDev[i];
  let lower = value.toLowerCase();

  if(lower.includes('jquery') || lower.includes('svg')) continue;

  console.log(lower);

}
*/

//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.

for (let i = 0; i < frontEndDev.length; i++) {
  let value = frontEndDev[i];
  let lower = value.toLowerCase();
  console.log(value);
  if (lower.includes('JavaScript') === true) break;
}

//   - 무한 루프 (브레이크)
//   - for 문 (역순환)

let zero = 0;
for (let i = frontEndDev.length - 1; zero < i; i--) {
  let value = frontEndDev[i];
  console.log(value);
}

/*{white}
let l = frontEndDev.length;
for(let i = l, subject; (subject = frontEndDev[--i]);){
  
  console.log(subject);
}
*/
