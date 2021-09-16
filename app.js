const express = require('express')
const app = express()

const port =  8080

app.get('/', (req, res) => {
    res.send(' Todos TERMO ' + process.env.termo)
})

app.listen(port, () => {
    console.log('que onda!')
})