const express = require('express')
const app = express()


app.get('/get',(req,res)=>{
    res.send('Hello from API');
})

app.listen(3000)

module.exports = app;