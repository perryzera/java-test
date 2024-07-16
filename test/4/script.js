document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    loadTasks();

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
            saveTasks();
        }
    });

    function addTask(taskText, taskStatus = 'pending') {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.dataset.status = taskStatus;

        if (taskStatus === 'completed') {
            li.classList.add('completed');
        } else if (taskStatus === 'in-progress') {
            li.classList.add('in-progress');
        }

        li.addEventListener('click', () => {
            toggleTaskStatus(li);
            saveTasks();
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation();
            taskList.removeChild(li);
            saveTasks();
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }

    function toggleTaskStatus(task) {
        if (task.dataset.status === 'pending') {
            task.dataset.status = 'in-progress';
            task.classList.remove('completed');
            task.classList.add('in-progress');
        } else if (task.dataset.status === 'in-progress') {
            task.dataset.status = 'completed';
            task.classList.remove('in-progress');
            task.classList.add('completed');
        } else {
            task.dataset.status = 'pending';
            task.classList.remove('completed');
            task.classList.remove('in-progress');
        }
    }

    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(task => {
            tasks.push({
                text: task.firstChild.textContent,
                status: task.dataset.status
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        if (tasks) {
            tasks.forEach(task => addTask(task.text, task.status));
        }
    }
});
