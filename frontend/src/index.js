import React from 'react';
import ReactDOM from 'react-dom';
import Iniciocampe from './pages/Iniciocampe';
import Perfilcampe from './pages/Perfilcampe';
import Aprendecampe from './pages/Aprendecampe';
import ActualizarDatosCampe from './pages/ActualizarDatosCampe'
import InterfazSubirProducto from './pages/Subirproducto'
import Ofertascampe from './pages/Ofertascampe'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
  <React.StrictMode>
    <Ofertascampe/>
  </React.StrictMode>,
  document.getElementById('root')
);

