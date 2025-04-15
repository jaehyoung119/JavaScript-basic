// 컴포넌트와 모듈
// 동물앨범 프로젝트의 기능별 분류
// context.js - 내용 tabbar.js - 탭메뉴 등 컴포넌트 분류

// 같은 api 호출 이지만 몇줄을 제외하곤 Js 파일마다 같은 코드
// 모듈을 사용한 정리

import /*{ num, add, User }*/ * as testModule from "./test.mjs";

// 방법 1
// console.log(num);
// console.log(add(10, 10));
// console.log(new User("재형"));

// 방법 2
console.log(testModule.num);
console.log(testModule.add(10, 10));
console.log(new testModule.User("재형"));

// export default const let var 사용불가능
// import testModule from "./test.mjs";
// console.log(new testModule.User("7"));
