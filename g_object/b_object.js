let lunch = new Object(); //생성자

lunch.name = "김밥";
lunch.price = "2000";

console.log(lunch);

lunch.pay = () => {
    console.log("결제 완료");
};

lunch.pay();
