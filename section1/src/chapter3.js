/**
 * 연산자
 */

// 산술연산자
let num1 = 10;
let num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); // 나머지

// 증감연산자
console.log(num1++); // 10
console.log(num1); // 11
console.log(++num1); // 12

// 대입 연산자
let num3 = 10;
num3 = num3 + 5; // 15
// += -= *= .. 복합 대입연산자

// 비교 연산자
let num4 = 10;
let num5 = "10";

console.log(num4 === num5); // false 자료형,값 비교
console.log(num4 == num5); // true 값만 비교
console.log(num4 !== num5); // 불일치인지 비교

// 대소비교 연산자
console.log(num1 < num2); // false <= 작거나같다

// 연결 연산자
let price = 10000;
console.log("가격: " + price + "원"); // 더하기아닌 연결

// 논리 연산자
let isClicked = true; // not
console.log(!isClicked); // false

console.log(true || true); // or 연산자 - 둘중하나라도 true 면 true
console.log(true && true); // and 연산 - 둘다 true 면 true

// null 병합 연산자
let num6;
let num7 = 10;
console.log(num6 ?? 20); // num6 가 null 이면 오른쪽값

// 삼항 연산자
let num8 = 100;
let result = num % 2 === 0 ? "짝수" : "홀수"; // 짝수
