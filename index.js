const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// motor de plantillas
app.set("view engine", "pug");
app.set("views", __dirname + "/views")

const productos = []

app.post('/productos',(req,res)=>{
  let newProd = req.body
  productos.push(newProd)
  console.log(newProd)
  res.render('index',{productos})
})


app.post('/productos',(req, res) => {
  res.render('index', {productos})
})


app.get('/productosHandle',(req,res)=>{
  res.render('productos', {productos})
})


app.listen(8080,()=>{
  console.log('server is running')
})