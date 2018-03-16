import * as express from 'express'
import * as bodyParser from 'body-parser'

export class TodoController {
    
    private app: express.Express
    private parser = bodyParser.urlencoded({extended: false})

    private data: Item[] = [
        new Item('get milk'),
        new Item('walk dong'),
        new Item('kick some coding ass')
    ]

    constructor(app: express.Express) {
        this.app = app
        this.bind()
    }

    private bind() {
        this.app.get('/todo', (req, res) => this.get(req, res))
        this.app.post('/todo', this.parser, (req, res) => this.post(req, res))
        this.app.delete('/todo/:item', (req, res) => this.delete(req, res))
    }

    private get(req: express.Request, res: express.Response) {
        console.log(this.data)
        res.render('todo', {todos: this.data})
    }

    private post(req: express.Request, res: express.Response) {
        this.data.push(new Item(req.body.value))
        res.json(this.data);
    }

    private delete(req: express.Request, res: express.Response) {
        this.data = this.data.filter(function(todo) {
            return todo.name.replace(/ /g, '-') !== req.params.item
        })
        res.json(this.data)
    }
}

class Item {
    public name: string

    constructor(name: string) {
        this.name = name
    }
}