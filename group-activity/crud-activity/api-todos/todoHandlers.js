const todo = require('./todoLib');

const getAllTodos = (req, res) => {
  const todos = todo.getAll();
  res.json(todos);
};

const createTodo = (req, res) => {
  const { task, completed, dueDate } = req.body;

  const newTodo = todo.addOne(task, completed, dueDate);

  if (newTodo) {
    res.json(newTodo);
  } else {
    res.status(500).json({ message: "Failed to create todo" });
  }
};

const getTodoById = (req, res) => {
  const todoId = req.params.todoId;
  const foundTodo = todo.findById(todoId);
  if (foundTodo) {
    res.json(foundTodo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
};

const updateTodo = (req, res) => {
  const todoId = req.params.todoId;

  const { task, completed, dueDate } = req.body;

  const updatedTodo = todo.updateOneById(todoId, { task, completed, dueDate });

  if (updatedTodo) {
    res.json(updatedTodo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};

const deleteTodo = (req, res) => {
  const todoId = req.params.todoId;

  const isDeleted = todo.deleteOneById(todoId);

  if (isDeleted) {
    res.json({ message: "Todo deleted successfully" });
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};

