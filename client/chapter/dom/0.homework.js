//querySelector

const button = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
console.log(button);

function timer() {}
setTimeout(timer, 3000);

let isOpened = false;

//eventListener 이벤트 핸들러  - 본인의 객체를 가지고 있다.
const handleMenu = (e) => {
  // console.log('open');
  // 기본 태그의 동작을 차단함
  e.preventDefault();

  if (!isOpened) {
    menu.classList.add('is-active');
  } else {
    menu.classList.remove('is-active');
  }

  isOpened = !isOpened;

  // menu.classList.toggle('is-active')
  // menu.classList.remove('is-active')
};
button.addEventListener('click', handleMenu);

//classList

//preventDefault

////////////////////////////////////////////////////////////////
/*
/ querySelector
const button = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

// console.log( button );

// eventListener 이벤트 핸들러  => click : 객체  , scroll : 객체

function timer(){

}

setTimeout(timer, 3000);

// global gsap 

let isOpend = false;

function handleMenu(e){
  
  e.preventDefault()

  // 메뉴에게 is-active 클래스를 넣어준다.

  // 메뉴에게 클래스를 넣어준다 is-active

  if(!isOpend){
    menu.classList.add('is-active');
    
    gsap.from('li',{x:30,opacity:0,stagger:0.2,onComplete(){
      console.log('end');
    }})

  }else{
    menu.classList.remove('is-active');
    
    gsap.set('li',{x:0,opacity:1})
  }

  isOpend = !isOpend;

  // menu.classList.toggle('is-active')
  // menu.classList.remove('is-active')


}



button.addEventListener('click',handleMenu)




// Node.addEvent...


// classList


// preventDefault

*/
