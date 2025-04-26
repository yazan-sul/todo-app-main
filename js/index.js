const flags = [];
let counter = 0;
function addTodo(event) {
    event.preventDefault();
    const input = document.getElementById('newTodo');
    const todoText = input.value.trim();

    if (todoText !== '') {
        const ul = document.getElementById('todo-list');
        const li = document.createElement('li');
        li.textContent = todoText;
        ul.appendChild(li);
        input.value = '';
        counter++;
        flags.push(true);
        updateCounter();
        li.addEventListener('click', function () {
            const index = Array.from(ul.children).indexOf(li);

            if (li.classList.contains('completed')) {
                li.classList.remove('completed');
                flags[index] = true;
            } else {
                li.classList.add('completed');
                flags[index] = false;
            }

            updateCounter();
        });
    }
}

function updateCounter() {
    const itemsCounter = document.getElementById('items-counter');
    const activeCount = flags.filter(flag => flag).length;
    itemsCounter.textContent = activeCount + " items left";

}


const footerButtons = document.querySelectorAll('.footer-buttons button');

footerButtons.forEach(button => {
    button.addEventListener('click', function () {
        const btnText = this.textContent.trim();
        const todos = document.querySelectorAll('#todo-list li');
        todos.forEach(todo => {
            if (btnText === "All") {
                todo.style.display = 'block';
            } else if (btnText == "Active") {
                if (todo.classList.contains('completed'))
                    todo.style.display = 'none';
                else
                    todo.style.display = 'block';

            } else if (btnText === "Completed") {
                if (todo.classList.contains('completed'))
                    todo.style.display = 'block';
                else
                    todo.style.display = 'none';
            }
        })
    });
});

const clearbtn = document.getElementById('clear-btn');
clearbtn.addEventListener('click', function () {
    const todos = document.querySelectorAll('#todo-list li');
    todos.forEach(todo => {
        if (todo.classList.contains('completed')) {
            todo.remove();
        }
    })
});
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeToggle.addEventListener('click', () => {
    const isLight = body.classList.toggle('lightMode');

    themeIcon.src = isLight ? 'images/icon-moon.svg' : 'images/icon-sun.svg';
});