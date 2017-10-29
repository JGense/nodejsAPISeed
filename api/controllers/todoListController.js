'use strict';

var mongoose = require('mongoose');
Task = mongoose.model('Tasks');

/*
* function list_all_tasks()
*
* Permet de récupérer la liste de toutes les tasks
*
* @return task
*
* @author JGense
*/
exports.list_all_tasks = function(req, res) {
    Task.find({}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

/*
* function create_a_task()
*
* Permet de créer une task
*
* @return task
*
* @author JGense
*/
exports.create_a_task = function(req, res) {
    var new_task = new Task(req.body);
    new_task.save(function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

/*
* function read_a_task()
*
* Permet de récupérer une task en particulier
*
* @param taskId : Id de la task à rechercher
*
* @return task
*
* @author JGense
*/
exports.read_a_task = function(req, res) {
    Task.findById(req.params.taskId, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

/*
* function update_a_task()
*
* Permet de modifier une task
*
* @param taskid : Id de la task à modifier
*
* @return task
*
* @author JGense
*/
exports.update_a_task = function(req, res) {
    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

/*
* function delete_a_task()
*
* Permet de modifier une task
*
* @parm taskId : Id de la task à supprimer
*
* @return message
*
* @author JGense
*/
exports.delete_a_task = function(req, res) {
    Task.remove({_id: req.params.taskId}, function(req, res) {
        if (err)
            res.send(err);
        res.json({ message: 'Task successfully deleted' });    
    });
};