/**
 * 함수 표현식,선언식
 */

// 함수 표현식
const add = function (a, b) {
  return a + b;
};

console.log(add(10, 20));

// 함수 선언식(화살표 함수)
const add2 = (a, b) => {
  a + b;
};

console.log(add(10, 20));

// callback 함수
const calculate = (a, b, callback) => {
  let result = a + b;
  callback(result);
};
const printResult = (result) => {
  console.log(`결과: ${result}`);
};

const doubleResult = (result) => {
  console.log(`결과에 2를 곱한값 : ${result * 2} `);
};

printResult(5, 3, printResult);
doubleResult(5, 3, doubleResult);

// 예제
const testFunc = (callback) => {
  callback();
};

testFunc(() => {
  console.log("콜백 함수 테스트");
});

testFunc(function () {
  console.log("콜백 함수 테스트");
});
