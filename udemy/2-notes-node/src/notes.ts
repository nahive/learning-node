import * as fs from 'fs'

class Note {
    public title: string
    public body: string

    constructor(title: string, body: string) {
        this.title = title
        this.body = body
    }
}

var notes: Note[] = fetch()

function fetch(): Note[] {
    try {
        var file = fs.readFileSync('notes.json').toString()
        var arr = JSON.parse(file) as Note[]
        return arr
    } catch (e) {
        return []     
    }
}

function save() {
    var str = JSON.stringify(notes)
    fs.writeFileSync('notes.json', str)
}

function finddups(title: string): boolean {
    return notes.filter(note => note.title === title).length > 0
}

function log(note: Note) {
    console.log('')
    console.log('======= NOTE =======')
    console.log(`Title: ${note.title}`)
    console.log(`Body:  ${note.body}`)
    console.log('')
}

export function add(title: string, body: string) {
    if (finddups(title)) {
        console.log(`Note with title: ${title} already exists`)
        return
    }

    var note = new Note(title, body)
    notes.push(note)
    console.log(`Adding note`)
    log(note)

    save()
}

export function list() {
    if (notes.length == 0) {
        console.log('No notes available')
        return 
    }

    console.log('Listing all notes')
    notes.forEach(note => { log(note) })

    save()
}

export function get(title: string) {
    var filtered = notes.filter(note => note.title === title)

    if (filtered.length == 0) {
        console.log('No notes available with specified criteria')
        return 
    }

    console.log(`Listing notes with title: ${title}`)
    filtered.forEach(note => { log(note) })
}

export function del(title: string) {
    var filtered = notes.filter(note => note.title === title)

    if (filtered.length == 0) {
        console.log('No notes available with specified criteria')
        return 
    }

    console.log(`Removing notes with title: ${title}`)
    filtered.forEach(note => { console.log('Removing note'); log(note) })

    notes = notes.filter(note => note.title !== title)

    console.log('Result after removal')
    notes.forEach(note => { log(note) })

    save()
}
