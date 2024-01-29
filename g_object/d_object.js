// 프로토타입
// new 뒤에 나오는 생성자를 자바스크립트에서는 프로토타입이라고 부른다.
// 프로토타입은 함수로 선언하며, 반드시 대문자로 시작한다.
// this는 해당 객체를 의미한다.

// 프로토타입을 기반으로 상속을 흉내내도록 구현

let lunch = new User(); //생성자, 함수로 객체를 생성

function User(id, pw, name, age) {
    this.id = id;
    this.pw = pw;
    this.name = name;
    this.age = age;
}

jang = new User("jth", "1234", "장태훈", 20);
console.log(jang);

lunch.id = "jth";
console.log(lunch);
