// 배열과 객체의 구조 분해 할당

// let colors = ["green", "blue", "purple"];
// let c1, c2, c3;

// 선언 분리 할당
let [c1, c2, c3, c4] = colors;
[c1, c2, c3, c4 = "yellow"] = ["green", "blue", "purple"];

// let c1 = colors[0];
// let c2 = colors[1];
// let c3 = colors[2];

console.log(c1);
console.log(c2);
console.log(c3);

let a = 10;
let b = 5;
// let temp;
// temp = a;
// a = b;
// b = temp;

[a, b] = [b, a]; // 배열의 구조분해할당

let colors = {
  b1: "green",
  b2: "blue",
  b3: "purple",
};

let { b1, b2, b3 } = colors;

// let b1 = colors.b1;
// let b2 = colors.b2;
// let b3 = colors.b3;

// let color1 = colors.b1;
// let color2 = colors.b2;
// let color3 = colors.b3;

let { a1: color1, a2: color2, a3: color3 } = colors;
