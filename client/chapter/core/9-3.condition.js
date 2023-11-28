/* ---------------- */
/* Switch           */
/* ---------------- */

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = NIGHT;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

switch (thisTime) {
  // 조건 유형(case): '아침'
  // '뉴스 기사 글을 읽는다.'
  case MORNING:
    console.log('뉴스 기사 글을 읽는다.');
    break;
  // 조건 유형(case): '점심'
  // '자주 가는 식당에 가서 식사를 한다.'
  case LUNCH:
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;

  // 조건 유형(case): '저녁'
  // '동네 한바퀴를 조깅한다.'
  case DINNER:
    console.log('동네 한바퀴를 조깅한다.');
    break;

  // 조건 유형(case): '밤'
  // '친구에게 전화를 걸어 수다를 떤다.'
  case NIGHT:
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;

  // 조건 유형(case): '심야'
  // 조건 유형(case): '새벽'
  // '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'
  case LATE_NIGHT:
  case DAWN:
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;

  default:
    console.log('그럼 언젠데?');
    break;
}

/* switch문 → if문 변환 --------------------------------------------------- */
if (thisTime === MORNING) {
  console.log('뉴스 기사 글을 읽는다.');
} else if (thisTime === LUNCH) {
  console.log('자주 가는 식당에 가서 식사를 한다.');
} else if (thisTime === DINNER) {
  console.log('동네 한바퀴를 조깅한다.');
} else if (thisTime === NIGHT) {
  console.log('친구에게 전화를 걸어 수다를 떤다.');
} else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
} else {
  console.log('그럼 언젠데?');
}

/* switch vs. if -------------------------------------------------------- */

// prompt를 통해 숫자 입력 (단 0~6까지만 가정)
// function getDay(num) {
//   // switch
//   switch (num) {
//     case 0:
//       console.log('sun');
//       break;
//     case 1:
//       console.log('mon');
//       break;
//     case 2:
//       console.log('tue');
//       break;
//     case 3:
//       console.log('wed');
//       break;
//     case 4:
//       console.log('thu');
//       break;
//     case 5:
//       console.log('fri');
//       break;
//     case 6:
//       console.log('sat');
//       break;
//   }
// }
// const today = getDay(+prompt('your number (0~6)'));

// function getDay(num) {
//   const value = Math.floor(Math.random() * 7);

//   switch (value) {
//     case 0:
//       console.log('월');
//       break;
//     case 1:
//       console.log('화');
//       break;
//     case 2:
//       console.log('수');
//       break;
//     case 3:
//       console.log('목');
//       break;
//     case 4:
//       console.log('금');
//       break;
//     case 5:
//       console.log('토');
//       break;
//     case 6:
//       console.log('일');
//       break;
//   }
// }
// const today = getDay(5); // 월 ~ 일

// 함수 기능별 나누기
function getRandom(max) {
  return Math.floor(Math.random() * (max + 1));
}

function getDay(num) {
  switch (num) {
    case 0:
      return '월';
    case 1:
      return '화';
    case 2:
      return '수';
    case 3:
      return '목';
    case 4:
      return '금';
    case 5:
      return '토';
    case 6:
      return '일';
  }
}
const today = getDay(getRandom(6)); // 월 ~ 일

// 요일 뽑아내기 =>   weekend 월-금 : 평일입니다. 토-일: 주말입니다.

function weekend() {
  const today = getDay(getRandom(6));
  console.log(today);

  // if(today.includes('토')){
  //   return '토요일'
  // } else if (today.includes('일')){
  //   return '일요일'
  // }else{
  //   return '평일'
  // }

  return today.includes('토')
    ? '토요일'
    : today.includes('일')
      ? '일요일'
      : '평일';
}

const todayIs = weekend();
console.log(todayIs);
