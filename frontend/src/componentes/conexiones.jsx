import React from "react";
import "../Estilos/conexiones.css";
import objetivo1 from '../Imagenes/objetivo1.jpg';
import alcance from '../Imagenes/alcance.jpg';
import vision from '../Imagenes/vision.jpg';
import mision from '../Imagenes/mision.jpg';
import ECOAGRODEFINITIVO1 from '../Imagenes/ECOAGRODEFINITIVO1.png';
import eslogan from '../Imagenes/eslogan.jpg';
import {Link} from 'react-router-dom';

export default function conexiones() {
 return (
   <div className="body">
     <div className="card carddecapacitadorenconexiones">
       <h1 className="card-header card-headerdelcapacitadorenconex">EcoAgro</h1> 
     </div>
  
<div className="cardsdelcapacitador">

<div className="card44 mb-5" >
 <div className="row no-gutters">
   <div className="col-md-4">
   <img src={objetivo1} className="card-img01" />
      </div>
   <div className="col-md-8">
     <div className="card-body">
     <h3 className="card-title card-titledecapacitadorenconex">OBJETIVO</h3>
   <p className="card-text1">With supporting text below as a natural lead-in to additional content.</p>
     </div>
   </div>
 </div>
</div>

<div className="card44 mb-5" >
 <div className="row no-gutters">
   <div className="col-md-4">
   <img src={alcance} className="card-img02" />
       </div>
   <div className="col-md-8">
     <div className="card-body">
     <h3 className="card-title card-titledecapacitadorenconex">ALCANCE</h3>
   <p className="card-text1">With supporting text below as a natural lead-in to additional content.</p>
     </div>
   </div>
 </div>
</div>


 <div className="card44 mb-5" >
 <div className="row no-gutters">
   <div className="col-md-4">
   <img src={vision} className="card-img03" />  
    </div>
   <div className="col-md-8">
     <div className="card-body">
     <h3 className="card-title card-titledecapacitadorenconex">VISION</h3>
   <p className="card-text1">With supporting text below as a natural lead-in to additional content.</p>
   </div>
   </div>
 </div>
</div>


<div className="card44 mb-5" >
 <div className="row no-gutters">
   <div className="col-md-4">
   <img src={mision} className="card-img04" />
       </div>
   <div className="col-md-8">
     <div className="card-body">
     <h3 className="card-title card-titledecapacitadorenconex">MISION</h3>
   <p className="card-text1">With supporting text below as a natural lead-in to additional content.</p>
     </div>
   </div>
 </div>
</div>
<div className="card44 mb-5" >
 <div className="row no-gutters">
   <div className="col-md-4">
   <img src={ECOAGRODEFINITIVO1} className="card-img05" />
      </div>
   <div className="col-md-8">
     <div className="card-body">
     <h3 className="card-title card-titledecapacitadorenconex">LOGO</h3>
   <p className="card-text1">With supporting text below as a natural lead-in to additional content.</p>
   </div>
   </div>
 </div>
</div>

<div className="card44 mb-5" >
 <div className="row no-gutters">
 <div className="col-md-4">
   <img src={eslogan} className="card-img06" />
       </div>
   <div className="col-md-8">
     <div className="card-body">
     <h3 className="card-title card-titledecapacitadorenconex">ESLOGAN</h3>
   <p className="card-text1">"SOMOS EL ENLACE DIRECTO ENTRE CAMPASINO Y EL COMPRADOR"</p>
   </div>
   </div>
 </div>
</div>


</div>
</div>


 );
}
