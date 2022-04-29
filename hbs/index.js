const express = require('express')

const app = express()

const {engine} = require('express-handlebars')

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.set('view engine', 'hbs')
app.set('views','./views')

app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout:'main.hbs',
  partialsDir: __dirname+'/views/partials'
}))

const productos = []
app.get('/productos', (req, res) => {
  res.render('index',{productos})
})

app.post('/productos',(req,res)=>{
  let newProd = req.body
  productos.push(newProd)
  console.log(newProd)
  res.render('index',{productos})
})
app.get('/productosHandler',(req,res)=>{
  res.render('tabla',{productos})
})

app.listen(8080, () => {
  console.log('Listening on port 8080')
})