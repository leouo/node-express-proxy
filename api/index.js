const express = require('express')
const app = express()
const multer = require('multer')

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

app.use(upload.any())

app.post('/', (req, res) => {
    console.log(req)
    res.send('I recive the proxy\'s request')
})

app.listen(3003, () => console.log('API Server: http://localhost:3003/'))