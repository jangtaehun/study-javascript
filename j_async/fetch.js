fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        console.log(users);
    });
//비동기 -> 나중에 처리된다.

// console.log(fetch("https://jsonplaceholder.typicode.com/users"));
