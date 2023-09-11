import { ToDoItem } from "./toDoFactoryFunc";

function addToDoItemToUI(toDoItem: ToDoItem){
    const ul = document.querySelector('ul')
  
    const li = document.createElement('li');

    li.innerHTML = `
    <strong>Task:</strong> ${toDoItem.task}<br>
    <strong>Description:</strong> ${toDoItem.description}<br>
    <strong>Priority:</strong> ${toDoItem.priority}<br>
    <strong>Due Date:</strong> ${toDoItem.dueDate}<br>
    <strong>Is Completed:</strong> ${toDoItem.isCompleted ? 'Yes' : 'No'}
    `

    ul?.appendChild(li);
  }

  export {addToDoItemToUI}