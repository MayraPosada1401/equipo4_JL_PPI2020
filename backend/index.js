const express = require('express');
const app = express();

const routes = require('./routes/routes');
const cursos = require('./routes/cursos');
const productos = require('./routes/productos');
const chat = require('./routes/chat');
const datoscompra = require('./routes/datoscompra');
const factura = require('./routes/facturaypedido.js')
const precio_acuerdo = require('./routes/preciodeacuerdo.js');

// Ajustes
app.set('port',4000);
app.set('json spaces',2);
require('dotenv').config

// Middlewares
app.use(express.json());

//Routes
app.use('/api',routes);
app.use('/api',cursos);
app.use('/api',productos);
app.use('/api',chat);
app.use('/api',datoscompra);
app.use('/api',factura);
app.use('/api',precio_acuerdo);


app.get('/',(req,res)=>{
  res.send('Backend Equipo EcoAgro')
});


// Ajustes del servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
}); 