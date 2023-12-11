function earth() {
  let water = true;

  let apple = {
    founder: 'Steve Jobs',
    ceo: 'Tim Cook',
    product: ['iphone', 'macbook', 'macStudio', 'appleWatch'],
  };

  let gravity = 10;

  // 함수의 이름이 필요없다
  return function (value) {
    gravity = value;
  };
}

const ufo = earth();

//ufo(1);

const button = document.querySelector('button');

const handleClick = (() => {
  let isClicked = false;

  return function () {
    if (!isClicked) {
      document.body.style.background = 'orange';
    } else {
      document.body.style.background = 'white';
    }

    isClicked = !isClicked;
  };
})();

button.addEventListener('click', handleClick); // 이벤트 생성
button.removeEventListener('click', handleClick); // 이벤트 제거

/* 
const handleClick = (() => {
  let isClicked = false;

  return function () {
    if (!isClicked) {
      document.body.style.background = 'orange';
    } else {
      document.body.style.background = 'white';
    }

    isClicked = !isClicked;
  };
});

button.addEventListener('click', handleClick());
*/

// const a = (b)=>(d)=>(c)=> b+d+c
// function a(){
//   return function(){
//     return function(){
//       b+d+c
//     }
//   }
// }

function bindEvent(node, type, handler) {
  node.addEventListener(type, handler);
  return () => node.removeEventListener(type, handler);
}

const remove = bindEvent(button, 'click', handleClick);

// react hooks의 원리
// 함수는 값을 저장할수 없었지만 closure를 통해서 저장이 가능해짐
function useState(initValue) {
  let value = initValue;

  function read() {
    return value;
  }

  function write(newValue) {
    value = newValue;
  }

  return [read, write];
}

const [state, setState] = useState(true);
