import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as todoController from './controllers/todoController'

const app = express()

// set template engine
app.set('view engine', 'ejs')
app.set('views', 'src/views')

// set static files
app.use(express.static('./public'))

// fire controllers
new todoController.TodoController(app)

// listen on port
app.listen(3000)
console.log('listening on port 3000')


function test(test: any) {
    console.log(test)
}

test('abc')
test(null)