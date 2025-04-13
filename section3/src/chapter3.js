// async , await

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("3초가 지났습니다.");
    }, ms);
  });
};

// async 입력시 자동으로 primise 반환
// delay 처리가 완료될때까지 코드를 중단
// 실행순서 파악하기 쉽게해주는 await
// 프로미스 객체를 반환하는 함수 내에서만 사용가능
// 에러 처리 방식
const start = async () => {
  try {
    let result = await delay(3000);
    console.lopg(result);
  } catch (error) {
    console.log(error);
  }
};

start();

const workA = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("wrokA");
    }, 5000);
  });
};
const workB = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("wrokB");
    }, 3000);
  });
};
const workC = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("wrokC");
    }, 10000);
  });
};

const start2 = async () => {
  try {
    let resultA = await workA(); // 비동기지만 순차적
    let resultB = await workB();
    let resultC = await workC();

    console.log(resultA);
    console.log(resultB);
    console.log(resultC);
  } catch (err) {
    console.log(err);
  }
};

// promise all
const start3 = async () => {
  try {
    let results = Promise.all(workA(), workB(), workC());
    results.forEach((res) => console.log(res));
  } catch (err) {
    console.log(err);
  }
};
