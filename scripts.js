document.getElementById('add-btn').addEventListener('click', addItem);

function addItem() {
    const input = document.getElementById('new-item');
    const itemText = input.value.trim();
    if (itemText !== "") {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            li.classList.toggle('completed');
        });

        const span = document.createElement('span');
        span.textContent = itemText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Apagar';
        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);

        document.getElementById('todo-list').appendChild(li);
        input.value = "";
    }
}
