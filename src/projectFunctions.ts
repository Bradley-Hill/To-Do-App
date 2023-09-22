import { ToDoItem } from "./toDoFactoryFunc";
import { saveDataToLocalStorage,  } from "./localStorageFunctions";

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

    for(const project of projects){
        
    }
  }

  function addToDoItemToProject(projectName: string, toDoItem: ToDoItem){
    const project = projects.find((p)=> p.name === projectName)
    if(projectName){
        project?.toDoItems.push(toDoItem)
        saveDataToLocalStorage(project?.name,project);
    } else {
        console.error(`Project "${projectName}" not found.`);
    }
  }

  export {addToDoItemToProject, createProject, populateProjectDropdown, Project}