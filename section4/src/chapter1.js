// this
console.log(this); // window

// 함수
function funC() {
  console.log(this); // window
}
funC();

// 메서드 -> 객체 프로퍼티 함수
const cafe = {
  brand: "스벅",
  menu: "아아",
  //   print: function () {
  //     console.log(this);  // 스벅,아아 객체출력
  //   },

  newCafe: {
    brand: "스벅",
    menu: "라뗴",
    print: function () {
      console.log(this);
    },
  },
};

// cafe.print(); 메서드를 포함하고있는 객체 출력 스벅 , 아아
cafe.newCafe.print(); // 스벅, 라떼
const myCafe = cafe.print;
myCafe(); // window
