// typeof
let num = 10;

console.log(typeof num); // number

// 숫자형
let num1 = 123;
let num2 = 10.0123;

console.log(typeof num1); // number
console.log(typeof num2); // number

let num3 = Infinity; // number
let num4 = 100 / 0; // Infinity

let num5 = NaN; // number
let num6 = "javascript" / 10; //NaN

let bigNum1 = 999999999999999999999999n;
let bigNum2 = BigInt("9999999999999999999999");

console.log(typeof bigNum1); // BigInt
console.log(typeof bigNum2); // BigInt

// 문자형
let name = "김재형";
console.log(typeof name); // string
let name2 = `제 이름은 ${name} 입니다.`;
console.log(name2); // 템플릿 리터럿

// boolean
let isClicked = false;

// Null(존재x, 알수없는값)
let num7 = null;
console.log(/*typeof 사용불가*/ num === null);

// Undefined
let num8;
console.log(typeof num); // Undefined 아직 값 할당안한 상태

// 묵시적 형 변환
let num9 = "15";
let num10 = 5;
console.log(num1 / num2); // 3 '15'->15 자동변환

// 명시적 형 변환
let num11 = "15";
let num12 = 5;
console.log(num1 + num2); // 155
// * / - 가아닌 + 를 사용할때는 숫자를 문자열로 변환함
console.log(parseInt(num1) + num2); // 명시적형변환
