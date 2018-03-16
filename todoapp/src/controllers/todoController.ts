import * as express from 'express'

export class TodoController {
    
    private app: express.Express

    constructor(app: express.Express) {
        this.app = app
        this.bind()
    }

    private bind() {
        this.app.get('/todo', this.get)
        this.app.post('/todo', this.post)
        this.app.delete('/todo:item', this.delete)
    }

    private get(req: express.Request, res: express.Response) {
        res.render('todo')
    }

    private post(req: express.Request, res: express.Response) {
        // TODO
    }

    private delete(req: express.Request, res: express.Response) {
        // TODO
    }
}