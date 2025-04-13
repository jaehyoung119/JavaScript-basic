// API 클라이언트와 서버통신
// 예제를 위한 jsonplaceholder 사용
// json 파일 형식 - (javascript object notation)
// 자바스크립트에서 데이터를 문자열 형태로
// key - value 형식으로 이루어져있음

const getData = async () => {
  //   let response = await fetch("https://jsonplaceholder.typicode.com/users");
  //   let data = await response.json(); // json 형식데이터를 객체형태로 변환
  //   console.log(data);
  //   Api 호출 성공시
  //   Response 객체 반환

  // 오류 포함
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json(); // json 형식데이터를 객체형태로 변환
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

getData();
