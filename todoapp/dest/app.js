"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const todoController = require("./controllers/todoController");
const app = express();
// set template engine
app.set('view engine', 'ejs');
app.set('views', 'src/views');
// set static files
app.use(express.static('./public'));
// fire controllers
new todoController.TodoController(app);
// listen on port
app.listen(3000);
console.log('listening on port 3000');
//# sourceMappingURL=app.js.map