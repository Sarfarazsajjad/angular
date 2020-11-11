const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')

app.use(cors())

app.get('/getUser', (req, res) => {
    let obj = {
        name: "ABC",
        accountid: "123"
    }
  res.send(obj);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})