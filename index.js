require('dotenv').config()
const express = require('express')
const usersRouter = require('./src/routes/users.route')
const app = express()
const middlewarelogRequest = require('./src/middleware/logs')

app.use(middlewarelogRequest)
app.use(express.json())

app.use('/users', usersRouter)

const PORT = process.env.PORT || 8888
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`)
})