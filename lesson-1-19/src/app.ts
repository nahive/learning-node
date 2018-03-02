import * as http from 'http'
import * as fs from 'fs'

class Ninja {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const server = http.createServer(function (req, res) {
    console.log(`request made from ${req.url}`)
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream(__dirname + '/../src/index.html').pipe(res)
    } else if(req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream(__dirname + '/../src/contact.html').pipe(res)
    } else if(req.url === '/api/ninjas') {
        var ninjas = [new Ninja('ryu', 28), new Ninja('naruto', 30), new Ninja('sakura', 29)]
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(ninjas))
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'})
        fs.createReadStream(__dirname + '/../src/404.html').pipe(res)
    }
})

server.listen(3000, '127.0.0.1')
console.log('server is listening')