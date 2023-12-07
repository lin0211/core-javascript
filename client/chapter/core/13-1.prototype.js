/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  get eat() {
    return this.stomach;
  },
  set eat(food) {
    this.prey = food;
    this.stomach.push(food);
  },
};

const tiger = {
  pattern: '호랑이무늬',
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  },
  __proto__: animal,
};

// tiger.__proto__ = animal

const 백두산호랑이 = {
  color: 'white',
  name: '포동이',
  __proto__: tiger,
};

// 생성자 함수

//일반함수 vs 생성자함수
//함수를 호출하는 방법에 따라 결정이 된다

function button() {}

button();

// 대문자로 만드는것은 관례
function Button2() {}

new Button2(); // 생성자 함수 -> 무조건 객체를 반환

// 생성자 함수에 프로토타입
let animals = {
  eats: true,
};

function Rabbit(name) {
  //Rabbit은 함수이기때문에 __proto__ 가 없음
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit('흰 토끼'); //  rabbit.__proto__ == animal  >> 객체는 __proto__

alert(rabbit.eats); // true

////////////////////////////////////////////////////////////////////////////////////

function Animal() {
  this.legs = 4;
  this.tail = true;
  this.stomach = [];

  this.getEat = function () {
    return this.stomach;
  };

  this.setEat = function (food) {
    this.prey = food;
    this.stomach.push(food);
  };
}

// const newAnimal = new Animal();

// console.log(newAnimal);

function Tiger(name) {
  //생성자 함수를 불러올때는 그냥 호출하지말고 call로 this를 바인딩
  Animal.call(this);
  this.name = name;
  this.pattern = '호랑이무늬';
  this.hunt = function (target) {
    this.prey = target;
    return `${target}에게 조용히 다가간다.`;
  };
}

const 한라산호랑이 = new Tiger('한라산');
const 금강산호랑이 = new Tiger('금강산');

////////////////////////////////////////////////////////////////////////////
function sum(a, b, c) {
  console.log(a, b, c); //1, 2, 3
  console.log(this); //안녕
}
sum.call('안녕', 1, 2, 3); // 바로 실행
// apply
// bind
