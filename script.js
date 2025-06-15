'use strict';


function addTask(e) {
    e.preventDefault(); // Prevent form submission if inside a form

    const taskText = taskInput.value.trim(); // Step 1: Get and trim input

    // Step 2: If input is empty, show an alert and stop
    if (taskText === '') {
        alert('Please enter a task');
        return; // Stop execution
    }

    // Step 3: If input is not empty, proceed to create task
    const li = document.createElement('li');
    li.textContent = taskText;

    // Step 4: Create a remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Step 5: When clicked, remove the li element
    removeBtn.onclick = function () {
        taskList.removeChild(li);
    };

    // Step 6: Attach button to li, then li to the list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Step 7: Clear input field
    taskInput.value = '';
}

