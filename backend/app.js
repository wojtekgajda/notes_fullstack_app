const express = require('express');
const config = require("./config");
const router = require('./routes/api.js');
const bodyParser = require('body-parser')

const app = express()
const { createProxyMiddleware } = require('http-proxy-middleware');

// db
require('./db/mongoose')

// parser
app.use(bodyParser.json())

//cors fix
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

//routes
app.use('/api/', router)

router.get('/', (req, res)=>{
    res.send('hello world')
})


app.listen(config.port, ()=>{
    console.log('Server running on port 3001')
})