import React from 'react';
import '../Estilos/Regionestenden.css';
import { Link } from 'react-router-dom';
import FRUTA1 from '../Imagenes/Fruta1.png';
import FRUTA2 from '../Imagenes/Fruta2.png';

export default function InterfazRegionestendencia() {

  return (
    <div className="Regionestendencia">

      <br />
      <br />
      <h1 className="shadow p-3 mb-5 bg-whitecolorcitoprin rounded Tituloenpaginaprincipal tituloinicial-paginatendenciaregiones">Más Vendidos</h1>
      <div className="palancaparaqueesteordenado">

          <div className="botonesdeselecciondetendenciaregion">
          <Link to="/tendenciasregionandina"><button type="button" className="Radiobotonmasvendido1 rounded-circle tipodeletraboton-tendenciaderegiones">Andina</button></Link>
          <Link to="/tendenciasregioncaribe"><button type="button" className="Radiobotonmasvendido2  rounded-circle  tipodeletraboton-tendenciaderegiones">Caribe</button></Link>
          <Link to="/tendenciasregioninsular"><button type="button" className="Radiobotonmasvendido3  rounded-circle  tipodeletraboton-tendenciaderegiones">Insular</button></Link>
          <Link to="/tendenciasregionorinoquia"><button type="button" className="Radiobotonmasvendido4  rounded-circle tipodeletraboton-tendenciaderegiones">Orinoquía</button></Link>
          <Link to="/tendenciasregionpacifica"><button type="button" className="Radiobotonmasvendido5  rounded-circle configuraciondemargindebotontendencia tipodeletraboton-tendenciaderegiones">Pacífico</button></Link>
          </div>
          <div className="Contenerdorreactivo">
            <h2 className="titulo1-reginamazonastendencia">AMAZONAS</h2>
          </div>

      </div>

      <div className="Contenedorparatodacarddes">
        <div className="Regionpequeñadescripcion">Amazonas es uno de los treinta y dos departamentos que, junto con Bogotá, Distrito Capital, forman la República de Colombia. Su capital es Leticia. Está ubicado en el extremo sur del país, en gran parte al sur de la línea ecuatorial, en la región Amazonia. Limita al norte con Caquetá y Vaupés, al este con Brasil, al sur con Perú y al oeste con Putumayo. Con 110 000 km² es el departamento más extenso, con unos 75.000 habitantes en 2015, el cuarto menos poblado —por delante de Vichada, Vaupés y Guainía, el menos poblado— y con 0,68 hab/km², el tercero menos densamente poblado, por delante de Vichada y Guainía, el menos densamente poblado.
        Se compone en su totalidad de territorio de la Selva Amazónica. La porción meridional del departamento, al sur del río Putumayo, se denomina "Trapecio amazónico", el cual incluye la triple frontera de Colombia, Perú y Brasil, y su límite sur es el río Amazonas.</div>
        <a>
          <button type="button" className="unicoestilodespleg Radiobotonmasvendido2 rounded-circle botondelastendencias-visualizarregion tipodeletraboton-tendenciaderegiones" data-toggle="modal" data-target="#staticBackdrop">Tendencias</button>
        </a>
        <div className="modal fade " id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
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
      <br />
      <br />
    </div>
  );
}   
