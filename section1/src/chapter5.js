// 함수
function add(num1, num2) {
  return num1 + num2;
}

let result = add(10, 15);
console.log(`두 숫자를 더한 결과는 ${result} 입니다.`);

// Early return pattern
function compare(num) {
  if (num === 0) {
    return "num의 값이 0입니다";
  }
  if (num < 0) {
    return "num의 값이 0보다 작습니다.";
  }
  if (num >= 10) {
    return "num의 값이 10보다 크거나 같습니다.";
  }
  return "num의 값이 0보다 크고 10보다 작습니다.";
}
