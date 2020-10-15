import React from 'react';
import '../Estilos/EstiloAprende.css';
import {Link} from 'react-router-dom';

export default function InterfazAprende () {
  
  return (

<div>

    <div>
        <h1 className="component-1-text development-aprende tituloaprende" >Bienvenido a Aprende con Ecoagro</h1>
        <h3 className="component-1-text social-aprende subtitulo1">Aquí te presentamos contenidos de aprendizaje para ti y tu familia</h3>
        <p className="component-1-text component-text-aprende parrafo1-aprende justify-parrafo-aprende">Para EcoAgro es un placer que pertenezcas a esta familia. Somos conocedores de la importancia de ustedes en nuestros bellos campos colombianos, su trabajo es digno de admirar y ha de ser respetado, esa lucha constante que ustedes enfrentan para nosotros en una gran batalla y son héroes a la vez de nuestro país. Queremos romper ese esquema de que para una buena economía se requiere de un intermediario y estamos agradecidos de que ya hagas parte de ese proceso.</p>
        <p className="component-1-text component-text-aprende parrafo1-aprende justify-parrafo-aprende">En esta sección visualizaras y elegirás contenidos de aprendizaje que más sean de tu agrado. Conocerás más de los productos característicos de Colombia y te introducirás en varios conocimientos del mundo agrario, para que puedas seguir potenciado el desarrollo de tus cultivos y llevar a cabo procesos de mejoramiento constante. Igualmente, los niños podrás acceder a contenidos que le permitan conectarse más y conocer el mundo del campo.</p>
    </div>
    
    <div className="contenedorprincipal">
        <div className="contenedorsecundario">
            <figure><img className="tamaño-img-carrusel" src="https://bogota.gov.co/sites/default/files/styles/1050px/public/2020-08/campesino-bogota-rural.jpg" /></figure>
            <figure><img className="tamaño-img-carrusel" src="https://www.lanacion.com.co/wp-content/uploads/2020/06/Campesino.jpg" /></figure>
            <figure><img className="tamaño-img-carrusel" src="https://bogota.gov.co/sites/default/files/styles/1050px/public/2020-08/campesino-bogota-rural.jpg" /></figure>
            <figure><img className="tamaño-img-carrusel" src="https://i2.wp.com/www.frontera7dias.com.ve/wp-content/uploads/2020/03/CAMPESINO-3.jpg?fit=716%2C522&ssl=1" /></figure>
            <figure><img className="tamaño-img-carrusel" src="https://www.sudamericarural.org/images/andino.jpg" /></figure>
            <figure><img className="tamaño-img-carrusel" src="https://conexioncapital.co/wp-content/uploads/2020/04/Campesinos_-1.jpg" /></figure>
            <figure><img className="tamaño-img-carrusel" src="https://www.unbosque.edu.co/sites/default/files/2020-07/campesinos_0.jpg" /></figure>
            <figure><img className="tamaño-img-carrusel" src="https://www.agromarketing.mx/wp-content/uploads/2019/10/campo-1.jpg" /></figure>
            <figure><img className="tamaño-img-carrusel" src="https://pares.com.co/wp-content/uploads/2020/04/SUBSIDIOS-PARA-CAMPESINOS-SE-LOS-LLEVAN-LOS-EMPRESARIOS.jpg" /></figure>
            <figure><img className="tamaño-img-carrusel" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRj9Nli30X0NqwBypjNFORR8ZCIWgycOYUjw&usqp=CAU" /></figure>
        </div>
    </div>

    <div className="found-4-aprende">
        <h2 className="titulo-aprende tituloaprende">Mis opciones de Aprendizaje</h2>
    </div>

    <div  className="cards-aprende">
        
        <div className="card0-aprende mb-5" >
          <div className="row no-gutters">
            <div className="col-md-8">
              <img src="https://images.vexels.com/media/users/3/157272/isolated/preview/e6d8b2a22f0f860af01343af96e94a8a-libros-apilados-vector-by-vexels.png" className="card-img-top-aprende" alt="..." />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title-aprende">Tomar un cursos</h5>
                <p className="card-text-aprende">Aquí podras visualizar y tomar diversos cursos, para el fortalecimiento de tus cultivos y un aprendizaje óptimo</p>
                <Link to="/elegircurso">
                <button type="button" class="btn btn-outline-warning btn-info btn3 btn1-aprende">Ver Cursos</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="card0-aprende mb-5" >
          <div className="row no-gutters">
            <div className="col-md-8">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag-map_of_Colombia.svg/563px-Flag-map_of_Colombia.svg.png" className="card-img-top-aprende img-orange" alt="..." />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title-aprende">Conoce a Colombia</h5>
                <p className="card-text-aprende">Aquí podras visualizar los productos caracteristicos de cada región de Colombia y aprenderas de ellos</p>
                <Link to="/aprendedecolombia">
                <button type="button" class="btn btn-outline-warning btn-info btn3 btn1-aprende">Ver Contenido</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="card0-aprende mb-5 card-edit-position" >
          <div className="row no-gutters">
            <div className="col-md-8">
              <img src="https://images.vexels.com/media/users/3/135993/isolated/preview/e3f47c14301a711e4ec5afa3a6bdf3cc-controlador-de-juego-icono-redondo-by-vexels.png" className="card-img-top-aprende img-orange" alt="..." />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title-aprende margin-img-title-aprende">Quiero Jugar</h5>
                <p className="card-text-aprende">Aquí podras visualizar juegos orientados hacia los niños, dichos juegos son enlaces a otras páginas y se orientan a un aprendizaje de nuestro campo.</p>
                <button type="button" class="btn btn-outline-warning btn-info btn3 btn1-aprende">Ver Juegos</button>
              </div>
            </div>
          </div>
        </div>
    </div>


</div>

);
}