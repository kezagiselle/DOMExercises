function addListItem() {
    const userInput = document.getElementById('userInput');
    
    // Ensure the user input is not empty
    if (userInput.value.trim() === '') {
        alert('Please enter a valid value.');
        return;
    }

    // Create a new list item element
    const listItem = document.createElement('li');

    // Create a checkbox for the list item
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.style.marginRight = '10px';
    checkBox.addEventListener('change', () => {
        if (checkBox.checked) {
            listItem.style.textDecoration = 'line-through';
        } else {
            listItem.style.textDecoration = 'none';
        }
    });

    // Create a span to hold the task text
    const taskText = document.createElement('span');
    taskText.textContent = userInput.value;

    // Create a remove button for the list item
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.style.marginLeft = '10px';
    removeButton.addEventListener('click', () => {
        listItem.remove();
    });

    // Append the checkbox, task text, and remove button to the list item
    listItem.appendChild(checkBox);
    listItem.appendChild(taskText);
    listItem.appendChild(removeButton);

    // Append the new list item to the existing list
    const list = document.getElementById('todoList');
    list.appendChild(listItem);

    // Clear the input field for the next item
    userInput.value = '';
}
