import * as fs from 'fs'

class Note {
    public title: string
    private body: string

    constructor(title: string, body: string) {
        this.title = title
        this.body = body
    }
}

var notes: Note[] = fetch()

function fetch(): Note[] {
    var file = fs.readFileSync('notes.json').toString()
    var arr = JSON.parse(file) as Note[]
    return arr
}

function save() {
    var str = JSON.stringify(notes)
    fs.writeFileSync('notes.json', str)
}

export function add(title: string, body: string) {
    console.log(`adding note with title: ${title} and body: ${body}`)
    notes.push(new Note(title, body))
    
    save()
}

export function list() {
    if (notes.length == 0) {
        console.log('no notes available')
        return 
    }

    console.log('listing all notes')
    notes.forEach(note => { console.log(note) })

    save()
}

export function get(title: string) {
    var filtered = notes.filter(note => note.title === title)

    if (filtered.length == 0) {
        console.log('no notes available with specified criteria')
        return 
    }

    console.log(`listing notes with title: ${title}`)
    filtered.forEach(note => { console.log(note) })
}

export function del(title: string) {
    var filtered = notes.filter(note => note.title === title)

    if (filtered.length == 0) {
        console.log('no notes available with specified criteria')
        return 
    }

    console.log(`removing notes with title: ${title}`)
    filtered.forEach(note => { console.log('removing note', note) })

    notes = notes.filter(note => note.title !== title)

    console.log('result after removal')
    notes.forEach(note => { console.log(note) })

    save()
}
