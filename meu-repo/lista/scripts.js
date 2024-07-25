function addItem() {
    const list = document.getElementById('list');
    const newItemInput = document.getElementById('new-item');
    const newItemText = newItemInput.value;

    if (newItemText === '') {
        alert('Please enter a list item.');
        return;
    }

    const listItem = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onchange = toggleItem;

    const span = document.createElement('span');
    span.textContent = newItemText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.onclick = deleteItem;

    listItem.appendChild(checkbox);
    listItem.appendChild(span);
    listItem.appendChild(deleteButton);

    list.appendChild(listItem);
    newItemInput.value = '';
}

function toggleItem(event) {
    const checkbox = event.target;
    const listItem = checkbox.parentElement;
    listItem.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
}

function deleteItem(event) {
    const deleteButton = event.target;
    const listItem = deleteButton.parentElement;
    listItem.remove();
}
