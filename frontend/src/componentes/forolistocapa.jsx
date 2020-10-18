import React from "react";
import "../Estilos/forolistocapa.css";
import agropecuario from "../Imagenes/agropecuario.jpg";
import abono from "../Imagenes/abono.jpg";
import conservacion from "../Imagenes/conservacion.jpg";
import pesticidas from "../Imagenes/pesticidas.jpg";
import { Link } from "react-router-dom";

export default function forolisto() {
 return (
   <div className="cabeza">
     <h1 className="component-1-text shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte ">FOROS</h1>

    
<div class="row row-cols-1 row-cols-md-2">
  <div class=" mb-4">
    <div class="card  cardin78">
    <div class="card-body cardin78">
      <img src="https://image.freepik.com/foto-gratis/hileras-vegetales-pimiento-crecen-campo-agricultura-agricultura_72572-4.jpg" class="card-img-top" alt="..."/>
        <h5 class="card-title">Curso agropecuario parte 1</h5>
        <p class="card-text">Foro no confrmado.</p>
        <button href="#" class="btn btn-outline-warning"><h1 className="tamañoescrt">Ir</h1></button>
      </div>
    </div>
  </div>
  <div class=" mb-4">
    <div class="card ">
    <div class="card-body cardin79">
      <img src="https://image.freepik.com/foto-gratis/campo-fresas_1203-7581.jpg" class="card-img-top" alt="..."/>
        <h5 class="card-title">Curso de abonos (Introduccion)</h5>
        <p class="card-text">Foro confrmado</p>
        <button href="#" class="btn btn-outline-warning"><h1 className="tamañoescrt">Ir</h1></button>
      </div>
    </div>
  </div>

  <div class=" mb-4 ">
    <div class="card ">
    <div class="card-body cardin79">
      <img src="https://image.freepik.com/foto-gratis/senior-pareja-cosechando-cultivos_23-2148256697.jpg" class="card-img-top cardin1" alt="..."/>
      
        <h5 class="card-title">Curso de conservacion del suelo</h5>
        <p class="card-text">Foro no confrmado</p>
        <button href="#" class="btn btn-outline-warning"><h1 className="tamañoescrt">Ir</h1></button>
      </div>
    </div>
  </div>

  <div class=" mb-4 ">
    <div class="card ">
    <div class="card-body cardin78">
      <img src="https://image.freepik.com/foto-gratis/agricultor-manejando-tractor-pequeno-cultivo-suelo-excavacion-papa-cosecha-otono-cosecha-papa_106029-673.jpg" class="card-img-top" alt="..."/>
     
        <h5 class="card-title">Curso de pesticidas (Introduccion)s</h5>
        <p class="card-text">Foro confrmado.</p>
        <button href="#" class="btn btn-outline-warning"><h1 className="tamañoescrt">Ir</h1></button>
      </div>
    </div>
  </div>
</div>

<button href="#" class="btn btn-info centroooo"><h1 className="tamañoescrt">Regresar</h1></button>
     <br/>
     <br/>
     </div>
  
 );
}
