const express = require('express')
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('views', './views')
app.set('view engine', 'ejs')


const productos = []

app.get('/productos',(req,res)=>{
  res.render('index',{productos})
})

app.post('/productos',(req,res)=>{
  productos.push(req.body)
  res.render('index',{productos})
})

app.get('/productosHandle',(req,res)=>{
  res.render('productos',{productos})
})

app.listen(8080,()=>{
  console.log('server listening on port 8080')
})