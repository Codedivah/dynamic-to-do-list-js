'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('task-list');
    const taskForm = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    let tasks = [];

    
    function loadTasks() {
        const saved = localStorage.getItem('tasks');
        tasks = saved ? JSON.parse(saved) : [];
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

   
    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            tasks.push(taskText); 
            createTaskElement(taskText); 
            saveTasks(); 
            taskInput.value = '';
        }
    });

    
    loadTasks();
});



