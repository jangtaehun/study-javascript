const todosLayout = (() => {
    const showList = (todos) => {
        const table = document.querySelector("table.todos");
        let text = ``;
        todos = todos.slice(0, 10);
        todos.forEach((todos) => {
            if (todos.completed) {
                // 반복문이기 때문에 이전 것을 계속 가지고 있어야 하기 때문에 +=을 사용
                text += `<tr class="blue"><td>${todos.id}</td><td>${todos.title}</td><td>${todos.completed}</td></tr>`;
            } else {
                text += `<tr class="red"><td>${todos.id}</td><td>${todos.title}</td><td>${todos.completed}</td></tr>`;
            }
        });
        table.innerHTML = text;
    };

    return { showList: showList };
})();
