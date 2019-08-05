require('newrelic')
const express = require('express');
const app = express();
const { getItemById } = require('../dbProduction/index')
const cors = require('cors')

const port = 3000;

app.use(cors())

app.use('/:id', express.static(__dirname + '/../dist'));

app.get('/products/:id', (req, res) => {
    getItemById(req.params.id, (err, data) => {
        if (err) return res.status(500).send(err)
        const { rows } = data
        const itemInfo = rows[0]
        const url = [ rows[0].url, rows[1].url, rows[2].url, rows[3].url, rows[4].url ]
        itemInfo.url = url
        res.status(200).send(itemInfo)
    })
})

app.listen(port, () => { console.log(`...listening on port ${port}`) });
