/* ------------------ */
/* Variables          */
/* ------------------ */

/*{blue}
// 과제 - https://ko.javascript.info/variables
// 1
let admin;
let name;
name = 'John';
admin = name;
alert(admin);

// 2
const ourPlanetName = "Earth";
let activeUserName
*/

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

/* variables ----------------------------------------------------------- */
// - 갯수 별 상품 가격 계산하기
let unitPrice;
let calcProductPriceByQuantity;
// - 구매 제품 가격의 총 합
let sumPrice;
let totalProductPrice;
// - 구매 결제 여부
let pay;
let isPayment;
// is 나 has가 붙으면 boolean값을 받는것이 관례 {white}

// - 구매 결제 내역
let paymentList;
// - 오늘의 운세
let fortuneOfToday;
// - 상품 정보
let productInformation;

/* constant variables -------------------------------------------------- */
// - 브랜드 접두사
const BRAND_PREFIX = 'NIKE';
// - 1년 기준 일(day)자 수
const DAYSOFAYEAR = 365;
const DAY_PER_YEAR = 365;

// panding 아무것도 안함
// loading 로딩중, 요청 대기
// fulfilled, resolved 응답 성공
// rejected 응답 실패

const PENDING = 'api/pending';
const LOADING = 'api/loading';
const FULFILLED = 'api/fulfilled';
const REJECTED = 'api/rejected';
