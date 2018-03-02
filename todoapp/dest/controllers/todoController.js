"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoController = /** @class */ (function () {
    function TodoController(app) {
        this.app = app;
        this.bind();
    }
    TodoController.prototype.bind = function () {
        this.app.get('/todo', this.get);
        this.app.post('/todo', this.post);
        this.app.delete('/todo', this.delete);
    };
    TodoController.prototype.get = function (req, res) {
        res.render('todo');
    };
    TodoController.prototype.post = function (req, res) {
        // TODO
    };
    TodoController.prototype.delete = function (req, res) {
        // TODO
    };
    return TodoController;
}());
exports.TodoController = TodoController;
//# sourceMappingURL=todoController.js.map