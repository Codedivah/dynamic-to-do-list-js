'use strict';

document.addEventListener('DOMContentLoaded', function () {
   
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');


    function addTask(e) {
        e.preventDefault(); // Prevent form submission if used inside a form

        const taskText = taskInput.value.trim();

         if (taskText !== '') {
    const li = document.createElement('li');     
    li.textContent = taskText;                   
    taskList.appendChild(li);  
        }
       const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
   
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        
        li.appendChild(removeBtn);
        taskList.appendChild(li);

       
        taskInput.value = '';
    }


}

      
    
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
   
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Step 8: Clear input
        taskInput.value = '';
    }

    addButton.addEventListener('click', addTask);

    
    taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask(e);
        }
    });
});
