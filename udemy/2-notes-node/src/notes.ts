
class Note {
    public title: string
    private body: string

    constructor(title: string, body: string) {
        this.title = title
        this.body = body
    }
}

var notes: Note[] = [new Note('test1', 'body1'), new Note('test2', 'body2'), new Note('test3', 'body3'),
                     new Note('test4', 'body4'), new Note('dup', 'body5'), new Note('dup', 'body6')]

export function add(title: string, body: string) {
    console.log(`adding note with title: ${title} and body: ${body}`)
    notes.push(new Note(title, body))
}

export function list() {
    if (notes.length == 0) {
        console.log('no notes available')
        return 
    }

    console.log('listing all notes')
    notes.forEach(note => { console.log(note) })
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
}
