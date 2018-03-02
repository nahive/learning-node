import * as express from 'express'
import * as http from 'http'
import * as bodyParser from 'body-parser'

const app = express()
const parser = bodyParser.urlencoded({extended: false})

app.set('view engine', 'ejs')
app.use('/assets', express.static('assets'))

app.get('/', function(req, res) {
    res.render('index')
})

app.get('/contact', function(req, res) {
    res.render('contact', { qs: req.query } )
})

app.post('/contact', parser, function(req, res) {
    console.log(req.body)
    res.render('contact-success', { data: req.body })
})

app.get('/profile/:name', function(req, res) {
    const data = { age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing'] }
    res.render('profile', { person: req.params.name, data: data })
})

app.listen(3000)