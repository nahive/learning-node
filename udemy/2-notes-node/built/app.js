"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const os = require("os");
var user = os.userInfo();
fs.appendFile('greetings.txt', `hello ${user.username}!`, (err) => {
    if (err)
        console.log('unable to write file!');
});
//# sourceMappingURL=app.js.map