// let datas = [10, 8, 20, 3, 2];

// // push(): 가장 마지막에 값 추가
// datas.push(100);
// console.log(datas);

// // join(): 전달한 값으로 구분한 뒤 문자열로 리턴
// console.log(datas.join(","));

// // slice(begin, end): 원하는 부분을 추출하기 위해 시작 인덱스와 마지막 인덱스를 전달한다.
// // slice(begin): 시작 인덱스부터 마지막까지 추출한다.
// console.log(datas.slice(1, 3));
// console.log(datas.slice(1));

// // splice(index, count): 삭제
// // splice(index, count, ...args): 교체
// datas.splice(1, 1);
// console.log(datas);

// datas.splice(1, 1, 200);
// console.log(datas);

// // pop(): 마지막 요소 삭제
// const datasRemoved = datas.pop();
// console.log(`${datasRemoved} 삭제`);
// console.log(datas);

// // shift(): 첫 번째 요소 삭제
// const dataRemoved = datas.shift();
// console.log(`${dataRemoved} 삭제`);
// console.log(datas);

// // spread operation
// // let data = [10, 8, 20, 3, 2];
// const numbers = [...data];
// // const numbers = [1111, ...data]; //앞에 추가
// // const numbers = [...data, 11111]; //뒤에 추가
// console.log(numbers);

// // 비구조화 할당
// let data = [10, 8, 20, 3, 2];
// const [number1, number2, number3, number4, number5, number6 = 5] = data;
// console.log(number1, number2, number3, number4, number5, number6);

//forEach(callback)
let datas = [10, 8, 20, 3, 2];
// datas.forEach((data, i datas) => {
//     console.log(data, i);
// })

//map(callback)
// const result = datas.map((data) => data * 2);
// console.log(result);

//filter(callback)
const result = datas.filter((data) => data % 5 == 0);
console.log(result);

//reduce(callback)
// 초기 값을 설정하면 data에 0번 째부터 들어오고,
// 초기 값을 설정하지 않으면 data에 1번 째부터 들어온다.
// 이 때, 0번 째 값이 variable로 들어온다.
// datas.reduce((variable, currentvalue, index, array) => {});

//

var age = 20;
var age = 30;
console.log(age);

let width = 10; //업데이트 가능하지만 재선언 불가
width = 20;
console.log(width);
