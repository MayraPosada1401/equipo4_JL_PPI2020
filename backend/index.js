const express = require('express');
const path = require('path');
const multer = require('multer');
const { uuid } = require('uuidv4');

//Conexión de frontend a backend
const cors = require('cors');

//Inicializar express
const app = express();

const routes = require('./routes/routes');
const cursos = require('./routes/cursos');
const productos = require('./routes/productos');
const chat = require('./routes/chat');
const datoscompra = require('./routes/datoscompra');
const factura = require('./routes/facturaypedido.js')
const precio_acuerdo = require('./routes/preciodeacuerdo.js');

// Ajustes
app.set('port', process.env.PORT || 4001);
app.set('json spaces',2);
require('dotenv').config

// Middlewares
app.use(express.json());
//MIDDLEWARE - MULTER
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/uploads'),
  filename: (req, file, cb) =>{
      cb(null, uuid() + path.extname(file.originalname));
  }
});
app.use(multer({storage}).single('image'));

//Uso de cors: La ruta - url para conexión del frontend
app.use(cors({origin: '*'}));

//Routes
app.use('/api',routes);
app.use('/api',cursos);
app.use('/api',productos);
app.use('/api',chat);
app.use('/api',datoscompra);
app.use('/api',factura);
app.use('/api',precio_acuerdo);
app.use(require('./routes/images'));


app.get('/',(req,res)=>{
  res.send('Backend Equipo EcoAgro')
});


// Ajustes del servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
}); 