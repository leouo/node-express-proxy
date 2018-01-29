const express = require('express')
const app = express()
const proxy = require('http-proxy-middleware')

const proxyOptions = {
  target: 'http://localhost:3003/',
  pathRewrite: {
    '^/upload' : '/api-upload'
  },
  changeOrigin: true
}

app.use(proxy('/upload', proxyOptions))

app.listen(3001, () => console.log('Proxy Server: http://localhost:3001/'))
