require('dotenv').config()
const express = require('express')
const usersRouter = require('./src/routes/users.route')
const app = express()
const middlewarelogRequest = require('./src/middleware/logs')
const upload = require('./src/middleware/multer')

app.use(middlewarelogRequest)
app.use(express.json())
app.use('/assets',express.static('public/images'))

app.use('/users', usersRouter)
app.use('/upload', upload.single('photo'), (req, res) => {
    res.json({
        message: 'Upload success'
    })
})

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

const PORT = process.env.PORT || 8888
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`)
})