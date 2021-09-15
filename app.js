const express = require('express')
const app = express()

const port = process.env.port || 3000
app.get('/', (req, res) => {
    res.send('bienvenido a la home')
})

app.listen(port, () => {
    console.log('que onda!')
})