import React from "react";
import "../Estilos/calendarioforo.css";
import agropecuario from '../Imagenes/agropecuario.jpg';
import abono from '../Imagenes/abono.jpg';
import conservacion from '../Imagenes/conservacion.jpg';
import pesticidas from '../Imagenes/pesticidas.jpg';
import calendario from '../Imagenes/calendario.jpg';
import {Link} from 'react-router-dom';

export default function calendarioforo() {
 return (

   <div className="body">
   <div className="cardito">
     <h1 className="card-calendario">CALENDARIO DE PROGRAMACION DE FOROS</h1> 
   </div>
    <img src={calendario} className="card-calenimg" />
   <div className="cardito">
   <h2 className="card-calendario">NOTA IMPORTANTE</h2> 
   <p className="card-nota">Recordemos que los encuentros son los que estan con color azul y la
   revisdion de las actividades son las que estan con negro, muchas gracias</p>
</div>


<div className="cards">

<h1 className="card-calendario">CURSOS MAS VISTOS</h1>

<div className="card55 mb-5" >
<div className="row no-gutters">
 <div className="col-md-4">
 <img src={agropecuario} className="card-img02" />
     </div>
 <div className="col-md-8">
   <div className="card-body">
   <h3 className="card-title card-titlecapacitador12 ">AGROPECUARIO</h3>
 <p className="card-text1">With supporting text below as a natural lead-in to additional content.</p>
   </div>
 </div>
</div>
</div>


<div className="card55 mb-5" >
<div className="row no-gutters">
 <div className="col-md-4">
 <img src={abono} className="card-img03" />  
  </div>
 <div className="col-md-8">
   <div className="card-body">
   <h3 className="card-title card-titlecapacitador12 ">ABONO</h3>
 <p className="card-text1">With supporting text below as a natural lead-in to additional content.</p>
 </div>
 </div>
</div>
</div>


<div className="card55 mb-5" >
<div className="row no-gutters">
 <div className="col-md-4">
 <img src={conservacion} className="card-img04" />
     </div>
 <div className="col-md-8">
   <div className="card-body">
   <h3 className="card-title card-titlecapacitador12 ">CONSERVACION</h3>
 <p className="card-text1">With supporting text below as a natural lead-in to additional content.</p>
   </div>
 </div>
</div>
</div>
<div className="card55 mb-5" >
<div className="row no-gutters">
 <div className="col-md-4">
 <img src={pesticidas} className="card-img05" />
    </div>
 <div className="col-md-8">
   <div className="card-body">
   <h3 className="card-title card-titlecapacitador12 ">PESTICIDAS</h3>
 <p className="card-text1">With supporting text below as a natural lead-in to additional content.</p>
 </div>
 </div>
</div>
</div>




</div>
</div>



 );
}

