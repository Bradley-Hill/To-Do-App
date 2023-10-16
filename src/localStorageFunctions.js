function saveNewProjectToLocalStorage(name, data) {
    if (name !== undefined && data !== undefined) {
        localStorage.setItem(name, JSON.stringify(data));
    }
}
function saveProjectDataToLocalStorage(project) {
    localStorage.setItem(project.name, JSON.stringify(project));
}
function getProjectNamesFromLocalStorage() {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        keys.push(key);
    }
    return keys;
}
function getProjectDataFromLocalStorage(name) {
    const projectData = localStorage.getItem(name);
    return projectData ? JSON.parse(projectData) : null;
}
export { saveNewProjectToLocalStorage, saveProjectDataToLocalStorage, getProjectDataFromLocalStorage, getProjectNamesFromLocalStorage };
