import { Project } from "./projectFunctions";


//Local Storage set/get functions for persistent projects between users.

type ProjectData = Project;


function saveDataToLocalStorage(name: string | undefined, data: ProjectData | undefined) {
    if (name !== undefined && data !== undefined) {
        localStorage.setItem(name, JSON.stringify(data));
    }
}

function getDataFromLocalStorage(){
    const storedData = localStorage.getItem('projects');
    return storedData ? JSON.parse(storedData) : [];
}

export { saveDataToLocalStorage, getDataFromLocalStorage }