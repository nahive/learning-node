import * as express from 'express'
import * as hbs from 'hbs'

var app = express()

app.set('view engine', 'hbs')
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.render('home.hbs', {
        title: 'Home Page',
        welcomemsg: 'Welcome to my website',
        year: new Date().getFullYear()
    })
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title: 'About Page',
        year: new Date().getFullYear()
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})