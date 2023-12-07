// object 인지 확인한는 함수
// null, function, array 제외시켜줌

function isObject(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'object'
  );
}
