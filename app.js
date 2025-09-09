const fileHandler = require('./fileHandler.js');
const taskManager = require('./taskManager.js');
const path = require('path');
const filePath = path.join(__dirname, "tasks.json")



// 1. Load existing tasks from a file named tasks.json
let taskList = fileHandler.loadTasks(filePath);

// 2. Add new tasks to the list
taskManager.addTask(taskList, "Homework");
taskManager.addTask(taskList, "Laundry");

// 3. List all tasks
taskManager.listTasks(taskList);

// 4. Save the updated task list back to file
fileHandler.saveTasks('./tasks.json', taskList);




// Doesn't work if file is tasks.json exists but is empty