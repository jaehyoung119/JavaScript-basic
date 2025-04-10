/**
 * 호이스팅
 */

// 함수 호이스팅
connectString("study", "hoisting");
// 함수 호출이 선언 위에있어도 허용

function connectString(str1, str2) {
  console.log(str1 + str2);
}

// 변수 호이스팅
// console.log(num1); 오류
let num1 = 123;
// let,const 호이스팅은 발생하지만
// let 의 선언이 TDG(Temporal dead jone)로 이동

console.log(num2); // undefined
var num2 = 456; // var 는 값을빼고 선언만 위로 올림
