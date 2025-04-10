/**
 * 객체
 */

// 생성자 함수, 리터럴
let obj = new Object();
console.log(obj); // {}

let obj2 = {};
console.log(obj2); // {}

// key value

let book = {
  title: "자바스크립트 기초",
  author: "김재형",
  category: "자바스크립트", // 프로퍼티 속성
  year: undefined,
  color: function () {
    console.log("orange");
  },
};

let car = {
  name: "람보르기니 우르칸",
  model: "람보르기니",
  color: "black",
};

console.log(car.name); // 점표기법
console.log(car["name"]); // 괄호 표기법
console.log(`${car.name}`);

const getValue = (key) => {
  console.log(car[key]);
};

getValue("color"); // black

// 객체 프로퍼티 수정 추가
let cat = {
  age: 2,
};

cat.name = "야옹이";
cat["color"] = "white";
console.log(cat);

cat.age = 3; // 객체는 const 사용해도 변경가능
// 객체 자체는 재선언 불가능

// delete cat.age; 삭제가능

const person = {
  name: "김재형",
  age: 26,
  pringt: function () {
    console.log(`${this.name}`); // 객체 프로퍼티가 함수일경우 메서드라고 부름
    // 이때에는 화살표함수 x function 으로 정의
  },
};

person.pringt();
person["print"]();
