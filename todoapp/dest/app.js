"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var todoController = require("./controllers/todoController");
var app = express();
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