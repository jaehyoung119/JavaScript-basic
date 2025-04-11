// 생성자 함수
const person1 = {
  name: "김재형",
  age: 26,
  job: "student",
};

const person2 = {
  name: "김요한",
  age: 33,
  hobby: "game",
};

// 동일한 구조 코드 간소화를 위한 함수
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// const person1 = new Person('김재형', 26);
