let counter =0;
function addTodo(event){
    event.preventDefault();
    const input = document.getElementById('newTodo');
    const todoText = input.value.trim();

    if(todoText !== ''){
        const ul = document.getElementById('todo-list');
        const li = document.createElement('li');
        li.textContent = todoText;
        ul.appendChild(li);
        input.value = '';
        counter++;
        const itemsCounter = document.getElementById('items-counter');
        itemsCounter.textContent = itemsCounter.textContent = counter + " items left";

    }
}