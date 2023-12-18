/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

/* 클래스를 사용한 위임 ---------------- */
const nav = getNode('nav');

function handleClick(e) {
  let target = e.target;
  let li = target.closest('li');
  let dataName = attr(li, 'data-name');

  if (!li) return;

  // closest를 이용한 className 조건을 찾기
  if (li.className === 'home') {
    li.style.background = 'orange';
  }

  // 커스텀 속성을 이용한 조건 만들기
  if (li.dataset.name === 'contact') {
    li.style.background = 'dodgerblue';
  }

  // 전에 만들어둔 커스텀 속성 만들기 함수를 이용한 조건 만들기
  if (dataName === 'about') {
    li.style.background = 'pink';
  }
}
nav.addEventListener('click', handleClick);
/* 속성을 사용한 위임 ------------------ */

/* 노드를 사용한 위임 ------------------ */
