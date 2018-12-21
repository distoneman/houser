const express = require('express')
const massive = require('massive')
require('dotenv').config()
const ctrl = require('./controller.js')
const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())

app.get('/api/houses', ctrl.getAll)
// app.post('/api/product', pc.createItem)

massive(CONNECTION_STRING).then(connection => {
    app.set('db', connection)
}).catch(err => console.log(err))

app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`))