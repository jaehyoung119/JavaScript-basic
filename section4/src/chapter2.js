// 생성자 -> 새로운 객체 생성 / new 키워드

function Cafe(menu) {
  console.log(this);
  this.menu = menu;
}

let myCafe = new Cafe("latte"); // latte
console.log(myCafe);

let myCafe2 = Cafe("latte"); // window
console.log(myCafe2);

const cafe2 = {
  brand: "이디야",
  menu: "",
  setMenu: function (menu) {
    this.menu = menu; // widow 바인딩
  },
};

function getMenu(menu, callback) {
  callback(menu);
}

getMenu("핫초코", cafe.setMenu);
console.log(cafe); // 이디야 메뉴는빈값
