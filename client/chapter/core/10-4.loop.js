/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  hasOwnProperty() {
    return '????';
  },
};

// in 객체에서 원하는 값을 찾을 때

// const key = 'standardName';
// console.log('creator' in javaScript);

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신(own)의 속성(property)인지 확인하는 방법
// - "자신의 속성을 가지고(has)있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// 만약에 메소드로 hasOwnProperty()를 넣어둔 경우, 본래 기능이 사라짐.
// console.log(javaScript.hasOwnProperty(key));
// 때문에 가장 조상격의 object를 불러온다
// console.log(Object.prototype.hasOwnProperty.call(javaScript, key));

Array.prototype.forEach.call('안녕', (a) => console.log(a));

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?
Object.prototype.nickName = 'tiger';
// for (let key in javaScript) {
//   if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
//     console.log(key);
//   }
// }

const tens = [10, 100, 1000, 10000];

for (let key in tens) {
  // console.log(key);
}

// - > for in은 객체에 사용 , 객체를 순화하는 용도로 사용
// 배열은 순서 보장이 안됨, 성능x

// enumerable 열거가능한 - 반복문에 수집이 되는지 안되는지.
// iterable 순환가능한 -
// property 재정립

// 객체에 조건을 넣어주는법.
const obj = {};

obj.nickName = 'tiger';

Object.defineProperty(obj, 'key1', {
  enumerable: false,
  value: 'kindtiger',
});

Object.defineProperties(obj, {
  property1: {
    value: true,
    writable: true,
    enumerable: true,
  },
  property2: {
    value: 'hello',
    writable: false,
    configurable: true,
  },
});

//
// enumerable = true라면

// 열거에 도망가려고 할 때 이누머!!(이놈아!!)하고 호통쳐서 무서워서 못 도망가니까 열거됨
// enumerable = false라면
// 열거에 도망가려고 해도 호통 안 쳐서 도망간거임
