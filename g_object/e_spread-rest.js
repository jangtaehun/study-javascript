// 비구조화 할당(구조 분해)
// 배열이나 객체의 속성을 해체 -> 그 값을 개별 변수에 담을 수 있게 한다
// 배열 [], 혹은 객체 {} 안의 값을 편하게 꺼내 쓸 수 있는 문법
var [a1, a2, ...rest_a] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a1); // 1
console.log(a2); // 2
console.log(rest_a); // [3, 4, 5, 6, 7, 8, 9]
console.log();

var { a1, a2, ...rest_a } = { a1: 10, a2: 20, a3: 30, a4: 40 };
console.log(a1); // 10
console.log(a2); // 20
console.log(rest_a); // { a3: 30, a4: 40 }
console.log();

ar = { b3: 30, b4: 40, b5: 50 };
var { ...rest_b } = ar;
console.log(rest_b);
console.log();

// const { id, name } = user;
// console.log(id, name);

// const { id: number, name, age = 10 } = user;
// console.log(number, name, age);

///////////////////////////////////////////////////////

// 객체 스프레드
// 객체 혹은 배열을 펼친다
// 요소를 하나씩 모두 전개시킬 때는 Spread의 역할
const animals = ["개", "고양이", "참새"];
const anotherAnimals = [...animals, "비둘기"];
// const anotherAnimals = [...animals];
console.log(anotherAnimals);

const numbers = [1, 2, 3, 4, 5];
const num = { zzone: 1, ddeock: 2 };
const spreadNumbers = [...numbers, 1000, ...numbers, ...num]; // ... => 스프레드를 안 쓰면 그대로 들어간다
console.log(spreadNumbers);

var user = {
    id: 2,
    name: "zd",
};

let userUpdated = { ...user };
console.log(userUpdated);

var userUpdat = { ...user, age: 20 };
console.log(userUpdat);

// 이미 해당 프로퍼티가 존재하면 수정된다.
var userUpdat = { ...user, name: "ted" };
console.log(userUpdat);
console.log();

////////////////////////////////////////

// rest
// 객체, 배열, 그리고 함수의 파라미터에서 사용 가능
// 나머지 요소를 묶을 때는 Rest의 역할 -> 뒤에 남는 요소들을 배열로 받는다.
// Rest 파라미터는 마지막에 위치
const usered = {
    id: 1,
    name: "han",
};

// 객체 스프레드
const Updated = { ...usered, age: 20 };
console.log(Updated);

const { age, ...rest } = Updated;
console.log(age, rest);

const input = "공사칠구";
const { ...a } = input;
console.log(a);
