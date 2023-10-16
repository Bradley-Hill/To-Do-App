import { projects } from "./main";
import { saveNewProjectToLocalStorage, saveProjectDataToLocalStorage } from "./localStorageFunctions";
function createProject(name) {
    const project = {
        name: name,
        toDoItems: []
    };
    saveNewProjectToLocalStorage(project.name, project);
}
function populateProjectDropdown() {
    const projectSelection = document.getElementById('projectSelection');
    projectSelection.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
        const option = document.createElement('option');
        const key = localStorage.key(i);
        option.value = key;
        option.text = key;
        projectSelection.appendChild(option);
    }
}
function addToDoItemToProject(projectName, toDoItem) {
    const project = projects.find((p) => p.name === projectName);
    if (project) {
        project.toDoItems.push(toDoItem);
        saveProjectDataToLocalStorage(project);
    }
    else {
        console.error(`Project "${projectName}" not found.`);
    }
}
export { createProject, populateProjectDropdown, addToDoItemToProject };
