import React from 'react';
import ReactDOM from 'react-dom';
import Iniciocampe from './pages/Iniciocampe';
import Perfilcampe from './pages/Perfilcampe';
import Aprendecampe from './pages/Aprendecampe';
import ActualizarDatosCampe from './pages/ActualizarDatosCampe'
import InterfazSubirProducto from './pages/Subirproducto'
import Ofertascampe from './pages/Ofertascampe'
import AppKarol from './componentes/AppKarol';
import App1Karol from './componentes/App1Karol';
import Mapa from './Componentes/Mapa';
import Miscompras from './Componentes/Miscompras';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Subirproducto from './pages/Subirproducto';

ReactDOM.render(
  <React.StrictMode>
    <InterfazSubirProducto/>
  </React.StrictMode>,
  document.getElementById('root')
);

