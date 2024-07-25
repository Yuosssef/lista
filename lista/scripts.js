function addItem() {
    const list = document.getElementById('list');
    const newItemInput = document.getElementById('new-item');
    const newItemText = newItemInput.value;

    if (newItemText === '') {
        alert('Please enter a list item.');
        return;
    }

    const listItem = document.createElement('li');

    const marcador = document.createElement('input');
    marcador.type = 'checkbox';
    marcador.onchange = toggleItem;

    const span = document.createElement('span');
    span.textContent = newItemText;
    span.onclick = deleteItem;

    listItem.appendChild(marcador);
    listItem.appendChild(span);

    list.appendChild(listItem);
    newItemInput.value = '';
}

function toggleItem(event) {
    const checkbox = event.target;
    const listItem = checkbox.parentElement;
    listItem.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
}

function deleteItem(event) {
    const span = event.target;
    const listItem = span.parentElement;
    listItem.remove();
}
