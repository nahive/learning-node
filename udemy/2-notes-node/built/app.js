"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('starting app.ts');
const fs = require("fs");
const os = require("os");
const notes = require("./notes");
var res = notes.addNote();
console.log(res);
var sum = notes.add(1, 2);
console.log(sum);
var user = os.userInfo();
fs.appendFile('greetings.txt', `hello ${user.username}! Your age is ${notes.add(20, 5)}.`, (err) => {
    if (err)
        console.log('unable to write file!');
});
//# sourceMappingURL=app.js.map