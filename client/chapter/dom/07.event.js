/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */
//const first = getNode('.first');

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
function handleClick() {
  console.log('클릭발생!');
}
// 중복 불가!
//first.onclick = handleClick;
// 3. 메서드 : element.addEventListener(event, handler[, phase])

// first.addEventListener('mouseenter', handleClick);
// first.addEventListener('mouseleave', handleClick);

// first.removeEventListener('mouseenter', handleClick);

/* 이벤트 추가/제거 --------------------------------------------------------- */
//closure를 이용하여 remove 함수에서도 bindEvent 모든 변수를 사용할수있게

// function bindEvent(node, type, handler) {
//   if (typeof node === 'string') node = getNode(node);
//   node.addEventListener(type, handler);
//   return function () {
//     node.removeEventListener(type, handler);
//   };
// }

// const remove = bindEvent('.first', 'click', handleClick);

// - addEventListener
// - removeEventListener

const ground = getNode('.ground');
const ball = getNode('#ball');

function handleClickBall({ offsetX: x, offsetY: y }) {
  console.log(`X: ${x}`, `Y: ${y}`);

  ball.style.transform = `translate(${x - ball.offsetWidth / 2}px, ${
    y - ball.offsetHeight / 2
  }px)`;
}

// function handleClickBall(e) {
//   const { offsetX: x, offsetY: y } = e;
//   console.log(`X: ${x}`, `Y: ${y}`);
// }

ground.addEventListener('click', handleClickBall);
//ground.addEventListener('mousemove', handleClickBall);

//부화가 많음에 주의!(계속적인 div 생성 - canvas 이용)
// 몇초에 한번씩만 호출 or 마우스의 움직임이 끝나면 호출
// ground.addEventListener('mousemove', ({ offsetX: x, offsetY: y }) => {
//   // console.log(x,y);

//   let template = `
//     <div class="emotion" style="top:${y}px;left:${x}px">😍</div>
//   `;

//   ground.insertAdjacentHTML('beforeend', template);
// });

//debounce - 움직임이 끝나면 실행
ground.addEventListener(
  'mousemove',
  debounce(() => {
    console.log(this);
  }, 2000)
);

//this는 ground의 개념을 넘기기 위함이고, mousemove의 객체정보를 넘기기위해(유사배열) ..args로 받음
function debounce(callback, limit = 100) {
  let timeout;

  return function (...args) {
    console.log(args);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, limit);
  };
}

//throttle 일정시간마다 실행
ground.addEventListener(
  'mousemove',
  throttle(() => {
    console.log(this);
  }, 1000)
);

//throttle
function throttle(callback, limit = 100) {
  let waiting = false;
  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

//유저가 마우스를 놓았을때 실행해라!
window.addEventListener('resize', () => {
  console.log('resize!');
});

//call - 바로 실행
//apply - 바로 실행
//bind - 실행 시키지 않음

function func(a, b) {
  console.log(`this: ${this}`);
  console.log(`a: ${a}`);
  console.log(`b: ${b}`);
}

func(1, 2);
//call을 능력은 this 를 전달해준다. 뒤는 매개변수
func.call('tiger');
func.call('tiger', 1, 2);

// call과 같은데 agr 넣는 방식만 다르다. 배열로 전달
func.apply('tiger', [1, 2]);

//전달하지만 함수 실행은 되지 않는다. 묶여 있는 개념으로 담아서 사용
//예를 들면 eventListener에서 바로 실행하면 안되기 때문에
// const a = func.bind('tiger', 1, 2);
// button.addEventListener('click', a);

// 그러면 함수funcA와 함수 funcB가 있는데 funcB.apply(funcA, args)를 실행하고 funcB함수안에서 this를 사용하면 funcA로 가서 거기 있는 변수들을 사용할 수 있는건가요?

function funcA(a, b, c) {
  console.log(a, b, c);
}

function funcB(a, b, c) {
  this(a, b, c);
}

funcB.apply(funcA, [1, 2, 3]);
