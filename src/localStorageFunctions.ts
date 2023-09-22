import { Project } from "./projectFunctions";


//Local Storage set/get functions for persistent projects between users.

type ProjectData = Project;


function saveDataToLocalStorage(name: string | undefined, data: ProjectData | undefined) {
    if (name !== undefined && data !== undefined) {
        localStorage.setItem(name, JSON.stringify(data));
    }
}

function getProjectNamesFromLocalStorage() {
    const keys = [];

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i) as string;
        keys.push(key);
    }

    return keys;
}

function getProjectDataFromLocalStorage(name:string) {
    const projectData = localStorage.getItem(name);
    return projectData ? JSON.parse(projectData) : null;
  }

export { saveDataToLocalStorage, getProjectNamesFromLocalStorage, getProjectDataFromLocalStorage }