//switch
// 하나의 변수에 여러 개의 값이 담길 수 있다면,
// 매번 ==으로 비교하는 if문 보다 switch문을 사용하면 더 간결해진다.

let choice = 1;

switch (choice) {
    case 1:
        console.log("choice는 1입니다.");
        console.log("들어옴");
        break; // 써줘야지만 옳바르게 출력된다.
    case 2:
        console.log("choice는 2입니다.");
        console.log("들어옴");
        break;
    case 3:
        console.log("choice는 3입니다.");
        console.log("들어옴");
        break;
    default:
        console.log("다시 시도해주세요");
        console.log("들어옴");
        break;
}
