require('dotenv').config()
console.log(process.env) 
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});