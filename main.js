const express = require('express')
const app = express()


app.use(express.static("Public"))





const port = 5000
app.listen(port, ()=>{
    console.log (`server running on port ${port}`)
})