// 마트에 등록되지 않은 고객이 3명이다.
// 고객별 정보는 다음과 같다.

// 1)
// 이름: 홍길동
// 나이: 30
// 포인트: 3500

// 2)
// 이름: 이순신
// 나이: 22
// 포인트: 0

// 3)
// 이름: 장보고
// 나이: 66
// 포인트: 9500

// 3명을 모두 마트에 등록 시킨다.
// 마트 객체를 만들고 각 고객을 프로퍼티로 선언한다.

const mart = new Object();
const user1 = new Object();
const user2 = new Object();
const user3 = new Object();

// const user1 = {
//     이름: "홍길동",
//     나이: 30,
//     포인트: 3500,
// };
// console.log(user1);

mart.user1 = {
    이름: "홍길동",
    나이: 30,
    포인트: 3500,
};

mart.user2 = {
    이름: "이순신",
    나이: 22,
    포인트: 0,
};

mart.user3 = {
    이름: "장보고",
    나이: 66,
    포인트: 9500,
};
// console.log(mart.user1);
// console.log(mart.user2);
// console.log(mart.user3);
// console.log(mart);

// for (let i = 1; i < 4; i++) {
//     console.log(`console.log(mart.user${i})`);
// }
for (let i = 1; i < 4; i++) {
    console.log(mart[`user${i}`]);
}
