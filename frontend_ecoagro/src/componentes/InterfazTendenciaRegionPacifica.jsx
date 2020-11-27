import React from 'react';
import '../Estilos/Regionestenden.css';
import { Link } from 'react-router-dom';
import FRUTA1 from '../Imagenes/Fruta1.png';
import FRUTA2 from '../Imagenes/Fruta2.png';

export default  function InterfazTendenciaRegionPacifica() {

    return (
      <div className="fonditodefrutas123">

        <br/>
        <br/>
          <h1 className="shadow p-3 mb-5 bg-whitecolorcitoprin rounded Tituloenpaginaprincipal tituloinicial-paginatendenciaregiones">Más vendidos</h1>
          <div className="Contenerdorreactivo5">
          <h2 className="titulo1-targetaenseñanza-tendencia titulosregionesenlastendencias2 marginpacifico-espacio-responsive-tendencia">PACÍFICO</h2>
            <a type="button" class="btn-header espaciodelboton-regiontendencia">
             <Link to="/productostendencia"><button type="button"className="Radiobotonmasvendido1 tipodeletraboton-tendenciaderegiones2 rounded-circle  btn btn-info">Regresar</button></Link>
            </a>
          </div>

        <div className="Contenedorparatodacarddes1">
        <div className="Regionpequeñadescripcion letradetendenciaregióncaribe-info">La región del Pacífico1​ es una de las seis regiones naturales de Colombia. Comprende casi la totalidad del departamento del Chocó, y las zonas costeras de los departamentos del Valle del Cauca, Cauca y Nariño.

Está ubicada en la franja oeste del país, limitando al norte con Panamá, al noreste con la región Caribe, al este con la cordillera Occidental que la separa de la región andina, al sur con Ecuador y al oeste con el océano Pacífico, de donde toma su nombre. Hace parte del Chocó biogeográfico y está dividida en dos grandes zonas marcadas por el cabo Corrientes. Las principales ciudades son Buenaventura, Tumaco y Quibdó. En ella se desarrolló la cultura Tumaco-La Tolita.</div>
        <a>
          <button type="button" className="unicoestilodespleg Radiobotonmasvendido2 tipodeletraboton-tendenciaderegiones regionpacifica-margin-boton-tendencias-responsive rounded-circle" data-toggle="modal" data-target="#staticBackdrop">Tendencias</button>
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