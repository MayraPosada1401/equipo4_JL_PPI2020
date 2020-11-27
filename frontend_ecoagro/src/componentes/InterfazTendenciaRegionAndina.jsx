import React from 'react';
import '../Estilos/Regionestenden.css';
import { Link } from 'react-router-dom';
import FRUTA1 from '../Imagenes/Fruta1.png';
import FRUTA2 from '../Imagenes/Fruta2.png';

export default function InterfazTendenciaRegionAndina() {

    return (
      <div className="App fonditodefrutas123">
       
      <br/>
      <br/>
      <div className="fonditodefrutas123">
      <h1 className="shadow p-3 mb-5 bg-whitecolorcitoprin rounded Tituloenpaginaprincipal tituloinicial-paginatendenciaregiones">Más Vendidos</h1>

        <div className="Contenerdorreactivo1">
          <h2 className="titulo1-targetaenseñanza-tendencia titulosregionesenlastendencias2">ANDINA</h2>
          <a type="button" class="btn-header espaciodelboton-regiontendencia">
            <Link to="/productostendencia">
              <button type="button" className="Radiobotonmasvendido1 rounded-circle tipodeletraboton-tendenciaderegiones2  btn btn-info">Regresar</button>
            </Link>
            </a>
        </div>


        <div className="Contenedorparatodacarddes2 margin-botton-inforegion-tendencia margin-cuadro-left-inforegion">
          <div className="Regionpequeñadescripcion1 letradetendenciaregióncaribe-info">La región Andina1​2​ es una de las seis regiones naturales de Colombia. Está ubicada en el centro del país, limitando al norte con la región Caribe, al noreste con Venezuela, al este con la Orinoquía, al sureste con la Amazonia, al sur con Ecuador y al oeste con la región del Pacífico.

Está surcada en dirección SO-NE por tres ramales septentrionales de los Andes: las cordilleras Occidental, Central y Oriental. Las cordilleras dan lugar a numerosos valles, cañones, mesetas y un sistema fluvial cuyos principales ríos son el Cauca y el Magdalena.3​ La región tiene 34 419 398 habitantes (2018), es la zona más poblada y económicamente más activa del país.
          Se compone en su totalidad de territorio de la Selva Amazónica. La porción meridional del departamento, al sur del río Putumayo, se denomina "Trapecio amazónico", el cual incluye la triple frontera de Colombia, Perú y Brasil, y su límite sur es el río Amazonas.</div>
            <button type="button" className="unicoestilodespleg  botondelastendencias-visualizarregion Radiobotonmasvendido5 rounded-circle tipodeletraboton-tendenciaderegiones" data-toggle="modal" data-target="#staticBackdrop">Tendencias</button>
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