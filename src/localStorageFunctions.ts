import { Project } from "./projectFunctions";

type ProjectData = Project;

//stores new project in local storage
function saveNewProjectToLocalStorage(name: string|undefined, data: ProjectData|undefined){
    if (name !== undefined && data !== undefined){
        localStorage.setItem(name, JSON.stringify(data));
    }
}

//stores updated project in local storage
function saveProjectDataToLocalStorage(project: Project) {
    localStorage.setItem(project.name, JSON.stringify(project));
  }

//get Project names from local storage(for populating dropdown selector)
function getProjectNamesFromLocalStorage() {
    const keys = [];

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i) as string;
        keys.push(key);
    }

    return keys;
}

// retrieves a project by key/namre from local storage
function getProjectDataFromLocalStorage(name:string) {
    const projectData = localStorage.getItem(name);
    return projectData ? JSON.parse(projectData) : null;
  }

export { saveNewProjectToLocalStorage,saveProjectDataToLocalStorage,getProjectDataFromLocalStorage, getProjectNamesFromLocalStorage }