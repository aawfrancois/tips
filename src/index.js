"use strict"

import express from 'express'
import bodyParser from 'body-parser'
require("dotenv/config");

import routes from '../routes'

const app = express()
// Parse incoming request available "req.body"
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', routes)

app.use((err, res, next) => {
    res.json({ err: err.message })
})

app.listen(process.env.PORT, () => console.log(`server run on port ${process.env.PORT}!`))
