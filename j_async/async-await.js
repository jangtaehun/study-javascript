async function getName() {
    // 리턴값은 Promise 객체의 resolve
    return "hds";
}

async function printName() {
    const name = await getName();
    console.log(name);
}

printName();

//function 앞에 async를 붙이면 해당 함수는 항상 프라미스를 반환
//프라미스가 아닌 것은 프라미스로 감싸 반환

// await는 async 함수 안에서만 동작합니다.
//프라미스가 처리될 때까지 기다린다. -> 프라미스가 처리되면 그 결과와 함께 실행이 재개

////////////////////////////////////////////////////////////////////////////////////

async function getName() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
}

getName();

/*

const userService = (() => {
    const selectAll = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        if (callback) {
            callback(users);
        }
    };

    const findById = async (id, callback) => {
        const response = await fetch(`/abc?id=${id}`);
        const user = await response.json();
        if (callback) {
            callback(user);
        }
    };

    return { selectAll: selectAll, findById: findById };
})();

userService.selectAll((users) => {
    console.log(users);
});

userService.findById(1, (user) => {
    console.log(user);
});

*/
