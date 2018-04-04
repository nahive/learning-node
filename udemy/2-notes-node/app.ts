console.log('starting app.ts')

import * as fs from 'fs'
import * as os from 'os'
import * as notes from './notes'

var res = notes.addNote()
console.log(res)

var sum = notes.add(1, 2)
console.log(sum)

var user = os.userInfo()

fs.appendFile('greetings.txt', `hello ${user.username}! Your age is ${notes.add(20, 5)}.`, (err) => { 
    if (err) console.log('unable to write file!') 
})