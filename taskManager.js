// Define and export the following functions:
// 1. addTask(tasks, task): Adds a new task to the task list.
// 2. listTasks(tasks): Logs all tasks to the console.


// Adds new task to task list
function addTask(tasks, task) {
    tasks.push(task);
}

// Logs all tasks to console
function listTasks(tasks) {
    console.log(tasks);
}

module.exports = {addTask, listTasks};