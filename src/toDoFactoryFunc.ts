// Define a type for the ToDoItem
type ToDoItem = {

    task: string;
    description: string;
    priority: number;
    dueDate: Date;
    isCompleted: boolean;
    markComplete: () => void;
  };

  //Perhaps not necessary??
  // type ToDoItemArray = ToDoItem[];

  function createToDoItem(task: string,priority: number,dueDate: Date,description: string)
  : ToDoItem {
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

  export {createToDoItem, ToDoItem, }