"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodoController {
    constructor(app) {
        this.app = app;
        this.bind();
    }
    bind() {
        this.app.get('/todo', this.get);
        this.app.post('/todo', this.post);
        this.app.delete('/todo:item', this.delete);
    }
    get(req, res) {
        res.render('todo');
    }
    post(req, res) {
        // TODO
    }
    delete(req, res) {
        // TODO
    }
}
exports.TodoController = TodoController;
//# sourceMappingURL=todoController.js.map