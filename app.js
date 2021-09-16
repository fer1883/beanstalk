const express = require('express')
const app = express()

const port =  8080

if (!process.env.termo){
    process.env.termo = 'Cristina'
}

app.get('/', (req, res) => {
    res.send(' Todos Cabezones ' + process.env.termo)
})

app.listen(port, () => {
    console.log('que onda!')
})