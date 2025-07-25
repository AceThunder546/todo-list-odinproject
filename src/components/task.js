export function createTask(title, description, dueDate, priority) {
    const projects = JSON.parse(localStorage.getItem("projects")) || {};
    const currentProject = localStorage.getItem("activeProject");

    projects[currentProject].tasks.push({
        title,
        description,
        dueDate,
        priority
    });

    localStorage.setItem("projects", JSON.stringify(projects));
    console.log(projects);
    displayTasks();
}

export function displayTasks() {
    const projects = JSON.parse(localStorage.getItem("projects")) || {};
    const currentProject = localStorage.getItem("activeProject");
    const taskContainer = document.getElementById('taskContainer');

    taskContainer.innerHTML = '';

    if (projects[currentProject].tasks.length === 0) {
        taskContainer.innerHTML = `
            <h3 style="width: 100%; text-align: center;">No tasks yet. Add one!</h3>
        `;
    }

    projects[currentProject].tasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <p>Due Date: ${task.dueDate}</p>
        `;
        if (task.priority === 'light') {
            taskDiv.style.borderLeft = '3px solid green';
        }
        else if (task.priority === 'medium') {
            taskDiv.style.borderLeft = '3px solid yellow';
        }
        else {
            taskDiv.style.borderLeft = '3px solid red';
        }
        taskContainer.appendChild(taskDiv);
    });
}