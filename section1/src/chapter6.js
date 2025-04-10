/**
 * 스코프
 * 변수와 함수가 영향을 미치는 범위
 */

// 전역 스코프

let globalNum = 100;
function testFunc() {
  console.log(globalNum);
}

testFunc();
console.log(globalNum); // 위와 동일하게 둘다 접근가능

// 지역스코프

function testFunc2() {
  let innerNum = 50;
}

testFunc2(); // 가능
// console.log(innerNum); // 불가능

function print() {
  for (/*let*/ var i = 0; i < 10; i++) {
    // var => 함수 스코프
    // 같은 함수내에선 어디든 가능
    console.log(i);
  }
  // console.log(i); Let => 블록스코프 오류
}
print();

// let, var
let num = 10;
// let num = 100; 덮어쓰기 불가능

var num1 = 10;
var num1 = 100; // 덮어쓰기 가능
