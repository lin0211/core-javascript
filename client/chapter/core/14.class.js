//클래스는 항상 엄격 모드로 실행됩니다(use strict)

/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

class Animal {
  constructor(name) {
    this.name = name;
    this.stomach = [];
    this.legs = 4;
    this.tail = true;
  }

  get eat() {
    return this.stomach;
  }
  set eat(value) {
    this.prey = value;
    this.stomach.push(value);
  }
}

//const animal = new Animal('rabbit');

class Tiger extends Animal {
  constructor(name) {
    super(name); //부모의 constructor를 가져옴
    this.pattern = '호랑이무늬';
  }

  static bark() {
    //static method
    return '어흥!';
  }

  hunt(target) {
    this.prey = target;
    return `${target} 에게 조용히 접근한다.`;
  }
}

const 한라산호랑이 = new Tiger('포동이');

한라산호랑이.hunt('사슴'); // instance method

//이미 쓰고 있었던 Array  class!
class Array {
  constructor() {}

  static isArray() {}

  forEach() {}

  reduce() {}

  map() {}
}

/*  객체로 받고 for of로 constructor 생성
class Animal {  
  constructor(options){
    for(let [key,value] of Object.entries(options)){
      this[key] = value
    }
  }
  get eat(){
    return this.stomach
  }
  set eat(value){
    this.prey = value;
    this.stomach.push(value)
  }
}
const animal = new Animal({name:'포동이',age:15})
*/

/*

+ 객체의 상속 - __proto__
상속의 단계만 보여줄뿐, 새로운 상속된 데이터 변경이 있으면 다같이 바뀜

+ 생성자 함수의 상속 
{} = new F()
.prototype 을 통해 값을 전달
.call()을 사용하여 불러옴
상속보단 복제해와 사용한다는 개념
생성자를 통해 생성된 객체가 가진 능력 - instance
함수가 가진 능력(누구나 사용가능) - static

+ 클래스
생성자는 클래스 자체를 가리킴
constructor - 최초 1회 생성
여러번 쓰고싶다면 method사용
확장하고 싶다면 extends 사용- 부모능력을 가지면서 본인의 능력도 가짐

*/
