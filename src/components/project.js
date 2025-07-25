import { displayTasks } from "./task.js";

export function createProject(title) {
    const projects = JSON.parse(localStorage.getItem("projects")) || {};

    if (projects[title]) {
        return;
    }

    projects[title] = {
        title: title,
        tasks: []
    };

    localStorage.setItem("projects", JSON.stringify(projects));
    displayProjects();
}

export function displayProjects() {
    const projects = JSON.parse(localStorage.getItem("projects")) || {
        "Default": {
            "title": "Default",
            "tasks": []
        }
    };
    const projectList = document.getElementById('projectList');
    projectList.innerHTML = '';

    if (!localStorage.getItem("activeProject")) {
        localStorage.setItem("activeProject", "Default");
    }

    const currentProject = localStorage.getItem("activeProject");

    Object.keys(projects).forEach(key => {
        const project = document.createElement('li');

        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = key;

        if (key === currentProject) {
            button.classList.add('active');
        } else {
            button.onclick = () => selectProject(key);
        }

        project.appendChild(button);
        projectList.appendChild(project);
    });
}

function selectProject(key) {
    localStorage.setItem("activeProject", key);
    displayProjects();
    displayTasks();
}