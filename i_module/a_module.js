// (function () {})();
const userService = (() => {
    // 회원 가입
    /*비구조화 할당으로 받는다*/
    const join = ({ id, email, password, name }) => {};

    // 로그인
    /*비구조화 할당으로 안 받는다*/
    const login = (email, password) => {};

    // 마이페이지
    const findByUser = (callback) => {
        // DB 조회 결과
        const user = { id: 1, email: "test", name: "test" };
        if (callback) {
            callback(user);
        }
    };

    // 회원 수정
    const update = ({ id, email, password, name }) => {};

    // 회원 탈퇴
    const withdraw = () => {};

    return {
        join: join,
        login: login,
        findByUser: findByUser,
        update: update,
        withdraw: withdraw,
    };
})();

// 회원 가입
user = {
    id: 1,
    email: "test",
    name: "test",
};

// 로그인
userService.join(user);

const email = "";
const password = "";
userService.login(email, password);

// 마이페이지
userService.findByUser((user) => {
    console.log(user);
    // 회원 수정
    user.email = "test@test";
    userService.update(user);
});

// 회원 탈퇴
userService.withdraw();
