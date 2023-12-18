/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */
const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click', (e) => {
  console.log(e.target); //마우스가 처음 닿는 대상
  console.log(this); //arrow function 임으로 윈도우가 나옴
  console.log(e.currentTarget); //때문에 currentTarget 사용
  console.log('%c section', 'color:orange');
});

// article.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('%c section', 'color:dodgerblue');
// });

// p.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('%c section', 'color:pink');
// });
/* 캡처링 ----------------------------------------------------------------- */
