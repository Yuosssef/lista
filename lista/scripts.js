document.addEventListener('DOMContentLoaded', function () {
    const addItemButton = document.querySelector('.input-container button');
    const newItemInput = document.getElementById('new-item');
    const todoList = document.getElementById('list');

    addItemButton.addEventListener('click', addItem);

    newItemInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addItem();
        }
    });

    function addItem() {
        const itemText = newItemInput.value.trim();
        if (itemText !== '') {
            const li = document.createElement('li');

            const span = document.createElement('span');
            span.textContent = itemText;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'X';
            removeButton.className = 'remove-btn';
            removeButton.addEventListener('click', function () {
                todoList.removeChild(li);
            });

            li.appendChild(span);
            li.appendChild(removeButton);
            todoList.appendChild(li);

            newItemInput.value = '';
        }
    }
});
