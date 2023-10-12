import './style.css';
import { createToDoItem, ToDoItem } from './toDoFactoryFunc';
import { addToDoItemToUI, generateToDoItemHTML } from './addToDoItemToUI';
import { populateProjectDropdown,createProject,addToDoItemToProject, Project } from './projectFunctions';
import { getProjectNamesFromLocalStorage,getProjectDataFromLocalStorage } from './localStorageFunctions';

// This will be written in typescript from now on.
// Strongly Typed is the only thing I know for now.

//Make sure the DOM is loaded before any JS happens
document.addEventListener("DOMContentLoaded", function () {

  //Initialise the projects from the local storage
  const projectNames = getProjectNamesFromLocalStorage();
  const projects: Project[] = projectNames.map(name => getProjectDataFromLocalStorage(name));

  console.log("Initialized projects:", projects);
  
  //Declare variables from the form inputs and buttons
  
  const taskInput = document.querySelector('input[name="task"]') as HTMLInputElement;
  const descriptionInput = document.querySelector('input[name="description"]') as HTMLInputElement;
  const priorityInput = document.querySelector('input[name="priority"]')as HTMLInputElement;
  const dueDateInput = document.querySelector('input[name="dueDate"]')as HTMLInputElement;
  const toDoButton = document.querySelector('#toDoBttn')
  const createProjectButton = document.getElementById('createProject');
  const projectSelection = document.getElementById('projectSelection') as HTMLSelectElement;
  const toDoList = document.querySelector('.toDoList')

  //Listen for Project button being clicked and create a project and add it to the dropdown selector
  createProjectButton?.addEventListener('click', function () {
    const projectNameInput = document.getElementById('projectName') as HTMLInputElement;
    const projectName = projectNameInput.value.trim();
    if (projectName) {
      createProject(projectName);
      populateProjectDropdown();
      projectNameInput.value = '';
    }
  });

  //Listen for the form button being clicked and create instance of toDoItem using
  //form input values
  toDoButton?.addEventListener('click', function(event){
    event.preventDefault()

    const selectedProjectName = (document.getElementById('projectSelection') as HTMLSelectElement)
      .value;
    const task = taskInput?.value;
    const description = descriptionInput?.value;
    const priority = parseInt(priorityInput?.value)
    const dueDate = new Date(dueDateInput?.value)

    const toDoItem = createToDoItem(task, priority, dueDate, description);

    addToDoItemToProject(selectedProjectName, toDoItem);

    addToDoItemToUI(toDoItem);
  });

  //Listen for changes in dropdown selector and display the linked toDoList with selected

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
