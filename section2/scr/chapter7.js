// spread
const toy = {
  type: "bear",
  price: 15000,
};

const blueToy = {
  ...toy,
  color: "blur",
};

const yellowToy = {
  ...toy,
  color: "yellow",
};

console.log(blueToy);

const color1 = ["red", "orange", "yellow"];
const color2 = ["blue", "navy", "purple"];

const rainbow = [...color1, "green", ...color2];

console.log(rainbow);

// rest

const blueToy2 = {
  type: "bear",
  price: 15000,
  color: "blue",
};

const { type, ...rest } = blueToy2;
// const { ...rest , type } = blueToy2; 오류
console.log(rest);

const color = ["red", "orange", "yellow", "green"];
// const [c1,c2,...rest] = color;

const print = (a, b, ...rest) => {
  console.log([a, b, rest]);
};

print(1, 2, 3, 4, 5, 6);

const print2 = (...rest) => {
  console.log(rest);
};
const numbers = [1, 2, 3, 4, 5, 6];
print2(...numbers);
