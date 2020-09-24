import React from 'react';
import '../Estilos/forolisto.css';
import agropecuario from '../imagenes/agropecuario.jpg';
import abono from '../imagenes/abono.jpg';
import conservacion from '../imagenes/conservacion.jpg';
import pesticidas from '../imagenes/pesticidas.jpg';

export default function forolisto(){
  return(
<div className="Body">

<h1 class="card-header">FOROS</h1>

  <div className="cards">
    
<div className="card0 mb-5" >
          <div className="row no-gutters">
            <div className="col-md-4">
            <img src={agropecuario} className="img-fluid2" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title">Curso agropecuario parte 1</h1>
                <h2 className="card-tittle">Foro no confrmado</h2>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card0 mb-5" >
          <div className="row no-gutters">
            <div className="col-md-4">
            <img src={abono} className="img-fluid2" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Curso de abonos (Introducción, Parte Inicial)</h5>
                <h2 className="card-tittle">Foro confrmado</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="card0 mb-5" >
          <div className="row no-gutters">
            <div className="col-md-4">
            <img src={conservacion} className="img-fluid2" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title">Curso de conservación del suelo</h1>
                <h2 className="card-tittle">Foro no confrmado</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="card0 mb-5" >
          <div className="row no-gutters">
            <div className="col-md-4 ">
            <img src={pesticidas} className="img-fluid2" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title">Curso de pesticidas (Introducción, Parte 1)</h1>
                  <h2 className="card-tittle">Foro confrmado</h2>
              </div>
            </div>
          </div>
        </div>

        <a href="#" class="btn1 btn-primary">REGRESAR</a>


     

      </div>
   
   
      </div>
);
}