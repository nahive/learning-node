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
    try {
        var file = fs.readFileSync('notes.json').toString();
        var arr = JSON.parse(file);
        return arr;
    }
    catch (e) {
        return [];
    }
}
function save() {
    var str = JSON.stringify(notes);
    fs.writeFileSync('notes.json', str);
}
function finddups(title) {
    return notes.filter(note => note.title === title).length > 0;
}
function log(note) {
    console.log('');
    console.log('======= NOTE =======');
    console.log(`Title: ${note.title}`);
    console.log(`Body:  ${note.body}`);
    console.log('');
}
function add(title, body) {
    if (finddups(title)) {
        console.log(`Note with title: ${title} already exists`);
        return;
    }
    var note = new Note(title, body);
    notes.push(note);
    console.log(`Adding note`);
    log(note);
    save();
}
exports.add = add;
function list() {
    if (notes.length == 0) {
        console.log('No notes available');
        return;
    }
    console.log('Listing all notes');
    notes.forEach(note => { log(note); });
    save();
}
exports.list = list;
function get(title) {
    var filtered = notes.filter(note => note.title === title);
    if (filtered.length == 0) {
        console.log('No notes available with specified criteria');
        return;
    }
    console.log(`Listing notes with title: ${title}`);
    filtered.forEach(note => { log(note); });
}
exports.get = get;
function del(title) {
    var filtered = notes.filter(note => note.title === title);
    if (filtered.length == 0) {
        console.log('No notes available with specified criteria');
        return;
    }
    console.log(`Removing notes with title: ${title}`);
    filtered.forEach(note => { console.log('Removing note'); log(note); });
    notes = notes.filter(note => note.title !== title);
    console.log('Result after removal');
    notes.forEach(note => { log(note); });
    save();
}
exports.del = del;
//# sourceMappingURL=notes.js.map