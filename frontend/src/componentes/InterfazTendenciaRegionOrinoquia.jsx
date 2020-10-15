import React from 'react';
import '../Estilos/Regionestenden.css';
import { Link } from 'react-router-dom';
import FRUTA1 from '../Imagenes/Fruta1.png';
import FRUTA2 from '../Imagenes/Fruta2.png';

export default function InterfazTendenciaRegionOrinoquia() {

    return (
      <div className="App fonditodefrutas1">

        <br/>
        <br/>
          <h1 className="shadow p-3 mb-5 bg-whitecolorcitoprin rounded Tituloenpaginaprincipal  tituloinicial-paginatendenciaregiones">Más Vendidos</h1>
         
          <div className="Contenerdorreactivo4">
            <h2 className="titulo1-targetaenseñanza-tendencia titulosregionesenlastendencias2 titulorinoquiatendenciademejora-region">ORINOQUÍA</h2>
            <a type="button" class="btn-header espaciodelboton-regiontendencia">
            <Link to="/productostendencia">
              <button type="button"className="Radiobotonmasvendido5 rounded-circle tipodeletraboton-tendenciaderegiones2 btn btn-info">Regresar</button>
            </Link>
            </a>
          </div>

      <div className="Contenedorparatodacarddes2">
        <div className="Regionpequeñadescripcion1 letradetendenciaregióncaribe-info">Amazonas es uno de los treinta y dos departamentos que, junto con Bogotá, Distrito Capital, forman la República de Colombia. Su capital es Leticia. Está ubicado en el extremo sur del país, en gran parte al sur de la línea ecuatorial, en la región Amazonia. Limita al norte con Caquetá y Vaupés, al este con Brasil, al sur con Perú y al oeste con Putumayo. Con 110 000 km² es el departamento más extenso, con unos 75.000 habitantes en 2015, el cuarto menos poblado —por delante de Vichada, Vaupés y Guainía, el menos poblado— y con 0,68 hab/km², el tercero menos densamente poblado, por delante de Vichada y Guainía, el menos densamente poblado.
          Se compone en su totalidad de territorio de la Selva Amazónica. La porción meridional del departamento, al sur del río Putumayo, se denomina "Trapecio amazónico", el cual incluye la triple frontera de Colombia, Perú y Brasil, y su límite sur es el río Amazonas.</div>
        <a>
          <button type="button" className="unicoestilodespleg botondelastendencias-visualizarregion Radiobotonmasvendido2 tipodeletraboton-tendenciaderegiones rounded-circle" data-toggle="modal" data-target="#staticBackdrop">Tendencias</button>
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

  );
} 