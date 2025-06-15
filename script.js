'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
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
    if (taskText !== '') {
       
        const li = document.createElement('li');
        li.textContent = taskText;

       
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        
        removeBtn.onclick = function () {
            taskList.removeChild(li); // Remove the task from the list
        };

       
        li.appendChild(removeBtn);
        taskList.appendChild(li);

       
        taskInput.value = '';
    } else {
        alert('Please enter a task');
    }
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




