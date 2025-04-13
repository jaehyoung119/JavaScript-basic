// 웹과 DOM(Document OBject Model)

// 웹의 구성요소
// HTML - 구성요소(검색창)
// JS - 동적기능생성(검색기능)
// CSS - 꾸미기(검색창꾸미기)

// getElmentById;
let $color = document.getElementById("color");
console.log($color);

// querySelector
let $animalInfo = document.querySelector("div.animal-info"); // class
let ageElement = document.querySelector("div#age"); // id
console.log($animalInfo);
console.log(ageElement);

// querySelectorAll
let $infoItem = document.querySelectorAll("div.info-item");
console.log($infoItem);

// getElementsByClassName
let $infoItem2 = document.getElementsByClassName("info-item");
console.log($infoItem2);

// getElementsByTagName
let $infoItem3 = document.getElementsByTagName("div");
console.log($infoItem3);

// class 이름 변경
let $name = document.getElementById("name");
$name.className = "dog-name";
console.log($name);
console.log($name.className);

let $animalInfo2 = document.querySelector("div.animal-info");
$animalInfo2.id = "animal";
console.log($animalInfo2);
console.log($animalInfo2.id);

let $color2 = document.getElementById("color");
$color2.classList.add("dog-color"); // 변경 x 추가
$color2.classList.remove("info-item"); // 제거
console.log($color2);
// classList - add, remove

let $age = document.getElementById("age");
$age.textContent = "5살";
console.log($age); // 5살

let $color3 = document.getElementById("color");
$color.style.color = "blue";
$color.style.fontSize = "30px";
