import React from 'react';
import '../Estilos/EstiloOfertaCampe.css';


export default function InterfazOfertaCampe () {
  
  return (

<div>

    <div>
        <h1 className="component-1-text development titulobody" >Bienvenido a Tus ofertas</h1>
        <h3 className="component-1-text social subtitulo1">Aquí te presentamos contenidos de aprendizaje para ti y tu familia</h3>
        <p className="component-1-text component-text parrafo1">Para EcoAgro es un placer que pertenezcas a esta familia. Somos conocedores de la importancia de ustedes en nuestros bellos campos colombianos, su trabajo es digno de admirar y ha de ser respetado, esa lucha constante que ustedes enfrentan para nosotros en una gran batalla y son héroes a la vez de nuestro país. Queremos romper ese esquema de que para una buena economía se requiere de un intermediario y estamos agradecidos de que ya hagas parte de ese proceso.</p>
        <p className="component-1-text component-text parrafo1">En esta sección visualizaras las ofertas que tieenen algunos compradores para ti</p>
    </div>
    

    <div className="found-4">
        <h2 className="titulo titulobody">Mis opciones de Aprendizaje</h2>
    </div>

    <div  className="cards">
        
        <div className="card0 mb-5" >
          <div className="row no-gutters">
            <div className="col-md-8">
              <img src="https://images.vexels.com/media/users/3/157272/isolated/preview/e6d8b2a22f0f860af01343af96e94a8a-libros-apilados-vector-by-vexels.png" className="card-img-top" alt="..." />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">Tomar un cursos</h5>
                <p className="card-text">Aquí podras visualizar y tomar diversos cursos, para el fortalecimiento de tus cultivos y un aprendizaje óptimo</p>
                <button type="button" class="btn btn-outline-warning btn-info btn3">Ver Cursos</button>
              </div>
            </div>
          </div>
        </div>

        <div className="card0 mb-5" >
          <div className="row no-gutters">
            <div className="col-md-8">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag-map_of_Colombia.svg/563px-Flag-map_of_Colombia.svg.png" className="card-img-top img-orange" alt="..." />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">Conoce a Colombia</h5>
                <p className="card-text">Aquí podras visualizar los productos caracteristicos de cada región de Colombia y aprenderas de ellos</p>
                <button type="button" class="btn btn-outline-warning btn-info btn3">Ver Mapa</button>
              </div>
            </div>
          </div>
        </div>

        <div className="card0 mb-5 card-edit-position" >
          <div className="row no-gutters">
            <div className="col-md-8">
              <img src="https://images.vexels.com/media/users/3/135993/isolated/preview/e3f47c14301a711e4ec5afa3a6bdf3cc-controlador-de-juego-icono-redondo-by-vexels.png" className="card-img-top img-orange" alt="..." />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">Quiero Jugar</h5>
                <p className="card-text">Aquí podras visualizar juegos orientados hacia los niños, dichos juegos son enlaces a otras páginas y se orientan a un aprendizaje de nuestro campo.</p>
                <button type="button" class="btn btn-outline-warning btn-info btn3">Ver Juegos</button>
              </div>
            </div>
          </div>
        </div>
    </div>


</div>

);
}