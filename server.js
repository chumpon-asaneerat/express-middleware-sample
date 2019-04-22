const express = require('express')
const helmet = require('helmet')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const Joi = require('joi') // the object validation class.

const app = new express();

app.use(logger('dev'))
app.use(helmet())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser())

// new custom logger middleware
function mylogger(req, res, next) {
    let { method, originalUrl, protocol } = req
    console.log(`${method} => ${protocol}://${req.get('host')}${originalUrl}`)
    next()
}

app.use(mylogger) // use custom logger middleware

// various routes.
app.get('/', (req, res) => { res.status(200).send('Welcome to test page.'); })
app.get('/about', (req, res) => { res.status(200).send('Welcome to about page.'); })
app.get('/contact', (req, res) => { res.status(200).send('Welcome to contact page.'); })
app.get('/protected/api', (req, res) => { res.status(200).send('Welcome to api page.'); })
app.get('/my/profile', (req, res) => { res.status(200).send('Welcome to profile page.'); })

const server = app.listen(3000, () => {
    console.log('listen on port: 3000');
})
