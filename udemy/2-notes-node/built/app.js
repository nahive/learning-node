"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var command = process.argv[2];
var param = process.argv[3];
console.log(`command: ${command}, param: ${param}`);
switch (command) {
    case 'add':
        console.log('adding new note');
        break;
    case 'list':
        console.log('listing all notes');
        break;
    case 'read':
        console.log('read note');
        break;
    case 'remove':
        console.log('remove note');
        break;
    default:
        console.log('command not recognized');
        break;
}
//# sourceMappingURL=app.js.map