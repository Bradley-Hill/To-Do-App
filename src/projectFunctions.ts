import { ToDoItem } from "./toDoFactoryFunc";
import { saveDataToLocalStorage, saveProjectDataToLocalStorage, } from "./localStorageFunctions";

// Define a type for the Project Object
type Project = {
    name: string;
    toDoItems: ToDoItem[];
  }
  
  const projects: Project[] = [];
  
  function createProject(name: string){
    const project: Project = {
      name: name,
      toDoItems: [],
    };
    projects.push(project);
    saveDataToLocalStorage(project.name,project)
  }

  function populateProjectDropdown(){
    const projectSelection = document.getElementById('projectSelection') as HTMLSelectElement;
    projectSelection.innerHTML = '';

    for(let i = 0; i < localStorage.length; i++){
      const option = document.createElement('option')
      const key = localStorage.key(i) as string;
      option.value = key
      option.text = key
      projectSelection.appendChild(option);
  }
  }

  function addToDoItemToProject(projectName: string, toDoItem: ToDoItem){

    console.log(`Adding ToDoItem to project: ${projectName}`);
    console.log("Current projects:", projects);

    const project = projects.find((p)=> p.name === projectName)
    if(project){
        project.toDoItems.push(toDoItem)
        saveProjectDataToLocalStorage(project);
    } else {
        console.error(`Project "${projectName}" not found.`);
    }
  }

  export {addToDoItemToProject, createProject, populateProjectDropdown, Project}