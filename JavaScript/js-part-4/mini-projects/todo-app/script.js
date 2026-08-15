// Interactive To-Do Application
let todo = [];
let req = prompt("Please enter your request (list, add, delete, quit):");

while (true) {
    if (req.toLowerCase() === "quit") {
        console.log("Quitting app. Goodbye!");
        break;
    }

    if (req.toLowerCase() === "list") {
        console.log("---------------------------------");
        if (todo.length === 0) {
            console.log("No tasks found.");
        } else {
            for (let i = 0; i < todo.length; i++) {
                console.log(`${i}: ${todo[i]}`);
            }
        }
        console.log("---------------------------------");
    } else if (req.toLowerCase() === "add") {
        let task = prompt("Enter the task you want to add:");
        if (task) {
            todo.push(task);
            console.log(`Task added: "${task}"`);
        }
    } else if (req.toLowerCase() === "delete") {
        let idx = parseInt(prompt("Enter the index of the task to delete:"));
        if (!isNaN(idx) && idx >= 0 && idx < todo.length) {
            let deleted = todo.splice(idx, 1);
            console.log(`Task deleted: "${deleted[0]}"`);
        } else {
            console.log("Invalid index!");
        }
    } else {
        console.log("Invalid request. Please enter list, add, delete, or quit.");
    }

    req = prompt("Please enter your request:");
}
