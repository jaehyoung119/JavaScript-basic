// 배열

// 배열 생성자 함수
let arr = new Array([1, 2, 3]);
let arr2 = new Array([3]);
console.log(arr); // [1,2,3]
console.log(arr2); // [길이가3인 빈배열]

// 배열 리터럴
let arr3 = [1, 2, 3]; // [1,2,3]
let arr4 = [3]; // [3] 3값 실질적할당
// 배열 다양한 자료형 프로퍼티 사용가능

let array = [1, "hello", null];
console.log(arr[0]); // 1(배열은 key값아닌 인덱스로 접근)

// 배열 요소 추가
let fruits = ["apple", "oragne", "peach"];
fruits.push("grape"); // 맨마지막 인덱스로 추가
fruits.unshift("banana"); // 첫번쨰 인덱스로 추가

// 배열 요소 수정
let animal = ["cat", "dog", "hamster"];

animal = ["cat", "rabbit", "hamster"]; // 둘다 가능
animal[2] = "parrot"; // 이것도 가능
// animal 이 const 일시 첫번째 방법 불가능 두번째 방법 가능

// 배열 요소 삭제
const colors = ["purple", "blue", "green", "yellow"];
colors.pop(); // 마지막 요소 삭제
colors.shift(); // 첫번쨰 요소 삭제
colors.splice(1, 3); // 첫번째요소부터 3번째까지 전부삭제
