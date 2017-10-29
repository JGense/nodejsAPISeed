'use strict';
module.exports = function(app) {
    var todoList = require('../controllers/todoListController');

    // routes utilisées par "http://localhost:3000/tasks"
    app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);

    // routes utilisées par "http://localhost:3000/tasks/:taskId"
    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);
};