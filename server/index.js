const express = require('express');
const app = express();
// const axios = require('axios');
// const bodyParser = require('body-parser');

const port = 3000;

// app.use(bodyParser);
app.use(express.static(__dirname + '/../dist'));
app.listen(port, ()=>{ console.log('...listening on port 3000')});

app,get('/product',(req, res)=>{
    console.log(req.query)
})

// const db = require('../db/index.js');