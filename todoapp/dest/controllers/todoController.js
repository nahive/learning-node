"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
class TodoController {
    constructor(app) {
        this.parser = bodyParser.urlencoded({ extended: false });
        this.dburl = 'mongodb://test:test@ds062178.mlab.com:62178/nahive_tododb';
        this.app = app;
        this.bind();
        this.database();
    }
    bind() {
        this.app.get('/todo', (req, res) => this.get(req, res));
        this.app.post('/todo', this.parser, (req, res) => this.post(req, res));
        this.app.delete('/todo/:item', (req, res) => this.delete(req, res));
    }
    database() {
        // connect to database
        mongoose.connect(this.dburl);
    }
    get(req, res) {
        // getting data from mongo and pass to view
        Todo.find({}, function (err, data) {
            if (err)
                throw err;
            res.render('todo', { todos: data });
        });
    }
    post(req, res) {
        // get data from view & add to mongo)
        new Item(req.body.value).model().save(function (err, data) {
            if (err)
                throw err;
            res.json(data);
        });
    }
    delete(req, res) {
        // delete requested item from mongo
        Todo.find({ name: req.params.item.replace(/\-/g, " ") }).remove(function (err, data) {
            if (err)
                throw err;
            res.json(data);
        });
    }
}
exports.TodoController = TodoController;
// schema for db
var Todo = mongoose.model('Todo', new mongoose.Schema({ name: String }));
class Item {
    model() {
        return new Todo({ name: this.name });
    }
    constructor(name) {
        this.name = name;
    }
}
//# sourceMappingURL=todoController.js.map