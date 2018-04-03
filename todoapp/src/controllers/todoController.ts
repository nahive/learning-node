import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as mongoose from 'mongoose'

export class TodoController {
    
    private app: express.Express
    private parser = bodyParser.urlencoded({extended: false})
    private dburl = 'mongodb://test:test@ds062178.mlab.com:62178/nahive_tododb'

    constructor(app: express.Express) {
        this.app = app
        this.bind()
        this.database()
    }

    private bind() {
        this.app.get('/todo', (req, res) => this.get(req, res))
        this.app.post('/todo', this.parser, (req, res) => this.post(req, res))
        this.app.delete('/todo/:item', (req, res) => this.delete(req, res))
    }

    private database() {
        // connect to database
        mongoose.connect(this.dburl)
    }

    private get(req: express.Request, res: express.Response) {
        // getting data from mongo and pass to view
        Todo.find({}, function(err, data) {
            if (err) throw err
            res.render('todo', {todos: data})
        })
    }

    private post(req: express.Request, res: express.Response) {
        // get data from view & add to mongo)
        new Item(req.body.value).model().save(function(err, data) {
            if (err) throw err
            res.json(data);
        })
    }

    private delete(req: express.Request, res: express.Response) {
        // delete requested item from mongo
        Todo.find({name: req.params.item.replace(/\-/g, " ")}).remove(function(err, data) {
            if (err) throw err
            res.json(data)
        })
    }
}

// schema for db
var Todo = mongoose.model('Todo', new mongoose.Schema({ name: String }))

class Item {
    public name: string

    public model(): mongoose.Document {
        return new Todo({name: this.name})
    }

    constructor(name: string) {
        this.name = name
    }
}