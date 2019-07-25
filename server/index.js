const express = require('express');
const app = express();

const port = 3000;

app.use('/:id', express.static(__dirname + '/../dist'));

app.get('/products/:id', (req, res) => {
    res.send(req.params)
})

app.listen(port, () => { console.log('...listening on port 3000') });
