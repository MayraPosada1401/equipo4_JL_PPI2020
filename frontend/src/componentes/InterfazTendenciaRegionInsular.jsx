import React from 'react';
import '../Estilos/Regionestenden.css';
import { Link } from 'react-router-dom';
import FRUTA1 from '../Imagenes/Fruta1.png';
import FRUTA2 from '../Imagenes/Fruta2.png';

export default function InterfazTendenciaRegionInsular() {

    return (
      <div className="App fonditodefrutas123">
   
      <br/>
      <br/>
      <div className=" fonditodefrutas123">
        <h1 className="shadow p-3 mb-5 bg-whitecolorcitoprin rounded Tituloenpaginaprincipal tituloinicial-paginatendenciaregiones">Más Vendidos</h1>
        <div className="Contenerdorreactivo3">
        <h2 className="titulo1-targetaenseñanza-tendencia titulosregionesenlastendencias2 Tituloinsular-tendencia-margen coloricsular">INSULAR</h2>
        <a type="button" class="btn-header espaciodelboton-regiontendencia">
          <Link to="/productostendencia">
            <button type="button"className="Radiobotonmasvendido1 rounded-circle tipodeletraboton-tendenciaderegiones2 btn btn-info">Regresar</button>
            </Link>
        </a>
        </div>

        <div className="Contenedorparatodacarddes2 contenedordelatargetadelosproductos-margin-tendencias">
          <div className="Regionpequeñadescripcion1 letradetendenciaregióncaribe-info">La región insular de Colombia es el conjunto de las islas, cayos e islotes alejadas de las costas continentales, como son el Archipiélago de San Andrés y Providencia en el mar Caribe y las islas Malpelo y Gorgona en el océano Pacífico. En ella no se cuentan las islas fluviales ni lacustres.</div>
          <a>
            <button type="button" className="unicoestilodespleg  botondelastendencias-visualizarregion Radiobotonmasvendido5 rounded-circle tipodeletraboton-tendenciaderegiones" data-toggle="modal" data-target="#staticBackdrop">Tendencias</button>
          </a>
          <div class="modal fade " id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div className="modal-content contenedordelatargetadelosproductos-margin-tendencias">
              <div className="modal-header">
                <h5 className="modal-title titulodelatargetadespliegueproductos-tendencias" id="staticBackdropLabel">Tendencias</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <p className="justificarcontenidocard-productotendencia">La región más rica en todo el aspecto de fauna y flora, tiene los frutos más exoticos y únicos de todo nuestro pais de sabores inigualables y de una naturalidad unica.</p>
              <div class="card Cardparalasfrutas" >
                <img src={FRUTA1} class="card-img-top" alt="Responsive image" />
                <div class="card-body">
                  <h5 class="card-title pitayatituloeodrfhbjf">Pitaya</h5>
                  <p class="card-text"></p>
                </div>
              </div>
              <div class="card Cardparalasfrutas" >
                <img src={FRUTA2} class="card-img-top" alt="Responsive image" />
                <div class="card-body">
                  <h5 class="card-title pitayatituloeodrfhbjf">Durazno</h5>
                  <p class="card-text"></p>
                </div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn " data-dismiss="modal">Cerrar</button>
                <Link to="/mapas2"><button type="button" class="btn btn-primary">Más</button></Link>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );}  