// 동기
// 하나의 작업이 실행되는 동안은 다른 작업을 수행하지 않는 방식

const workA = () => {
  console.log("workA");
};

const workB = () => {
  console.log("workB");
};

const workC = () => {
  console.log("workC"); // => 순차적 실행
};

// 비동기
const work = (callback) => {
  setTimeout(() => {
    console.log("비동기");
    callback();
  }, 3000);
};

work(() => {
  console.log("종료");
});
// 자바스크립트 - 멀티스레드 불가능

const workA1 = () => {
  setTimeout(() => {
    console.log("workA1");
  }, 5000);
};

const workB1 = () => {
  setTimeout(() => {
    console.log("workA1");
  }, 3000);
};

const workC1 = () => {
  setTimeout(() => {
    console.log("workA1");
  }, 1000);
};

workA1();
workB1();
workC1();
