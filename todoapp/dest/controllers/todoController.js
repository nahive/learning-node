"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
class TodoController {
    constructor(app) {
        this.parser = bodyParser.urlencoded({ extended: false });
        this.data = [
            new Item('get milk'),
            new Item('walk dong'),
            new Item('kick some coding ass')
        ];
        this.app = app;
        this.bind();
    }
    bind() {
        this.app.get('/todo', (req, res) => this.get(req, res));
        this.app.post('/todo', this.parser, (req, res) => this.post(req, res));
        this.app.delete('/todo/:item', (req, res) => this.delete(req, res));
    }
    get(req, res) {
        console.log(this.data);
        res.render('todo', { todos: this.data });
    }
    post(req, res) {
        this.data.push(new Item(req.body.value));
        res.json(this.data);
    }
    delete(req, res) {
        this.data = this.data.filter(function (todo) {
            return todo.name.replace(/ /g, '-') !== req.params.item;
        });
        res.json(this.data);
    }
}
exports.TodoController = TodoController;
class Item {
    constructor(name) {
        this.name = name;
    }
}
//# sourceMappingURL=todoController.js.map