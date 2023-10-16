import { ToDoItem} from "./toDoFactoryFunction";
import { projects } from "./main";
import { saveNewProjectToLocalStorage, saveProjectDataToLocalStorage } from "./localStorageFunctions";

// Define the type for the project object
type Project = {
    name:string;
    toDoItems: ToDoItem[];
}

// Creates a project to be stored in local storage
function createProject(name: string){
    const project: Project = {
        name:name,
        toDoItems: []
    };
    saveNewProjectToLocalStorage(project.name,project)
}

// Adds the keys from local storage to dropdown
function populateProjectDropdown(){
    const projectSelection = document.getElementById('projectSelection') as HTMLSelectElement;
    projectSelection.innerHTML = "";

    for(let i = 0; i < localStorage.length; i++){
        const option = document.createElement('option')
        const key = localStorage.key(i) as string;
        option.value = key
        option.text = key
        projectSelection.appendChild(option);
    }
}

function addToDoItemToProject(projectName: string, toDoItem: ToDoItem){
    const project = projects.find((p)=> p.name === projectName)
    if(project){
        project.toDoItems.push(toDoItem)
        saveProjectDataToLocalStorage(project);
    } else {
        console.error(`Project "${projectName}" not found.`);
    }
}

export { Project, createProject, populateProjectDropdown, addToDoItemToProject }