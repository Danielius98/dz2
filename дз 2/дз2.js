
    function addTodo() {
    const todoInput = document.getElementById('newTodo');
    const todoList = document.getElementById('todoList');

    if (todoInput.value.trim() === '') return;

    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    const currentDate = new Date().toLocaleDateString();

    listItem.innerHTML = `
                <div class="first-child">
                    <span>${todoInput.value}</span>
                    <br><span class="date">от ${currentDate}</span>
                </div>
                <div class="button-nav">
                    <button class="complete" onclick="toggleComplete(this)">✔</button>
                    <button class="delete" onclick="deleteTodo(this)">✖</button>
                </div>
            `;

    todoList.appendChild(listItem);
    todoInput.value = '';
}

    function toggleComplete(button) {
    const item = button.closest('.todo-item');
    item.classList.toggle('completed');
}

    function deleteTodo(button) {
    const item = button.closest('.todo-item');
    item.remove();
}

    function clearTodos() {
    document.getElementById('todoList').innerHTML = '';
}
