document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;

    if (path.includes('counter.html')) {
        const counter = document.getElementById('counter');
        const incrementBtn = document.getElementById('increment');
        const decrementBtn = document.getElementById('decrement');

        let count = 0;

        incrementBtn.addEventListener('click', () => {
            count++;
            counter.textContent = count;
        });

        decrementBtn.addEventListener('click', () => {
            count--;
            counter.textContent = count;
        });
    }

    if (path.includes('todolist.html')) {
        const todoInput = document.getElementById('todoInput');
        const addTodoBtn = document.getElementById('addTodo');
        const todoList = document.getElementById('todoList');

        addTodoBtn.addEventListener('click', () => {
            const todoText = todoInput.value.trim();
            if (todoText) {
                const li = document.createElement('li');
                li.textContent = todoText;
                todoList.appendChild(li);
                todoInput.value = '';
            }
        });
    }

    if (path.includes('dynamicform.html')) {
        const dynamicForm = document.getElementById('dynamicForm');
        const formResults = document.getElementById('formResults');

        dynamicForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            formResults.innerHTML = `<p>Nom: ${name}</p><p>Email: ${email}</p>`;
        });
    }

    if (path.includes('calculator.html')) {
        const display = document.getElementById('display');
        const buttons = document.getElementById('buttons');

        buttons.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const value = e.target.textContent;
                if (value === '=') {
                    try {
                        display.value = eval(display.value);
                    } catch {
                        display.value = 'Error';
                    }
                } else {
                    display.value += value;
                }
            }
        });
    }

    if (path.includes('tictactoe.html')) {
        const cells = document.querySelectorAll('.cell');
        let currentPlayer = 'X';
        let gameState = Array(9).fill(null);

        cells.forEach((cell, index) => {
            cell.addEventListener('click', () => {
                if (!gameState[index]) {
                    gameState[index] = currentPlayer;
                    cell.textContent = currentPlayer;
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            });
        });
    }

    if (path.includes('apicall.html')) {
        const fetchDataBtn = document.getElementById('fetchData');
        const apiResults = document.getElementById('apiResults');

        fetchDataBtn.addEventListener('click', () => {
            fetch('https://randomuser.me/api')
                .then(response => response.json())
                .then(data => {
                    apiResults.textContent = data.content;
                })
                .catch(error => {
                    apiResults.textContent = 'Erreur lors de la récupération des données';
                });
        });
    }

    if (path.includes('state.html')) {
        const toggleThemeBtn = document.getElementById('toggleTheme');
        const body = document.body;

        toggleThemeBtn.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
        });
    }
});
