function createToDoItem(task, priority, dueDate, description) {
    const toDoItem = {
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
export { createToDoItem, };
