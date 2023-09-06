import './style.css';

// This will be written in typescript from now on.
// Strongly Typed is the only thing I know for now.

// Define a type for the ToDoItem
type ToDoItem = {
    task: string;
    description: string;
    priority: number;
    dueDate: Date;
    isCompleted: boolean;
    markComplete: () => void;
  };

  function createToDoItem(
    task: string,
    priority: number,
    dueDate: Date,
    description: string
  ): ToDoItem {
    const toDoItem: ToDoItem = {
      task: task,
      description: description,
      priority: priority,
      dueDate: dueDate,
      isCompleted: false,
      markComplete: function () {
        this.isCompleted = true;
      },
    };
    return toDoItem;
  }