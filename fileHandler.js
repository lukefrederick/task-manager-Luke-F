const fs = require('fs');


// Writes tasks to a file in JSON format
function saveTasks(filePath, tasks) {
    fs.writeFileSync(filePath, JSON.stringify(tasks));
}

// Reads and parses the tasks from the file - if file doesn't exist, return empty array
function loadTasks(filePath) {
    // Checks if file exists if not returns empty array
    if(!fs.existsSync(filePath)) {
        return [];
    }

    // Reads and parses tasks from file if file exists
    const tempTasks = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(tempTasks);
}

module.exports = {saveTasks, loadTasks};