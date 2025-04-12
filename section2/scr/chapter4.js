// 배열 내장함수

let arr = [1, 2, 3, 4, 5];

arr.forEach((elm, idx, array) => {
  console.log(`${idx}번쨰 요소는 ${elm}입니다.`);
  console.log(array);
});

let newArray = arr.map((elm) => {
  return elm * 10;
});

console.log(newArray);

let colors = ["green", "blue", "purple"];
console.log(colors.at(1)); // -1 입력시 마지막값 반환
console.log(colors.includes("blue")); // true "blue",1 로 검색시작위치 지정가능
console.log(colors.indexOf("purple")); // 2, 존재하지않는값 = -1

let colors2 = [
  { id: 1, color: "green" },
  { id: 2, color: "blue" },
  { id: 3, color: "purple" },
  { id: 4, color: "yelliw" },
];

let idx = colors2.findIndex((elm) => elm.color === "purple");
console.log(idx);

let idx2 = colors2.find((elm) => elm.color === "purple");
console.log(idx);

let filterArray = colors2.filter((elm, idx, array) => elm.id);
console.log(filterArray);

let sliceArray = colors.slice(1, 3);
console.log(sliceArray);
