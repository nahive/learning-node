import * as fs from 'fs'
import * as os from 'os'

var user = os.userInfo()

fs.appendFile('greetings.txt', `hello ${user.username}!`, (err) => { 
    if (err) console.log('unable to write file!') 
})