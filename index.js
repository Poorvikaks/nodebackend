require('dotenv').config()
console.log(process.env) 
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('poorvikaks')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please login at backend first project </h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>coding set </h2>')
})
app.listen(process.env.Port, () => {
  console.log(`Example app listening on port ${port}`)
})