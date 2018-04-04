"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Note {
    constructor(title, body) {
        this.title = title;
        this.body = body;
    }
}
var notes = [new Note('test1', 'body1'), new Note('test2', 'body2'), new Note('test3', 'body3'),
    new Note('test4', 'body4'), new Note('dup', 'body5'), new Note('dup', 'body6')];
function add(title, body) {
    console.log(`adding note with title: ${title} and body: ${body}`);
    notes.push(new Note(title, body));
}
exports.add = add;
function list() {
    if (notes.length == 0) {
        console.log('no notes available');
        return;
    }
    console.log('listing all notes');
    notes.forEach(note => { console.log(note); });
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
}
exports.del = del;
//# sourceMappingURL=notes.js.map