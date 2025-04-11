// 반복문

// for
for (i = 0; i < 6; i++) {
  console.log(i);
}

// while
let i = 1;
while (i < 6) {
  console.log(i);
  i++;
}

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let person = {
  name: "김재형",
  age: 26,
  height: 185,
};

let newArray = Object.keys(person);
for (let i = 0; i < newArray.length; i++) {
  let nowKey = newArray[i]; // key
  console.log(`key: ${nowKey}, value: ${person[nowKey]}`);
}

console.log(Object.keys(person)); // key o , value o

let newArray2 = Object.values(person);
for (let i = 0; i < newArray2.length; i++) {
  console.log(`value: ${newArray2[i]}`);
}

console.log(Object.values(person)); // key x value 만 출력

let newArray3 = Object.entries(person);
for (let i = 0; i < newArray3.length; i++) {
  console.log(`key: ${newArray3[i][0]}, value: ${newArray3[i][1]}`);
}

console.log(Object.entries(person)); // key,value 를 새로운 배열로담음

// for - of
let arr2 = [1, 2, 3, 4, 5];
for (let i of arr2) {
  console.log(i);
}

// for - in
let person2 = {
  name: "김재형",
  age: 25,
  height: 185,
};

for (let key in person) {
  console.log(`key : ${key}, value : ${person[key]}`);
}
