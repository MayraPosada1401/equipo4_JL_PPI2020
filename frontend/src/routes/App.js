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
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Casa from '../componentes/Casa';
import Miscompras from '../componentes/Miscompras';
import Mapa from '../componentes/Mapa';
import App1 from '../componentes/App1';
import Transportador from '../componentes/Transportador';
import Quienes from '../componentes/Quienes';
import Registro from '../componentes/Registro';
import Regionestenden from '../componentes/Regionestenden';
import Regiones2 from '../componentes/Regiones2';
import Regiones4 from '../componentes/Regiones4';
import Regiones3 from '../componentes/Regiones3';
import Regiones5 from '../componentes/Regiones5';
import Regiones6 from '../componentes/Regiones6';
import Mapademasvendidos from '../componentes/Mapademasvendidos';
import Misvaloraciones from '../componentes/Misvaloraciones';
import Inciciarsesioncom from '../componentes/Inciciarsesioncom';

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
          <Route exact path="/" component={Casa}/>
    <Route  path="/comprador" component={Miscompras}/>
    <Route  path="/compradormapa" component={Mapa}/>
    <Route path="/app1" component={App1}/>
    <Route path="/transportador" component={Transportador}/>
    <Route path="/registro" component={Registro}/>
    <Route path="/quienes" component={Quienes}/>
    <Route path="/regionestenden" component={Regionestenden}/>
    <Route path="/regiones2" component={Regiones2}/>
    <Route path="/regiones3" component={Regiones3}/>
    <Route path="/regiones4" component={Regiones4}/>
    <Route path="/regiones5" component={Regiones5}/>
    <Route path="/regiones6" component={Regiones6}/>
    <Route path="/mapas2" component={Mapademasvendidos}/>
    <Route path="/conocenos" component={Misvaloraciones}/>
    <Route path="/iniciosesion" component={Inciciarsesioncom}/>

      </Switch>    

      </BrowserRouter>
    );
}