import React from 'react';
import '../Estilos/EstiloMisCursos.css';


export default function InterfazMisCursos () {
  
  return (

<div>

    <div>
        <h1 className="component-1-text development-miscursos titulobody-miscursos shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte" >Mis Cursos</h1>
        <h3 className="component-1-text social-miscursos subtitulo1">Aquí te presentamos los cursos culminados y en proceso</h3>
        <p className="component-1-text component-text-miscursos parrafo1-miscursos">Para EcoAgro es un placer que pertenezcas a esta familia. Somos conocedores de la importancia de ustedes en nuestros bellos campos colombianos, su trabajo es digno de admirar y ha de ser respetado, esa lucha constante que ustedes enfrentan para nosotros en una gran batalla y son héroes a la vez de nuestro país. Queremos romper ese esquema de que para una buena economía se requiere de un intermediario y estamos agradecidos de que ya hagas parte de ese proceso.</p>
        <p className="component-1-text component-text-miscursos parrafo1-miscursos">En esta sección visualizaras los diferentes cursos a los que accediste, se mostraran los culminados con tarjetas rojas y los que están en proceso con tarjetas verdes.</p>
    </div>
    

    <div  className="cards-miscursos">
        
        <div className="card7 mb-5" >
          <div className="row no-gutters">
            <div className="col-md-8">
              <img src="https://www.indap.gob.cl/images/default-source/default-album/biob%C3%ADo---orqu%C3%ADdeas-biob%C3%ADo-4.jpg?sfvrsn=0" className="card-img-top-miscursos" alt="..." />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title-miscursos">Emprende tu Negocio</h5>
                <p className="card-text-miscursos">Curso maneras de emprender tu negocio agrícola. Donde seas tu el protagonista</p>
                <p className="card-text-miscursos"><small className="text-muted">Por: Pana Zéf</small></p>
                <button type="button" class="btn btn-info btn3-miscursos">Ver curso</button>
              </div>
            </div>
          </div>
        </div>

        <div className="card2 mb-5" >
          <div className="row no-gutters">
            <div className="col-md-8">
              <img src="https://2.bp.blogspot.com/-QQzJ-Nw-dvI/T2ND3X9cIoI/AAAAAAAAAAw/vZNmoW7HGPk/s1600/imagesCAJFHVWE.jpg" className="card-img-top-miscursos" alt="..." />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title-miscursos">Abonos para el medio ambiente</h5>
                <p className="card-text-miscursos">Curso de abonos sin químicos y económicos. El desarrollo de los cultivos más sanos</p>
                <p className="card-text-miscursos"><small className="text-muted">Por: Cristiano Ronaldo</small></p>
                <button type="button" class="btn btn-info btn3-miscursos">Ver curso</button>
              </div>
            </div>
          </div>
        </div>

        <div className="card2 mb-5" >
          <div className="row no-gutters">
            <div className="col-md-8">
              <img src="https://www.leisa-al.org/web/images/stories/noticias/2018/mayo/pesticidas8.jpg" className="card-img-top-miscursos" alt="..." />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title-miscursos">Pesticidas amigables</h5>
                <p className="card-text-miscursos">Curso de pesticidas, agradables para el medio ambiente. Desarrollo casero de pesticidas, para el sostenimiento.</p>
                <p className="card-text-miscursos"><small className="text-muted">Por: Erick Lawler</small></p>
                <button type="button" class="btn btn-info btn3-miscursos">Ver curso</button>
              </div>
            </div>
          </div>
        </div>

        <div className="card7 mb-5" >
          <div className="row no-gutters">
            <div className="col-md-8">
              <img src="https://www.pciglobal.org/wp-content/uploads/2016/10/hero-farming.jpg" className="card-img-top-miscursos" alt="..." />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title-miscursos">Mejora tus cultivos</h5>
                <p className="card-text-miscursos">Curso de enseñanza de métodos para fortalecer y mejorar producción de cultivos.</p>
                <p className="card-text-miscursos"><small className="text-muted">Por: Felipe Restrepo</small></p>
                <button type="button" class="btn btn-info btn3-miscursos">Ver curso</button>
              </div>
            </div>
          </div>
        </div>
    </div>


</div>

);
}