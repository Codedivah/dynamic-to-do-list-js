'use strict';

document.addEventListener('DOMContentLoaded', function () {
    try {
        // Select DOM elements
        const addButton = document.getElementById('add-task-btn');
        const taskInput = document.getElementById('task-input');
        const taskList = document.getElementById('task-list');

        /**
         * Adds a new task to the task list
         * @param {Event} e - The event object
         */
        function addTask(e) {
            const taskText = taskInput.value.trim();

            if (taskText === '') {
                alert('Please enter a task');
                return;
            }

            // Create new task item
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create remove button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.className = 'remove-btn';
            removeBtn.setAttribute('aria-label', `Remove task: ${taskText}`);

            removeBtn.onclick = function () {
                taskList.removeChild(li);
            };

            li.appendChild(removeBtn);
            taskList.appendChild(li);
            taskInput.value = '';
        }

        // Event listeners
        addButton.addEventListener('click', addTask);
        taskInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                addTask(e);
            }
        });

    } catch (error) {
        console.error('Error initializing the application:', error);
    }
});
