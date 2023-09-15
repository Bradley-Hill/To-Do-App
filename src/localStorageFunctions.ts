import { Project } from "./projectFunctions";
import { ToDoItemArray } from "./toDoFactoryFunc";

//Local Storage set/get functions for persistent projects between users.

function saveDataToLocalStorage(name: string, data: ToDoItemArray){
    localStorage.setItem(name, JSON.stringify(data));
}

function getDataFromLocalStorage(){
    const storedData = localStorage.getItem('projects');
    return storedData ? JSON.parse(storedData) : [];
}

export { saveDataToLocalStorage, getDataFromLocalStorage }