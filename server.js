const express = require('express')
const app = express()


app.get('/get',(req,res)=>{
    res.send('Hello form areeb');
})

app.listen(3000)

module.exports = app;