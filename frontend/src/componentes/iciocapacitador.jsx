import React from 'react';
import '../Estilos/iniciocapa.css';
import agropecuario from '../Imagenes/agropecuario.jpg';
import abono from '../Imagenes/abono.jpg';
import conservacion from '../Imagenes/conservacion.jpg';
import pesticidas from '../Imagenes/pesticidas.jpg';
import {Link} from 'react-router-dom';

function iniciocapa(){
 return(
<div className="dofienaos">

 <h1 className="component-1-text shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte ">Bienvenidos a Ecoagro</h1>
 <h3 className=" p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte triiiii ">"Somos el enlace directo ente el campesino y el comprador"</h3>

<h1 className="p-3 mb-5 bg-whiteverdecitovalor Titulocompradorterceraparte ">Mejores Valoraciones</h1>
 <div  className="cards-inicio-cursos-campe flex-md-equal margincitomijo columnadefondito ">
        
<div className="card0-inicio mb-5" >
  <div className="row no-gutters">
    <div className="col-md-8">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBjEgMfaS0Td8naMzmKhZ3ajAztk180UxrhA&usqp=CAU" className="card-img-top-inicio" alt="..." />
    </div>
    <div className="col-md-4">
      <div className="card-body">
        <h5 className="card-title-body">LEONORA ORTIZ</h5>
        <p className="card-text-body">Comentario: El curso de uso de abonos para el cafe permitio producir un cafe demayor calidad, el cual trendra un aroma y sabor muy especial</p>
        <p className="card-text-body"><small class="text-muted">Region: Andina, Ciuda Bolivar-Antioquia.</small></p>
      
      </div>
    </div>
  </div>
</div>

<div className="card0-inicio mb-5" >
  <div className="row no-gutters">
    <div className="col-md-8">
      <img src="https://www.guiadejardineria.com/wp-content/uploads/2012/04/abono-natural.jpg" className="card-img-top-inicio" alt="..." />
    </div>
    <div className="col-md-4">
      <div className="card-body">
        <h5 className="card-title-body">Abonos Orgánicos</h5>
        <p className="card-text-body">Curso de abonos sin químicos y económicos. El desarrollo de los cultivos más sano y productos de calidad</p>
        <p className="card-text-body"><small className="text-muted">Por: Cristiano Ronaldo</small></p>
     
      </div>
    </div>
  </div>
</div>

<div className="card0-inicio mb-5" >
  <div className="row no-gutters">
    <div className="col-md-8">
      <img src="https://elnordeste.com/wp-content/uploads/2019/06/Campesinos.png" className="card-img-top-inicio" alt="..." />
    </div>
    <div className="col-md-4">
      <div className="card-body">
        <h5 className="card-title-body">CALICHE GOMEZ</h5>
        <p className="card-text-body">Comentario: El curso de pesticidas fue de suma importancia para mejor calidad de los colinos de cacao y mejorando la produccion de la panela.</p>
        <p className="card-text-body"><small className="text-muted">Region: Andina, Supia-Caldas</small></p>
    
      </div>
    </div>
  </div>
</div>

<div className="card0-inicio mb-5" >
  <div className="row no-gutters">
    <div className="col-md-8">
      <img src="https://previews.123rf.com/images/yongkiet/yongkiet1503/yongkiet150300007/37707904-corte-del-granjero-de-c%C3%A1scara-de-coco-para-el-procesamiento-de-productos-agr%C3%ADcolas-en-una-peque%C3%B1a-f%C3%A1brica-en-.jpg" className="card-img-top-inicio" alt="..." />
    </div>
    <div className="col-md-4">
      <div className="card-body">
        <h5 className="card-title-body">MARGARITA PEÑA</h5>
        <p className="card-text-body">Comentario: El curso de pesticidas fue de suma importancia para mejor calidad de los cultivos, me ha ayudado a que sean de buena calidad y a mi produccion sea mas estable .</p>
        <p className="card-text-body"><small class="text-muted">Region: Andina, Supia-Caldas</small></p>
  
      </div>
    </div>
  </div>
</div>

<div className="card0-inicio mb-5" >
  <div className="row no-gutters">
    <div className="col-md-8">
      <img src="https://cubanosporelmundo.com/wp-content/uploads/2019/03/0307-campesino4-758x397.jpg" className="card-img-top-inicio" alt="..." />
    </div>
    <div className="col-md-4">
      <div className="card-body">
        <h5 className="card-title-body">ALVERTO CASAS</h5>
        <p className="card-text-body">Comentario: El curso de abonos me ayudo a que estos cultivos obtengan los nutrientes que les faltaban y que no tengan ninguna anormalida en su proceso .</p>
        <p className="card-text-body"><small class="text-muted">Region: Andina, Ciuda Bolivar-Antioquia.</small></p>
      
      </div>
    </div>
  </div>
</div>

</div>


<h1 className="component-1-text shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte ">MIS CURSOS</h1>

<div class="row row-cols-1 row-cols-md-2">
  <div class=" mb-4">
    <div class="card cardin">
    <div class="card-body cardin">
      <img src="https://image.freepik.com/foto-gratis/hileras-vegetales-pimiento-crecen-campo-agricultura-agricultura_72572-4.jpg" class="card-img-top" alt="..."/>
        <h5 class="card-title">Curso agropecuario</h5>
        <p class="card-text">En el campo están las oportunidades para Colombia. Es hora de transformar ideas en inversiones sostenibles para el agro. El contexto de construcción de paz que vive el país abre nuevas alternativas para la actividad agropecuaria, un importante jalonador de la economía, que impacta positivamente en la generación de empleo y calidad de vida de millones de ciudadanos.</p>
        <button href="#" class="btn btn-light"><h1 className="tamañoescrt">Editar curso</h1></button>
      </div>
    </div>
  </div>
  <div class=" mb-4">
    <div class="card cardin">
    <div class="card-body cardin">
      <img src="https://image.freepik.com/foto-gratis/campo-fresas_1203-7581.jpg" class="card-img-top" alt="..."/>
        <h5 class="card-title">Curso de abono</h5>
        <p class="card-text">En el campo están las oportunidades para Colombia. Es hora de transformar ideas en inversiones sostenibles para el agro. El contexto de construcción de paz que vive el país abre nuevas alternativas para la actividad agropecuaria, un importante jalonador de la economía, que impacta positivamente en la generación de empleo y calidad de vida de millones de ciudadanos.</p>
        <button href="#" class="btn btn-light"><h1 className="tamañoescrt">Editar curso</h1></button>
      </div>
    </div>
  </div>

  <div class=" mb-4 ">
    <div class="card cardin3">
    <div class="card-body cardin3">
      <img src="https://image.freepik.com/foto-gratis/senior-pareja-cosechando-cultivos_23-2148256697.jpg" class="card-img-top cardin1" alt="..."/>
      
        <h5 class="card-title">Curso de conservacion del suelo</h5>
        <p class="card-text">En el campo están las oportunidades para Colombia. Es hora de transformar ideas en inversiones sostenibles para el agro. El contexto de construcción de paz que vive el país abre nuevas alternativas para la actividad agropecuaria, un importante jalonador de la economía, que impacta positivamente en la generación de empleo y calidad de vida de millones de ciudadanos.</p>
        <button href="#" class="btn btn-light"><h1 className="tamañoescrt">Editar curso</h1></button>
      </div>
    </div>
  </div>

  <div class=" mb-4 ">
    <div class="card cardin1">
    <div class="card-body cardin1">
      <img src="https://image.freepik.com/foto-gratis/agricultor-manejando-tractor-pequeno-cultivo-suelo-excavacion-papa-cosecha-otono-cosecha-papa_106029-673.jpg" class="card-img-top" alt="..."/>
     
        <h5 class="card-title">Curso de pesticidas</h5>
        <p class="card-text">En el campo están las oportunidades para Colombia. Es hora de transformar ideas en inversiones sostenibles para el agro. El contexto de construcción de paz que vive el país abre nuevas alternativas para la actividad agropecuaria, un importante jalonador de la economía, que impacta positivamente en la generación de empleo y calidad de vida de millones de ciudadanos.</p>
        <button href="#" class="btn btn-light"><h1 className="tamañoescrt">Editar curso</h1></button>
      </div>
    </div>
  </div>
</div>

<h1 className="component-1-text shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte ">CURIOSIDADES</h1>



<div class="card-columns col columnadefondito">
  <div class="card">
    <img src="https://cdn.colombia.com/images/v2/colombia-info/sabias-que/politica-800.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Nuestro Pais</h5>
      <p class="card-text">Colombia es un pais prospero de gente talentosa y como decimos los colombianos echada pa
     delanteâ. Es unn pais que dia a dia se ha fortalecido. que viene mejorando vertiginosamente. Al interior se respira un aire diferente,
      de cambio, de un mejor ambiente, por eso, en el extranjero su imagen es muy diferente.</p>
    </div>
  </div>
  <div class="card p-3">
    <blockquote class="blockquote mb-0 card-body">
      <p>Un pais de sueños</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card">
    <img src="https://cdn.colombia.com/images/v2/colombia-info/sabias-que/politica-800.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Nuestro cafe y un poco mas</h5>
      <p class="card-text">Nuestro cafe colombiano es reconocidoen cualquier paÃis y cuenta con el mayor centro de investigacion
     del mundo, ademÃ¡s de que nuestro pais es el tercer pais del mundo rico en recursos hidricos, ademÃ¡s es el segundo paÃ­s con mayor
     riqueza en biodiversidad del mundo y cuenta con mÃ¡s de 1800 especies de aves</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card bg-primary text-white text-center p-3">
    <blockquote class="blockquote mb-0">
      <p>Nuestro campo cuenta con los factores esenciales para ser competitivo y aportar mucho más al crecimiento económico y social del país, y necesitamos convertir ese potencial en proyectos productivos concretos.</p>
      <footer class="blockquote-footer text-white">
        <small>
          Familia EcoAgro<cite title="Source Title"></cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card text-center">
    <div class="card-body">
      <h5 class="card-title">Caceres, el pueblo donde caen mas rayos</h5>
      <p class="card-text">De acuerdo con una investigacion hecha por la Nasa, Caceres, un municipio ubicado en departamento de Antioquia,
      es el lugar con mayor actividad de rayos en Colombia y el cuarto en el mundo. Adicionalmente, recibe mas de
      6.600 descargas electricas al mes y, en promedio, en un solo kilometro cuadrado pueden caer hasta 172 descargas por año</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="https://cdn.colombia.com/images/v2/colombia-info/sabias-que/politica-800.jpg" class="card-img-top" alt="..."/>
  </div>
  <div class="card p-3 text-right">
    <blockquote class="blockquote mb-0">
      <p>El contexto de construcción de paz que vive el país abre nuevas alternativas para la actividad agropecuaria, un importante jalonador de la economía, que impacta positivamente en la generación de empleo y calidad de vida de millones de ciudadanos. En este proceso, las mujeres y los jóvenes rurales son agentes de cambio fundamentales para el desarrollo del sector, y debemos vincularlos para que sean líderes de dicha transformación.</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
         Familia EcoAgro<cite title="Source Title"></cite>
        </small>
      </footer>
    </blockquote>
  </div>
 
</div>

   

     </div>
  
 );
}
export default  iniciocapa;