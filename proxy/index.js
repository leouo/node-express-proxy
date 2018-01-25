const express = require('express')
const app = express()
const multer = require('multer')
const request = require('request')
const proxy = require('express-http-proxy')

// Multer config
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

// Middlewares
app.use(upload.single('file'))
app.use('/upload', (req, res, next) => {
    let formData = {
        name: req.file.fieldname,
        fixedPriceListFile: {
            value: req.file.buffer,
            options: {
            filename: req.file.originalname,
            contentType: req.file.mimetype
            }
        }
    }

    req.pipe(request.post({
        url: 'http://localhost:3003/',
        formData
    }), { end: false })
    next()
})

app.use('/upload', proxy('http://localhost:3003/'))

app.listen(3001, () => console.log('Proxy Server: http://localhost:3001/'))