import React from 'react';
import {BrowserRouter, Switch, Router, Route} from 'react-router-dom';
import Iniciocampe from '../pages/Iniciocampe';
import Aprendecampe from '../pages/Aprendecampe';
import Perfilcampe from '../pages/Perfilcampe';
import ActualizarDatosCampe from '../pages/ActualizarDatosCampe';
import Subirproducto from '../pages/Subirproducto';
import Ofertascampe from '../pages/Ofertascampe';
import Cursoscampe from '../pages/Cursoscampe';
import ColoAprende from '../pages/ColoAprende';
import ChatPerfil from '../pages/PerfilChat';
import ChatPrincipalCampe from '../pages/ChatPrincipal';
import ChatSecundarioCampe from '../pages/Chatsecundario';
import ElegirCursoCampe from '../pages/Elegircurso';
import SeleccionarAlgunCurso from '../pages/seleccionaralguncurso';
import MaterialCursoCampe from '../pages/MaterialCursoCampe';
import MisPedidos from '../pages/MisPedidos';

export default function App() {
    return (
      <BrowserRouter>
      
      <Switch>
          <Route exact path="/" component={Iniciocampe} />
          <Route exact path="/aprendecampesino" component={Aprendecampe} />
          <Route exact path="/perfilcampesino" component={Perfilcampe} />
          <Route exact path="/actualizarcampesino" component={ActualizarDatosCampe} />
          <Route exact path="/subirproducto" component={Subirproducto} />
          <Route exact path="/ofertas" component={Ofertascampe} />
          <Route exact path="/cursos" component={Cursoscampe} />
          <Route exact path="/aprendedecolombia" component={ColoAprende} />
          <Route exact path="/chat-Reseña" component={ChatPerfil} />
          <Route exact path="/chatcampesino" component={ChatPrincipalCampe} />
          <Route exact path="/chatprivadocampesino" component={ChatSecundarioCampe} />
          <Route exact path="/elegircurso" component={ElegirCursoCampe} />
          <Route exact path="/seleccionarcurso" component={SeleccionarAlgunCurso} />
          <Route exact path="/materialcurso" component={MaterialCursoCampe} />
          <Route exact path="/mispedidos" component={MisPedidos} />
      </Switch>    

      </BrowserRouter>
    );
}