var age = 20;
var age = 30;
console.log(age);

let width = 10; //업데이트 가능하지만 재선언 불가
width = 20;
console.log(width);

//지역 변수
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);

//전역 변수
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);

//////

//전역 변수를 관리하는 객체 -> global
// Node.js에서는 지역변수들을 모두 global 객체에서 관리한다.
// 브라우저(b_scope.html)에서는 window 객체에서 전역변수를 관리한다.
// 따라서 어디에서 사용될 지 모를 때에는 globalThis 객체를 사용한다.
globalThis.x = 10;
// let x = 10; // 갇혀 있는 곳이 함수냐 아니냐에 따라 전역, 지역변수 나뉜다,

function f() {
    //지역변수
    let x = 20;
    //var로 바꿔도 지역변수 -> 함수 안에 있다.
    console.log(global.x, x);
}

f();
