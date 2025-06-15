'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('task-list');
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    let tasks = [];

    
    function loadTasks() {
        const saved = localStorage.getItem('tasks');
        tasks = saved? JSON.parse(saved) : [];
        tasks.forEach(task => {
            createTaskElement(task);
        });
    }

    
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

   
    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.style.marginLeft = '10px';

        removeBtn.addEventListener('click', function () {
            
            tasks = tasks.filter(task => task !== taskText);
            
            saveTasks();
            
            li.remove();
        });

        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }

    function addTask(e) {
        e.preventDefault();
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert("Please enter a task.");
            return;
        }

        tasks.push(taskText);
        createTaskElement(taskText);
        saveTasks();
        taskInput.value = '';
    }
   
    addButton.addEventListener('click', addTask); {
       taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask(e);
        }
    });

    loadTasks();
}
});
// This script implements a simple task management application that allows users to add and remove tasks.



