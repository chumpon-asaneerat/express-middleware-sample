const express = require('express')
const helmet = require('helmet')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const Joi = require('joi') // the object validation class.

const app = new express();

app.use(logger('dev'))
app.use(helmet());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser())

app.get('/', (req, res) => {
    res.status(200).send('Welcome to test page.');
})

const server = app.listen(3000, () => {
    console.log('listen on port: 3000');
})
