function addTodo() {
    const todoInput = document.getElementById('newTodo');
    const todoList = document.getElementById('todoList');

    if (todoInput.value.trim() === '') return;

    const listItem = document.createElement('li');
    listItem.className = 'todo-item new-item'; // Добавляем класс для анимации добавления

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

    // Убираем класс анимации после завершения
    setTimeout(() => {
        listItem.classList.remove('new-item');
    }, 300); // Длительность анимации в CSS

    todoInput.value = '';
}

function toggleComplete(button) {
    const item = button.closest('.todo-item');
    item.classList.toggle('completed');
}

function deleteTodo(button) {
    const item = button.closest('.todo-item');
    item.classList.add('removed'); // Добавляем класс для анимации удаления

    // Удаляем элемент после завершения анимации
    setTimeout(() => {
        item.remove();
    }, 300); // Длительность анимации в CSS
}

function clearTodos() {
    const todoList = document.getElementById('todoList');
    const items = todoList.querySelectorAll('.todo-item');

    items.forEach(item => {
        item.classList.add('removed'); // Анимация удаления всех элементов
        setTimeout(() => {
            item.remove();
        }, 300); // Длительность анимации
    });
}
