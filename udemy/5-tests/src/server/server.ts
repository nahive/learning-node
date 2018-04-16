import * as express from 'express'

export let app = express()

app.get('/', (req, res) => {
    res.status(404).send( {
        error: 'Page not found',
        name: 'App v1.0'
    })
})

app.get('/users', (req, res) => {
    res.send([{name: 'Szymon', age: 26}, {name: 'Gracjana', age: 16}])
})

app.listen(3000)