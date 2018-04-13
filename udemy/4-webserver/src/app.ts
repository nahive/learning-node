import * as express from 'express'
import * as hbs from 'hbs'
import * as fs from 'fs'

const port = process.env.PORT || 3000

let app = express()


app.set('view engine', 'hbs')

app.use((req, res, next) => {
    let now = new Date().toString()
    let log = `${now}: ${req.method} ${req.url}`

    console.log(log)
    fs.appendFile('server.log', log + '\n', (err) => { })
    next()
})

// app.use((req, res, next) => {
//     res.render('maintenence.hbs')
// })

app.use(express.static('./public'))

hbs.registerPartials('./views/partials')

hbs.registerHelper('getCurrentYear', () => { return new Date().getFullYear() })
hbs.registerHelper('screamIt', (text: string) => {
    return text.toUpperCase()
})

app.get('/', (req, res) => {
    res.render('home.hbs', {
        title: 'Home Page',
        welcomemsg: 'Welcome to my website',
    })
})

app.get('/projects', (req, res) => {
    res.render('projects.hbs', {
        title: 'Projects Page',
    })
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title: 'About Page',
    })
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})