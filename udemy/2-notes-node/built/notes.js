"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class Note {
    constructor(title, body) {
        this.title = title;
        this.body = body;
    }
}
var notes = fetch();
function fetch() {
    var file = fs.readFileSync('notes.json').toString();
    var arr = JSON.parse(file);
    return arr;
}
function save() {
    var str = JSON.stringify(notes);
    fs.writeFileSync('notes.json', str);
}
function add(title, body) {
    console.log(`adding note with title: ${title} and body: ${body}`);
    notes.push(new Note(title, body));
    save();
}
exports.add = add;
function list() {
    if (notes.length == 0) {
        console.log('no notes available');
        return;
    }
    console.log('listing all notes');
    notes.forEach(note => { console.log(note); });
    save();
}
exports.list = list;
function get(title) {
    var filtered = notes.filter(note => note.title === title);
    if (filtered.length == 0) {
        console.log('no notes available with specified criteria');
        return;
    }
    console.log(`listing notes with title: ${title}`);
    filtered.forEach(note => { console.log(note); });
}
exports.get = get;
function del(title) {
    var filtered = notes.filter(note => note.title === title);
    if (filtered.length == 0) {
        console.log('no notes available with specified criteria');
        return;
    }
    console.log(`removing notes with title: ${title}`);
    filtered.forEach(note => { console.log('removing note', note); });
    notes = notes.filter(note => note.title !== title);
    console.log('result after removal');
    notes.forEach(note => { console.log(note); });
    save();
}
exports.del = del;
//# sourceMappingURL=notes.js.map