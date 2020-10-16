import React from 'react';
import '../Estilos/Iniciocapacitador.css';
import agropecuario from '../Imagenes/agropecuario.jpg';
import abono from '../Imagenes/abono.jpg';
import conservacion from '../Imagenes/conservacion.jpg';
import pesticidas from '../Imagenes/pesticidas.jpg';
import {Link} from 'react-router-dom';

export default function iniciocapa(){
 return(
<div className="Body">

<div>
 <h1 className="bienvenido">Bienvenidos a Ecoagro</h1>
 <h3 className="frase h3estiloletricacap{">"Somos el enlace directo ente el campesino y el comprador"</h3>
</div>

<div className="card cardcapacitadorbonito">
<h1 className="valoracion">Mejores Valoraciones</h1>
</div>

 <div className="cardsdelcapacitador ">
  
 <div className="card01 mb-5" >
 <div className="row no-gutters">
   <div className="col-md-4">
     <img claasName="imagen" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBjEgMfaS0Td8naMzmKhZ3ajAztk180UxrhA&usqp=CAU" className="card-campesino1" />
   </div>
   <div className="col-md-8">
     <div className="card-body">
       <h5 className="card-title card-titlecapacitador12 ">LEONORA ORTIZ</h5>
       <p className="card-text card-textdelcapacitador">Region: Andina, Ciuda Bolivar-Antioquia.</p>
       <p className="card-text card-textdelcapacitador">Comentario: El curso de uso de abonos para el cafe permitio producir un cafe demayor calidad, el cual trendra un aroma y sabor muy especial</p>
     </div>
   </div>
 </div>
</div>


 <div className="card01 mb-5" >
 <div className="row no-gutters">
   <div className="col-md-4">
     <img className="imagen" src="https://elnordeste.com/wp-content/uploads/2019/06/Campesinos.png" className="card-campesino1" />
   </div>
   <div className="col-md-8">
     <div className="card-body"> 
       <h5 className="card-title card-titlecapacitador12 ">CALICHE GOMEZ</h5>
       <p className="card-text card-textdelcapacitador">Region: Andina, Supia-Caldas</p>
       <p className="card-text card-textdelcapacitador">Comentario: El curso de pesticidas fue de suma importancia para mejor calidad de los colinos de cacao y mejorando la produccion de la panela.</p>
     </div>
   </div>
 </div>
</div>


<div className="card01 mb-5" >
 <div className="row no-gutters">
   <div className="col-md-4">
     <img className="imagen" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqZgtlRFWEcMTeTpRnznZqus-Y4BZwWYdBsA&usqp=CAU.png" className="card-campesino1" />
   </div>
   <div className="col-md-8">
     <div className="card-body">
       <h5 className="card-title card-titlecapacitador12 ">MARGARITA PEÑA</h5>
       <p className="card-text card-textdelcapacitador">Region: Andina, Supia-Caldas</p>
       <p className="card-text card-textdelcapacitador">Comentario: El curso de pesticidas fue de suma importancia para mejor calidad de los cultivos, me ha ayudado a que sean de buena calidad y a mi produccion sea mas estable .</p>
     </div>
   </div>
 </div>
</div>

<div className="card01 mb-5" >
 <div className="row no-gutters">
   <div className="col-md-4">
     <img className="imagen" src="https://cubanosporelmundo.com/wp-content/uploads/2019/03/0307-campesino4-758x397.jpg" className="card-campesino1" />
   </div>
   <div className="col-md-8">
     <div className="card-body">
       <h5 className="card-title card-titlecapacitador12 ">ALVERTO CASAS</h5>
       <p className="card-text card-textdelcapacitador">Region: Andina, Ciuda Bolivar-Antioquia.</p>
       <p className="card-text card-textdelcapacitador">Comentario: El curso de abonos me ayudo a que estos cultivos obtengan los nutrientes que les faltaban y que no tengan ninguna anormalida en su proceso .</p>
     </div>
   </div>
 </div>
</div>
  
<div className="card cardcapacitadorbonito">
<h1 className="valoracion">MIS CURSOS</h1>
</div>

<div className="card01 mb-5" >
         <div className="row no-gutters">
           <div className="col-md-4">
             <img src={agropecuario} className="card-campesino"/>
           </div>
           <div className="col-md-8">
             <div className="card-body">
               <h5 className="card-title card-titlecapacitador12 ">Curso agropecuario</h5>
               <p className="card-text card-textdelcapacitador">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
               <a href="#" class="btn10 btn-primary">EDITAR CURSO</a>
             </div>
           </div>
         </div>
       </div>
      
       <div className="card01 mb-5" >
         <div className="row no-gutters">
           <div className="col-md-4">
             <img src={abono} className="card-campesino" />
           </div>
           <div className="col-md-8">
             <div className="card-body">
               <h5 className="card-title card-titlecapacitador12 ">Curso de abono</h5>
               <p className="card-text card-textdelcapacitador">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
               <a href="#" class="btn10 btn-primary">EDITAR CURSO</a>
             </div>
           </div>
         </div>
       </div>

       <div className="card01 mb-5" >
         <div className="row no-gutters">
           <div className="col-md-4">
           <img src={conservacion} className="card-campesino" />
         </div>
           <div className="col-md-8">
             <div className="card-body">
               <h5 className="card-title card-titlecapacitador12 ">Curso de conservacion del suelo</h5>
               <p className="card-text card-textdelcapacitador">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
               <a href="#" class="btn10 btn-primary">EDITAR CURSO</a>
             </div>
           </div>
         </div>
       </div>

       <div className="card01 mb-5" >
         <div className="row no-gutters">
           <div className="col-md-4 ">
           <img src={pesticidas} className="card-campesino" />
          </div>
           <div className="col-md-8">
             <div className="card-body">
               <h5 className="card-title card-titlecapacitador12 ">Curso de pesticidas</h5>
               <p className="card-text card-textdelcapacitador">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
               <a href="#" class="btn10 btn-primary">EDITAR CURSO</a>
             </div>
           </div>
         </div>
       </div>


<div className="card cardcapacitadorbonito">
       <h1 className="valoracion">CURIOSIDADES</h1>
       </div>

<div className="cardsdelcapacitador ">

     <div className="card012">
   <img src="https://cdn.colombia.com/images/v2/colombia-info/sabias-que/politica-800.jpg" className="card-campesino3" />
   <div className="card-body">
     <h5 className="card-title card-titlecapacitador12 ">Nuestro Pais</h5>
     <p className="card-text card-textdelcapacitador">Colombia es un pais prospero de gente talentosa y como decimos los colombianos echada pa
     delanteâ. Es unn pais que dia a dia se ha fortalecido. que viene mejorando vertiginosamente. Al interior se respira un aire diferente,
      de cambio, de un mejor ambiente, por eso, en el extranjero su imagen es muy diferente.</p>
     <p className="card-text card-textdelcapacitador"><small className="text-muted"></small></p>
   </div>
</div>

   <div className="card012">
   <img src="https://cdn.colombia.com/images/v2/colombia-info/sabias-que/politica-800.jpg" className="card-campesino3" />
   <div className="card-body">
     <h5 className="card-title card-titlecapacitador12 ">Nuestro cafe y un poco mas</h5>
     <p className="card-text card-textdelcapacitador">Nuestro cafe colombiano es reconocidoen cualquier paÃis y cuenta con el mayor centro de investigacion
     del mundo, ademÃ¡s de que nuestro pais es el tercer pais del mundo rico en recursos hidricos, ademÃ¡s es el segundo paÃ­s con mayor
     riqueza en biodiversidad del mundo y cuenta con mÃ¡s de 1800 especies de aves</p>
     <p className="card-text card-textdelcapacitador"><small className="text-muted"></small></p>
   </div>
    </div>

    <div className="card012">
   <img src="https://cdn.colombia.com/images/v2/colombia-info/sabias-que/politica-800.jpg" className="card-campesino3" />
   <div className="card-body">
     <h5 className="card-title card-titlecapacitador12 ">Caceres, el pueblo donde caen mas rayos</h5>
     <p className="card-text card-textdelcapacitador">De acuerdo con una investigacion hecha por la Nasa, Caceres, un municipio ubicado en departamento de Antioquia,
      es el lugar con mayor actividad de rayos en Colombia y el cuarto en el mundo. Adicionalmente, recibe mas de
      6.600 descargas electricas al mes y, en promedio, en un solo kilometro cuadrado pueden caer hasta 172 descargas por año</p>
     <p className="card-text card-textdelcapacitador"><small className="text-muted"></small></p>
   </div>
    </div>

   
   
</div>

   

     </div>
   </div>
 
 );
}
