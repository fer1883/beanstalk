const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('bienvenido a la home')
})

app.listen(3000, () => {
    console.log('que onda!')
})