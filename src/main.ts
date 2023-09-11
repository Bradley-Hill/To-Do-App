import './style.css';
import { createToDoItem } from './toDoFactoryFunc';
import { addToDoItemToUI } from './addToDoItemToUI';

// This will be written in typescript from now on.
// Strongly Typed is the only thing I know for now.

//Make sure the DOM is loaded before any JS happens
document.addEventListener("DOMContentLoaded", function () {
  
  //Declare variables from the form inputs
  const form = document.querySelector('form') as HTMLFormElement;
  const taskInput = document.querySelector('input[name="task"]') as HTMLInputElement;
  const descriptionInput = document.querySelector('input[name="description"]') as HTMLInputElement;
  const priorityInput = document.querySelector('input[name="priority"]')as HTMLInputElement;
  const dueDateInput = document.querySelector('input[name="dueDate"]')as HTMLInputElement;
  // const buttonInput = document.querySelector('#toDoBttn')

  //Listen for the form button being clicked and create instance of toDoItem using
  //form input values
  form?.addEventListener('submit', function(event){
    event.preventDefault()

    const task = taskInput?.value;
    const description = descriptionInput?.value;
    const priority = parseInt(priorityInput?.value)
    const dueDate = new Date(dueDateInput?.value)

    const toDoItem = createToDoItem(task,priority,dueDate,description)

    addToDoItemToUI(toDoItem)
  });


  

});
