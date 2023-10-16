import "./style.css";
import { createProject, populateProjectDropdown, addToDoItemToProject } from "./projectFunctions";
import { getProjectNamesFromLocalStorage, getProjectDataFromLocalStorage, } from "./localStorageFunctions";
import { createToDoItem, } from "./toDoFactoryFunction";
import { addToDoItemToUI, generateToDoItemHTML } from "./addToDoItemsToUI";
const projectNames = getProjectNamesFromLocalStorage();
const projects = projectNames.map((name) => getProjectDataFromLocalStorage(name));
console.log("ProjectNames: ", projectNames);
console.log("projects: ", projects);
document.addEventListener("DOMContentLoaded", function () {
    console.log("Initialised projects: ", projects);
    const taskInput = document.querySelector('input[name="task"]');
    const descriptionInput = document.querySelector('input[name="description"]');
    const priorityInput = document.querySelector('input[name="priority"]');
    const dueDateInput = document.querySelector('input[name="dueDate"]');
    const toDoButton = document.querySelector("#toDoBttn");
    const createProjectButton = document.getElementById("createProject");
    const projectSelection = document.getElementById("projectSelection");
    const toDoList = document.querySelector(".toDoList");
    createProjectButton === null || createProjectButton === void 0 ? void 0 : createProjectButton.addEventListener("click", function () {
        const projectNameInput = document.getElementById("projectName");
        const projectName = projectNameInput.value.trim();
        if (projectName) {
            createProject(projectName);
            populateProjectDropdown();
            projectNameInput.value = "";
        }
    });
    toDoButton === null || toDoButton === void 0 ? void 0 : toDoButton.addEventListener('click', function (event) {
        event.preventDefault();
        const selectedProjectName = document.getElementById('projectSelection')
            .value;
        const task = taskInput === null || taskInput === void 0 ? void 0 : taskInput.value;
        const description = descriptionInput === null || descriptionInput === void 0 ? void 0 : descriptionInput.value;
        const priority = parseInt(priorityInput === null || priorityInput === void 0 ? void 0 : priorityInput.value);
        const dueDate = new Date(dueDateInput === null || dueDateInput === void 0 ? void 0 : dueDateInput.value);
        const toDoItem = createToDoItem(task, priority, dueDate, description);
        addToDoItemToProject(selectedProjectName, toDoItem);
        addToDoItemToUI(toDoItem);
    });
    projectSelection.addEventListener('change', function () {
        const selectedProjectName = projectSelection.value;
        if (selectedProjectName) {
            const selectedProject = projects.find((project) => project.name === selectedProjectName);
            if (selectedProject && toDoList) {
                toDoList.innerHTML = '';
                selectedProject.toDoItems.forEach((item) => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = generateToDoItemHTML(item);
                    toDoList.appendChild(listItem);
                });
            }
        }
    });
    populateProjectDropdown();
});
export { projects };
