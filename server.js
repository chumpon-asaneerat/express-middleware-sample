const express = require('express')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const app = new express();

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

app.get('/', (req, res) => {
    //console.log(req.body)
    //console.log(req.cookies)
    res.send('received request..')
})

app.listen(3000, () => {
    console.log('listen on port: 3000');
})
