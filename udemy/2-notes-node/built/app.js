"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require("yargs");
const notes = require("./notes");
const argv = yargs.argv;
switch (argv._[0]) {
    case 'add':
        notes.add(argv.title, argv.body);
        break;
    case 'list':
        notes.list();
        break;
    case 'read':
        notes.get(argv.title);
        break;
    case 'remove':
        notes.del(argv.title);
        break;
    default:
        console.log('command not recognized');
        break;
}
//# sourceMappingURL=app.js.map