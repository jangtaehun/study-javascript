const DB = [];

//then() => 비동기 코드를 작성하는 데 사용되는 Promise의 메서드
//프로미스가 이행되면 .then() 함수는 프로미스의 결과를 콜백 함수의 첫 번째 인수로 전달

function register(user) {
    const result = saveDB(user).then(sendEmail).then(getResult);
    return result;
}

function saveDB(user) {
    DB.push(user);
    console.log(`save ${user.name} to DB`);
    return new Promise((resolve) => {
        resolve(user);
    });
}

function sendEmail(user) {
    console.log(`email to ${user.email}`);
    return new Promise((resolve) => {
        resolve(user);
    });
}

function getResult(user) {
    return `success register ${user.name}, ${user.email}, ${user.password}`;
}

register({
    email: "tedhan1204@gmail.com",
    password: "1234",
    name: "hds",
}).then(console.log);

// const result = register({
//     email: "tedhan1204@gmail.com",
//     password: "1234",
//     name: "hds",
// });

// console.log(result);
