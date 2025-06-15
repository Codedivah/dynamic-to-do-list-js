'use strict';

/*document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('task-list');
    const addButton = document.getElementById('add-task-btn');
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

    function addTask(e) {
     
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert("Please enter a task.");
            return;
        }

  const li = document.createElement('li');
            li.textContent = taskText;
    }

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
*/

document.addEventListener('DOMContentLoaded', function() {
    
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    // Create the addTask Function
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();
        
        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }
        
        // Task Creation and Removal
        // Create a new li element and set its textContent to taskText
        const li = document.createElement('li');
        li.textContent = taskText;
        
        // Create a new button element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        
        // Assign an onclick event to the remove button
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };
        
        // Append the remove button to the li element
        li.appendChild(removeButton);
        
        // Append the li to taskList
        taskList.appendChild(li);
        
        // Clear the task input field
        taskInput.value = '';
    }
    
    // Attach Event Listeners
    // Add event listener to addButton that calls addTask when clicked
    addButton.addEventListener('click', addTask);
    
    // Add event listener to taskInput for 'keypress' event
    taskInput.addEventListener('keypress', function(event) {
        // Check if event.key is equal to 'Enter'
        if (event.key === 'Enter') {
            addTask();
        }
    });
});