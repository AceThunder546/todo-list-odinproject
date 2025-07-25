import { createProject } from './project.js';
import { createTask } from './task.js';

export function displayModal(type) {
    const mainContainer = document.querySelector('main');
    const modalContainer = document.createElement('div');
    const modalContent = document.createElement('div');
    modalContainer.classList.add('modalContainer');
    modalContent.classList.add('modalContent');

    if (type === 'project') {
        modalContent.innerHTML = `
            <form id="newProjectForm">
                <label for="projectName">Project Name:</label>
                <input type="text" id="projectName">

                <button type="submit" id="submitBtn">Submit</button>
            </form>
        ` 
    }
    else if (type === 'task') {
        modalContent.innerHTML =`
            <form id="newTaskForm">
                <input type="text" id="newTaskTitle" placeholder="Task title" required>
                <textarea id="newTaskDesc" row="50" cols="30" placeholder="Task description"></textarea>
                <label for="newDueDate">Due Date:</label>
                <input type="date" id="newDueDate" required>
                <label for="newPriority">Priority:</label>
                <select id="newPriority">
                    <option value="light">Light</option>
                    <option value="medium">Medium</option>
                    <option value="heavy">Heavy</option>
                </select>
                <button type="submit" id="submitBtn">Submit</button>
            </form>
        `
    }

    window.onclick = function(event) {
        if (event.target == modalContainer) {
            mainContainer.removeChild(modalContainer);
        }
    }

    modalContainer.appendChild(modalContent);
    mainContainer.appendChild(modalContainer);

    
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (document.getElementById('newProjectForm')) {
            submitModal('project');
            mainContainer.removeChild(modalContainer);
        } else {
            submitModal('task');
            mainContainer.removeChild(modalContainer);
        }
    })
}

function submitModal(type) {
    if (type === 'project') {
        const projectTitle = document.getElementById('projectName').value;
        createProject(projectTitle);
    }
    if (type === 'task') {
        const taskTitle = document.getElementById('newTaskTitle').value;
        const taskDesc = document.getElementById('newTaskDesc').value;
        const taskDueDate = document.getElementById('newDueDate').value;
        const taskPriority = document.getElementById('newPriority').value;
        createTask(taskTitle, taskDesc, taskDueDate, taskPriority);
    }
}