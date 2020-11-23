import React from 'react';
import {BrowserRouter, Switch, Router, Route} from 'react-router-dom';
import Paginaprincipal from '../componentes/Casa';
import Iniciosesiongeneral from '../componentes/Iniciodesesiongeneralperfil';
import Iniciosesioncapacitador from '../componentes/Iniciodesesiondecapacitador';
import Iniciosesioncomprador from '../componentes/Iniciodesesioncomprador';
import Iniciosesioncampesino from '../componentes/Iniciodesesioncampesino';
import Iniciocampe from '../pages/Iniciocampe';
import Aprendecampe from '../pages/Aprendecampe';
import Conexionescampesino from '../pages/Conexionescampesino';
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
import MaterialCursoCampe from '../pages/MaterialCursoCampe';
import MisPedidos from '../pages/MisPedidos';
import RegionesTendencias from '../pages/RegionesTendencias';
import TendenciaRegionAndina from '../pages/TendenciaRegionAndina';
import TendenciaRegionCaribe from '../pages/TendenciasRegionCaribe';
import TendenciaRegionInsular from '../pages/TendenciasRegionInsular'
import TendenciaRegionOrinoquia from '../pages/TendenciasRegionOrinoquia';
import TendenciaRegionPacifica from '../pages/TendenciasRegionPacifica';
import Regionesdemapacom from '../componentes/Regionesdemapacom';
import ValoracionesCampesino from '../pages/ValoracionesCampesino';
import Miscompras from '../componentes/Miscompras';
import Mapa from '../componentes/Mapa';
import App1 from '../componentes/App1';
import Transportador from '../componentes/Transportador';
import Quienes from '../componentes/Quienes';
import Registro from '../componentes/Registro';
import Actualizarpaginadecomprador from '../componentes/Actualizarpaginadecomprador'
import Perfildecomprador from '../componentes/Perfildecomprador';
import Menudecomprador from '../componentes/Menudecomprador';
import Chatdecomorador from '../componentes/chatclickcomprador';
import Chatdecomprador1 from '../componentes/Chatdecompradro';
import Chatdecomprador3 from '../componentes/Chat2decomprador';
import Comprasdelcomprador from '../componentes/Comprasdelcomprador';
import Actualizaciondedatos from '../componentes/Actualizarpaginadecomprador';
import Quienescomprador from '../componentes/Quienescomprador';
import Regionesparaconocer from '../componentes/Regionestenden';
import Regionestenden from '../componentes/Regionestenden';
import Regiones2 from '../componentes/Regiones2';
import Regiones4 from '../componentes/Regiones4';
import Regiones3 from '../componentes/Regiones3';
import Regiones5 from '../componentes/Regiones5';
import Regiones6 from '../componentes/Regiones6';
import chat2comoprador from '../componentes/Chat2decomprador';
import Paginadecap from '../pages/Paginadecapacitador';
import perfilcapa from '../pages/Perfilcapa';
import formulariocapa from '../pages/formulariocapa';
import forolistocapa from '../pages/forolistocapa';
import conexionescapa from '../pages/conexionescapa';
import calendariocapa from '../pages/calendariocapa';
import cursocapa from '../pages/cursocapa';
import Quienescapa from '../componentes/Quienescapa';


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
          <Route exact path="/conexionescampesino" component={Conexionescampesino} />
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
          <Route path="/regionesdemapacom" component={Regionesdemapacom}/>
          <Route path="/actualizarpaginadecomprador" component={Actualizarpaginadecomprador}/>
          <Route path="/perfildecomprador" component={Perfildecomprador}/>  
          <Route path="/menudecomprador" component={Menudecomprador}/>  
          <Route path="/chatdecompradro" component={Chatdecomprador1}/>
          <Route path="/comprasdelcomprador" component={Comprasdelcomprador}/>
          <Route path="/actualizacióndedatos" component={Actualizaciondedatos}/>
          <Route path="/quienescomprador" component={Quienescomprador}/>
          <Route path="/regionesparaconocer" component={Regionesparaconocer}/>
          <Route path="/regionestenden" component={Regionestenden}/>
          <Route path="/regiones2" component={Regiones2}/>
          <Route path="/regiones3" component={Regiones3}/>
          <Route path="/regiones4" component={Regiones4}/>
          <Route path="/regiones5" component={Regiones5}/>
          <Route path="/regiones6" component={Regiones6}/>
          <Route path="/chatdecomorador" component={Chatdecomorador}/>
          <Route path="/chatcomoprador" component={chat2comoprador}/>
          <Route path="/paginadecap" component={Paginadecap}/>
          <Route path="/perfilcapa" component={perfilcapa}/>
          <Route path="/formulariocapa" component={formulariocapa}/>
          <Route path="/conexionescapa" component={conexionescapa}/>
          <Route path="/forolistocapa" component={forolistocapa}/>
          <Route path="/cursocapa" component={cursocapa}/>
          <Route path="/calendariocapa" component={calendariocapa}/>
          <Route path="/quienescapa" component={Quienescapa}/>
      
     
      </Switch>    

      </BrowserRouter>
    );
}