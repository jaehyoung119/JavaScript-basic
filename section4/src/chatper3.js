// this , 화살표함수

function Counter() {
  this.count = 0;
  setInterval(function () {
    this.count++;
    console.log(this.count); // NAN 계속 추력
  }, 2000);
}

const counter = new Counter();

// 화살표 함수의 This 는 호출방식이아닌 정의된 시점에서 상위스코프 this 참조
// 렉시컬 스코프와 유사
function Counter2() {
  this.count2 = 0;
  setInterval(() => {
    this.count2++;
    console.log(this.count2); // 정상 작동
  }, 2000);
}

const counter2 = new Counter2();

const cafe = {
  brand: "스벅",
  menu: "아아",
  print: () => {
    console.log(this); // 자신이 선언된 위치의 상위스코프
  },
};

cafe.print();
