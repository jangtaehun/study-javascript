const promise = new Promise((resolve, reject) => {
    let check = true; //false
    if (check) {
        resolve("성공!");
    } else {
        reject("실패..");
    }
});

promise
    .then((result) => {
        console.log(result); //성공
    })
    .catch((result) => {
        console.log(result); //실패
    });
