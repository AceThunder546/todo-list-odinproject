import './style.css'
import { displayModal } from './components/modal.js'
import { displayProjects } from './components/project.js';
import { displayTasks } from './components/task.js';

document.getElementById('newProjectBtn').addEventListener('click', () => {
    displayModal('project');
})
document.getElementById('newTaskBtn').addEventListener('click', () => {
    displayModal('task');
})


document.addEventListener("DOMContentLoaded", displayProjects());
document.addEventListener("DOMContentLoaded", displayTasks());