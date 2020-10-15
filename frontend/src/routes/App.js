import React from 'react';
import {BrowserRouter, Switch, Router, Route} from 'react-router-dom';
import Paginaprincipal from '../componentes/Casa';
import Iniciosesiongeneral from '../componentes/Iniciodesesiongeneralperfil';
import Iniciosesioncapacitador from '../componentes/Iniciodesesiondecapacitador';
import Iniciosesioncomprador from '../componentes/Iniciodesesioncomprador';
import Iniciosesioncampesino from '../componentes/Iniciodesesioncampesino';
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
import SeleccionarAlgunCurso from '../pages/Seleccionaralguncurso';
import MaterialCursoCampe from '../pages/MaterialCursoCampe';
import MisPedidos from '../pages/MisPedidos';
import RegionesTendencias from '../pages/RegionesTendencias';
import TendenciaRegionAndina from '../pages/TendenciaRegionAndina';
import TendenciaRegionCaribe from '../pages/TendenciasRegionCaribe';
import TendenciaRegionInsular from '../pages/TendenciasRegionInsular'
import TendenciaRegionOrinoquia from '../pages/TendenciasRegionOrinoquia';
import TendenciaRegionPacifica from '../pages/TendenciasRegionPacifica';

import ValoracionesCampesino from '../pages/ValoracionesCampesino';
import Miscompras from '../componentes/Miscompras';
import Mapa from '../componentes/Mapa';
import App1 from '../componentes/App1';
import Transportador from '../componentes/Transportador';
import Quienes from '../componentes/Quienes';
import Registro from '../componentes/Registro';
import Mapademasvendidos from '../componentes/Mapademasvendidos';


export default function App() {
    return (
      <BrowserRouter>
      
      <Switch>
          <Route exact path="/" component={Paginaprincipal} />
          <Route exact path="/iniciosesiongeneral" component={Iniciosesiongeneral} />
          <Route exact path="/iniciosesioncampesino" component={Iniciosesioncampesino} />
          <Route exact path="/iniciosesioncomprador" component={Iniciosesioncomprador} />
          <Route exact path="/iniciosesioncapacitador" component={Iniciosesioncapacitador} />
          <Route exact path="/iniciocampesino" component={Iniciocampe} />
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
          <Route exact path="/misvaloracionescampesino" component={ValoracionesCampesino}/>
          <Route exact path="/productostendencia" component={RegionesTendencias} />
          <Route exact path="/tendenciasregionandina" component={TendenciaRegionAndina}/>
          <Route exact path="/tendenciasregioncaribe" component={TendenciaRegionCaribe}/>
          <Route exact path="/tendenciasregioninsular" component={TendenciaRegionInsular}/>
          <Route exact path="/tendenciasregionorinoquia" component={TendenciaRegionOrinoquia}/>
          <Route exact path="/tendenciasregionpacifica" component={TendenciaRegionPacifica}/>

          <Route path="/comprador" component={Miscompras}/>
          <Route path="/compradormapa" component={Mapa}/>
          <Route path="/app1" component={App1}/>
          <Route path="/transportador" component={Transportador}/>
          <Route path="/registro" component={Registro}/>
          <Route path="/quienes" component={Quienes}/>
          
          
          
          
         


          <Route path="/mapas2" component={Mapademasvendidos}/>
      </Switch>    

      </BrowserRouter>
    );
}