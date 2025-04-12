// 배열메서드 2

let array1 = ["green", "blue"];
let array2 = ["purple", "yellow"];

console.log(array1.concat(array2)); // 두개배열 합쳐 새로운배열
console.log(array.join()); // 문자열 이어주기, "" => 빈칸생성

let colors = ["green", "blue"];
colors.sort(); // 오름차순 방식으로 정렬

const compare = (a, b) => {
  if (a > b) return -1;
  else if (a < b) return 1;
  else return 0;
};
colors.sort(compare); // 내림차순

let numbers = [1, 100, 25, 50, 120, 3];
numbers.sort(); // 숫자의 사전순

const compare2 = () => {
  return a - b; // b - a; 내림차순
};
numbers.sort(compare); // 오름차순

let sum = 0;

numbers.forEach((elm) => {
  sum += elm; // 숫자들의 합
});

let sum2 = numbers.reduce((acc, cur, idx) => {
  console.log(acc, cur, idx);
  return acc + cur;
}, 0);

let a = Array.isArray([1, 100, 500]);
let b = Array.isArray({ id: 1, color: "green" });
let c = Array.isArray("string");
// 배열이라면 true 이외의것이라면 false
