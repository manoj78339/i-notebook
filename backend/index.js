const connectToMongo = require('./db');
const express = require('express')



const app = express()
const port = 5000
var cors =require(`cors`)


app.use(cors())

app.use(express.json())

//available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))





app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})
