const path = require('path')
const express = require('express')
const app = express()

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname + '/form.html'));
})

app.listen(3000, () => console.log('APP Server: http://localhost:3000/form'))