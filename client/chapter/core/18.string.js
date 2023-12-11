/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength = message.length;

// 특정 인덱스의 글자 추출
let extractCharacter = message[5];
console.log('extractCharacter :', extractCharacter);

// 문자열 중간 글자를 바꾸는 건 불가능 immutable!!
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;
message[3] = 'Z';
console.log(message);

// 부분 문자열 추출
let slice = message.slice(4, -1);
console.log('slice :', slice);
console.log('b', message.slice(1));

let subString = message.substring(2, 5);
console.log('subString :', subString);
let subStr;

// 문자열 포함 여부 확인
let indexOf = message.indexOf('less');
console.log(`indexOf 'less' :`, indexOf); //없으면 -1

let lastIndexOf = message.lastIndexOf('s');
console.log('lastIndexOf : ', lastIndexOf);

let includes = message.includes('Less');
console.log('includes : ', includes);

let startsWith = message.startsWith('less');
console.log('startsWith : ', startsWith);

let endsWith = message.endsWith('.');
console.log('endsWith : ', endsWith);

// 체크 브라우저
function checkBrowser() {
  const agent = window.navigator.userAgent.toLowerCase();
  let browserName;

  switch (true) {
    case agent.indexOf('edge') > -1:
      browserName = 'MS Edge';
      break;
    case agent.indexOf('chrome') > -1 && !!window.chrome:
      browserName = 'Chrome';
      break;
    case agent.indexOf('safari') > -1:
      browserName = 'Safari';
      break;
    case agent.indexOf('firefox') > -1:
      browserName = 'firefox';
      break;
    case agent.indexOf('trident') > -1:
      browserName = 'IE';
      break;
  }

  return browserName;
}

checkBrowser();

// 공백 잘라내기
let str = '     a   b     c   d   ';

let trimLeft = str.trimStart();
console.log('trimLeft : ', trimLeft);

let trimRight = str.trimEnd();
console.log('trimRight : ', trimRight);

let trim = str.trim();
console.log('trim : ', trim);

let reg = str.replace(/\s*/g, '');

console.log(reg);

function normalText(string) {
  return string.replace(/\s*/g, '');
}

// 텍스트 반복
let repeat = message.repeat(3);

// 대소문자 변환
let toLowerCase;
let toUpperCase;

'10'.padStart(4, 0); // 4자리수에 나머지는 앞에서 부터 0으로 채워준다

'10'.padEnd(4, 0); // 4자리수에 나머지는 뒤에서 부터 0으로 채워준다

//텍스트 이름 변환 유틸리티 함수

function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, '')
      .toUpperCase()
  );
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}

//이미지 로디드 image loaded
//https://imagesloaded.desandro.com/
