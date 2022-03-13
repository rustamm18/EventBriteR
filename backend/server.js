const express = require('express')
const events = require('./data/events')

const app = express()

app.get('/api/events', (req, res) => {
    res.json(events)
})

app.listen(5000, console.log('Server is running on port 5000'));