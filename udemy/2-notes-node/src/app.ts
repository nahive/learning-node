
import * as fs from 'fs'
import * as _ from 'lodash'
import * as yargs from 'yargs'

import * as notes from './notes'

const argv = yargs
    .command('add', 'Add a new note', {
        title: {
            describe: 'Title of note',
            demand: true,
            alias: 't'
        },
        body: {
            describe: 'Body of the note',
            demand: true,
            alias: 'b'
        }
    })
    .command('list', 'Listing all notes')
    .command('read', 'Read note with specified title', {
        title: {
            describe: 'Title of note',
            demand: true,
            alias: 't'
        }
    })
    .command('remove', 'Remove note with specified title', {
        title: {
            describe: 'Title of note',
            demand: true,
            alias: 't'
        }
    })
    .help()
    .argv

switch (argv._[0]) {
    case 'add':
    notes.add(argv.title, argv.body)
    break
    case 'list':
    notes.list()
    break
    case 'read':
    notes.get(argv.title)
    break
    case 'remove':
    notes.del(argv.title)
    break
    default:
    console.log('Command not recognized')
    break
}
