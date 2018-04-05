"use strict";
// var obj = { name: "szymon" }
// var strObj = JSON.stringify(obj)
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(typeof strObj)
// console.log(strObj)
// var personString = '{"name": "szymon", "age": 25}'
// var person = JSON.parse(personString)
// console.log(typeof person)
// console.log(person)
const fs = require("fs");
var originalNote = {
    title: 'some title',
    body: 'some body'
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);
var noteString = fs.readFileSync('notes.json').toString();
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
//# sourceMappingURL=json.js.map