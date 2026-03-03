const express = require('express');
const todoRouter = express.Router();
const todoController = require('../../controllers/public/todoPageController')

todoRouter.get('/form', todoController.todoPage);
todoRouter.post('/form', todoController.todoPage);
todoRouter.post('/delete-task/:id', todoController.deleteTask);
todoRouter.get('/form/edit/:id', todoController.editPage);
todoRouter.post('/form/update/:id', todoController.updateTask);

module.exports = todoRouter;