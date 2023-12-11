/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

const isArray = (data) => Array.isArray(data);
const isNull = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null';

function normalIsArray(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'
  );
}

const arr = [10, 100, 1000, 10_000];

const people = [
  {
    id: 0,
    name: '김다영',
    job: '프론트엔드 개발자',
    age: 25,
    imageSrc: 'ASdkl31',
  },
  {
    id: 1,
    name: '김충만',
    job: '치킨집사장',
    age: 51,
    imageSrc: 'asFkzo23',
  },
  {
    id: 2,
    name: '조윤주',
    job: '화가',
    age: 12,
    imageSrc: 'Gzoskq13',
  },
  {
    id: 3,
    name: '송현규',
    job: '마델',
    age: 25,
    imageSrc: 'aabaq23',
  },
];

/* 요소 순환 ---------------------------- */

// forEach

arr.forEach((item, index) => {
  console.log(item, index);
});

// 여러 항목들을 이벤트 바인딩 - 비효율!!
// event delegation 중요! 이벤트 위임이 필요
const span = document.querySelectorAll('span');

span.forEach((item) => {
  item.addEventListener('click', function () {
    this.style.color = 'red';
  });
});

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice
// sort

//reverse는 원형을 파괴하지만 toReversed는 파괴하지 않음
const reverseArr = [...arr].reverse();
const reverseArray = arr.toReversed();
console.log(reverseArr);
console.log(reverseArray);

// 제거 된것을 반환
//splice 원형을 파괴하지만 toSpliced는 파괴하지 않음
const splice = arr.splice(1, 2);
console.log(splice);

console.log(arr.splice(1, 2, 'javascript', 'css', 'react'));

//오름차순
//sort 원형을 파괴하지만 toSorted는 파괴하지 않음
arr.sort((a, b) => a - b);

const card = people.map((item, index) => {
  return /* html */ `
    <div class='userCard card${index}'>
      <div class="imageField">
        <img src="${item.imageSrc}.jpg" alt="${item.alt}" />
      </div>
      <span>이름 : ${item.name}</span>
      <span>나이 : ${item.age}</span>
      <span>직업 : ${item.job}</span>
    </div>
  `;
});

// console.log(card);

card.forEach((item) => {
  document.body.insertAdjacentHTML('beforeend', item);
});

const newAge = people.map((item) => item.age - 2);

console.log(newAge);

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find

// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
const totalAge = people.reduce((acc, cur) => acc + cur.age, 0);

const template = people.reduce(
  (htmlCode, cur) => htmlCode + `<div>${cur.name} : ${cur.age} 살</div>`,
  ''
);

// console.log( template );

document.body.insertAdjacentHTML('beforeend', template);
// reduceRight

/* string ←→ array 변환 ------------------ */

// split
// join
