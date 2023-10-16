function addToDoItemToUI(toDoItem) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = generateToDoItemHTML(toDoItem);
    ul === null || ul === void 0 ? void 0 : ul.appendChild(li);
}
function generateToDoItemHTML(item) {
    return `
    <strong>Task:</strong> ${item.task}<br>
    <strong>Description:</strong> ${item.description}<br>
    <strong>Priority:</strong> ${item.priority}<br>
    <strong>Due Date:</strong> ${item.dueDate}<br>
    <strong>Is Completed:</strong> ${item.isCompleted ? 'Yes' : 'No'}
`;
}
export { addToDoItemToUI, generateToDoItemHTML };
