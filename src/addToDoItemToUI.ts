import { ToDoItem } from "./toDoFactoryFunc";

function addToDoItemToUI(toDoItem: ToDoItem) {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  li.innerHTML = generateToDoItemHTML(toDoItem);
  ul?.appendChild(li);
}

  function generateToDoItemHTML(item: ToDoItem) {
    return `
        <strong>Task:</strong> ${item.task}<br>
        <strong>Description:</strong> ${item.description}<br>
        <strong>Priority:</strong> ${item.priority}<br>
        <strong>Due Date:</strong> ${item.dueDate}<br>
        <strong>Is Completed:</strong> ${item.isCompleted ? 'Yes' : 'No'}
    `;
}

  export {addToDoItemToUI, generateToDoItemHTML}