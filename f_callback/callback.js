// arrow expression(function)
// const add = () => {};

// arrow expression(function)
// function a() {}
// const a = () => {};
// () => {}; -> 이름 없는 함수

/*
function printName(name) {
    console.log(name);
}

const printName = (name) => {
    console.log("name");
};
printName();
*/

///

//매개변수로 함수 객체를 전달해서 호출 -> 함수 내에서 매개변수 함수를 실행하는 것 => 함수 자체를 전달
// 콜백 함수를 별도의 함수로 정의
function greet(name) {
    console.log("Hello, " + name);
}
function Hello(callback) {
    var name = "Alice";
    callback(name); // 콜백 함수 호출 = great(name)
}
Hello(greet); // 콜백 함수의 이름만 인자로 전달 -> Hello, Alice

//

function sayHello(name, callback) {
    const words = `안녕하세요 ${name}님`;
    callback(words); //callback 함수 호출
}
sayHello("zzngtae", (call) => {
    console.log(call);
});

Hello(greet); // 콜백 함수의 이름만 인자로 전달 -> Hello, Alice

//

//콜백 함수는 "분리"가 목적이다.
// 두 정수의 덧셈 결과 출력
const add = (number1, number2, callback) => {
    if (callback) {
        callback(number1 + number2);
    }
    return number1 + number2;
};

add(1, 4, (result) => {
    console.log(result);
});

//

// 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력
const multply = (number1, number2, callback) => {
    if (callback) {
        callback(number1 * number2); //callback 함수 호출
    }
    return number1 * number2;
};

const mul = multply(3, 5, (mul) => {
    //매개변수로 함수 객체 전달
    console.log(mul * 2);
});

/////

// 성과 이름을 전달받아서 풀네임을 만든 뒤 "000님" 출력
const input = (first, last, callback) => {
    if (callback) {
        callback(first + last + "님");
    }
    return first + last + "님";
};

const fullName = input("jang", "taehun", (result) => {
    console.log(result);
});

// function makeFullName(성, 이름, printName) {
//     printName(성 + 이름);
//     return 성 + 이름;
// }

// function printName(풀네임) {
//     console.log(풀네임 + "님");
// }

// makeFullName("이", "순신", printName);

// 상품 가격과 총 합을 입력받고 개수를 알아낸 뒤
// 개수가 5개 이하라면 true 아니면 false
const num = (price, total, callback) => {
    if (callback) {
        callback(total / price);
    }
    return total / price;
};

const result = num(3000, 15000, (count) => count <= 5);
console.log(result);

// 결제 상품 가격과 결제 상태를 전달받아서,
// 결제 상태가 true일 때 결제 완료, false일 경우 취소 출력
const status = (price, status, callback) => {
    if (callback) {
        callback(status ? `${price}원 결제 완료` : `${price}원 결제 취소`);
    }
    return status ? true : false;
};

status(3000, true, (message) => {
    console.log(message);
});

// /*
function setStatus(price, status, callback) {
    if (callback) {
        callback(status ? `${price}원 결제 완료` : `${price}원 결제 취소`);
    }
}

setStatus(3000, false, (message) => {
    console.log(message);
});
// */
