let datas = [10, 8, 20, 3, 2];

// push(): 가장 마지막에 값 추가
datas.push(100);
console.log(datas);

// join(): 전달한 값으로 구분한 뒤 문자열로 리턴
console.log(datas.join(", "));

// slice(begin, end): 원하는 부분을 추출하기 위해 시작 인덱스와 마지막 인덱스를 전달한다.
// slice(begin): 시작 인덱스부터 마지막까지 추출한다.
console.log(datas.slice(1, 3));
console.log(datas.slice(1));

// splice(index, count): 삭제
// splice(index, count, ...args): 교체
datas.splice(1, 1);
console.log(datas);

const ar = {
    key: "value",
    name: "jth",
    age: 20,
    address: "경기도",
};

const br = ["a", "b", "c", "d"];
datas.splice(1, 1, ar);
console.log(datas);

// pop(): 마지막 요소 삭제
const dataRemoved = datas.pop();
console.log(`${dataRemoved} 삭제`);
console.log(datas);

// shift(): 첫 번째 요소 삭제
const dataRemove = datas.shift();
console.log(`${dataRemove} 삭제`);
console.log(datas);

/////////////////////////////////////////////////////////

// indexOf(value): value를 해당 Array객체에서 찾은 뒤 인덱스 번호를 리턴한다. 못찾으면 -1을 리턴한다.
let data = [10, 8, 20, 3, 2];
const a = data.indexOf(3);
const b = data.indexOf(90);
console.log(a);
console.log(b);

// spread operation
const numbers = [...data];
console.log(numbers);

// 비구조화 할당
// let data = [10, 8, 20, 3, 2];
const [number1, number2, number3, number4, number5, number6 = 5] = data;
console.log(number1, number2, number3, number4, number5, number6);

// forEach(callback) (배열 원소의 값, 현재 요소의 인덱스, 현재 배열)
// forEach()는 forEach()문밖으로 리턴값을 받지 못한다
data.forEach((data, i, array) => {
    console.log("Index: " + i + " Value: " + data);
    // datas[i] = i + 1;
    console.log(array);
});
console.log();

data.forEach((data, i) => {
    console.log("Index: " + i + " Value: " + data);
});
console.log();

data.forEach((data) => {
    console.log("Value: " + data);
});
console.log();

// map(callback) -> 새로운 배열로 반환 => 반환값 메모리에 저장
lists = [1, 2, 13, 44, 25, 36, 6];
var result = lists.map((list) => list * 2);
console.log(result);

// filter(callback)
var result = lists.filter((a) => a % 5 == 0);
console.log(result);
console.log();
console.log();

// reduce(callback)
// 초기값을 설정하면 data에 0번 째부터 들어오고,
// 초기값을 설정하지 않으면 data에 1번 째부터 들어온다.
// 이 때, 0번 째 값이 variable로 들어온다.
var reDatas = [10, 8, 20, 3, 2];

var dataResult = reDatas.reduce((variable, reData, i) => {
    console.log(variable); //0번 째, 한 번만 출력
    console.log(reData, i); //reData=값, i=인덱스
}); // 초기 값을 설정하지 않으면 1번 째 데이터부터 들어온다.
console.log();

var dataResult = reDatas.reduce((variable, reData, i) => {
    console.log(variable, reData, i);
}, 0); //초기 값을 설정해 0번 째 데이터부터 들어온다.
//초기 값 0 출력, redata, i 0번 째부터 출력
console.log();

var dataResult = reDatas.reduce((variable, reData, i) => {
    console.log(variable, reData, i);
    variable.push(i + 1);
    return variable;
}, []);
console.log(dataResult);
console.log();

var dataResult = reDatas.reduce((variable, reData, i) => {
    // console.log(variable, reData, i);
    variable[`${i}`] = reData;
    return variable;
}, {});
console.log(dataResult);
console.log();

const inputs = "공사칠구";
const [...input] = inputs; //list로
// const {...input} = inputs; //객체로
console.log(input);

// // 문자열
// // split(): 문자열을 Array 객체로 사용하고자 한다면, split()을 사용한다.
// "월화수목금토일".split("").forEach((data) => {
//     console.log(data);
// });

// // includes(value): value가 문자열에 포함되었는 지 검사
// console.log("ABCD".includes("B"));

// // Array()
// const arrays = new Array(7).fill(0);
// arrays.forEach((zzone) => {
//     console.log(zzone);
// });
