// Structure to data model for each to do 
// {
//     "task": "Buy groceries",
//     "completed": false,
//     "dueDate": "2025-08-30"
// }

let todoArray = [];
let nextId = 1;

// Function to add a new to do item
function addOne(task, completed, dueDate) {
    if (!task || !completed  || !dueDate) {
        return false;
    }

    const newTodo = {
        id: nextId++,
        task: task,
        completed: completed,
        dueDate: dueDate
    };

    todoArray.push(newTodo);
    return newTodo;
}

// Function to retrieve all to do items
function getAll() {
    return todoArray;
}

// Function to find a to do item by its ID
function findById(id) {
    const numbericId = Number(id); // Converts id to a number
    const todo = todoArray.find(todo => todo.id === numbericId);
    return todo || false; // Return the to do item or false if not found
}

// Function to update a to do item by its ID
function updateOneById(id, updatedData) {
    const todo = findById(id);
    if (todo) {
        // Update properties only if they are provided in updatedData
        if (updatedData.task) todo.task = updatedData.task;
        if (updatedData.completed !== undefined) todo.completed = updatedData.completed;
        if (updatedData.dueDate) todo.dueDate = updatedData.dueDate;
        return todo; // Returns the updated to do item
    }
    return false; // Returns false if the to do item with the provided ID is not found
}

// Function to delete a to do item by its ID
function deleteOneById(id) {
    const todo = findById(id);
    if (todo) {
        const initialLength = todoArray.length;
        todoArray = todoArray.filter(todo => todo.id !== Number(id)); // Filters out the to do item with the matching ID
        return todoArray.length < initialLength; // Returns true if the array length decreased, indicating successful deletion
    }
    return false; // Returns false if the to do item was not found
}

// Testing the module
if (require.main === module) {
    // Add to do items
    let result = addOne("Buy groceries", false, "2025-08-30");
    console.log(result);
    result = addOne("Walk the dog", true, "2025-08-25");
    console.log(result);

    console.log("getAll called:", getAll());

    console.log("findById called:", findById(1));

    console.log("updateOneById called:", updateOneById(1, { completed: true }));

    console.log("deleteOneById called:", deleteOneById(2));

    console.log("Final to do list:", getAll());
}

const todoLib = {
    addOne,
    getAll,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = todoLib;