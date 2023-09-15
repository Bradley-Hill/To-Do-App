import { ToDoItem } from "./toDoFactoryFunc";

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
  }

  function populateProjectDropdown(){
    const projectSelection = document.getElementById('projectSelection') as HTMLSelectElement;
    projectSelection.innerHTML = '';

    for(const project of projects){
        const option = document.createElement('option')
        option.value = project.name
        option.text = project.name
        projectSelection.appendChild(option);
    }
  }

  function addToDoItemToProject(projectName: string, toDoItem: ToDoItem){
    const project = projects.find((p)=> p.name === projectName)
    if(projectName){
        project?.toDoItems.push(toDoItem)
    }
  }

  export {addToDoItemToProject, createProject, populateProjectDropdown}