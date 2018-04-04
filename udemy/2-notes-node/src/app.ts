
import * as fs from 'fs'
import * as _ from 'lodash'
import * as yargs from 'yargs'

import * as notes from './notes'

const argv = yargs.argv

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
    console.log('command not recognized')
    break
}
