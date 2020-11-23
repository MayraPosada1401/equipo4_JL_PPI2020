
import React from 'react';
import COMPRADOR1 from '../Imagenes/COMPRADOR1.png';
import COMPRADOR2 from '../Imagenes/COMPRADOR2.png';
import comprador3 from '../Imagenes/comprador3.png';
import ECOAGRODEFINITIVO1 from '../Imagenes/ECOAGRODEFINITIVO1.png';
import usuario from '../Imagenes/usuario.png';
import '../Estilos/Perfildecomprador.css';
import { Link } from 'react-router-dom';

function perfil() {
  return (
    <div className="perfil">
       <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/"><a className="navbar-brand"><img src={ECOAGRODEFINITIVO1} className="img-iconoheadercampe" /></a></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item nav-item normal-nav active">
      <Link to="/app1"><a className="nav-link" href="">Inicio <span class="sr-only">(current)</span></a></Link>
      </li>
        <li className="nav-item normal-nav nav-item active">
        <a class="nav-link" href="#">Conexiones</a>
        </li>
        <li className="nav-item normal-nav nav-item active">
        <Link to="/quienescomprador"><a className="nav-link" href="#">Contactanos</a></Link> 
      </li>
        <li className="nav-item normal-nav nav-item active">
          <Link to="/compradormapa"><a className="nav-link  " href="#">Tienda</a></Link>
        </li>
        <li className="nav-item normal-nav nav-item active">
        <Link to="/comprador"><a className="nav-link  " href="#">Mis compras</a></Link>
        </li>
        <li className="nav-item normal-nav nav-item active">
        <Link to="/perfildecomprador"><a className="nav-link  " href="#">Perfil</a></Link>
        </li>
        <a type="button" class="btn1-header btn-info1"></a>
        <Link to="/"><button type="button" class="btn btn-info btn-cerrarcampe">Cerrar sesion</button></Link>
        <li className="nav-item">
       
        </li>
      </ul>
    </div>
  </nav>
    </div>
  
  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
     
      <ol className="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
  
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={COMPRADOR1} className="d-block w-100 " alt="..."/>
        
        </div>
      <div className="carousel-item">
        <img src={COMPRADOR2} className="d-block w-100" alt="..."/>
        
        </div>
      <div className="carousel-item">
        <img src={comprador3} className="d-block w-100" alt="..."/>
        
        </div>
        </div>
    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
  
  <div>
        <h1 className="component-1-text shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte " >Bienvenido a tu perfil de EcoAgro</h1>
        <h3 className="component-1-text social-perfil subtitulo1-perfil">Aquí te presentamos las opciones que tienes para mayor accesibilidad a contenidos de Ecoagro</h3>
        <p className="component-1-text component-text-perfil parrafo1-perfil">Para EcoAgro es un placer que pertenezcas a esta familia. Somos conocedores de la importancia de ustedes en nuestros bellos campos colombianos, su trabajo es digno de admirar y ha de ser respetado, esa lucha constante que ustedes enfrentan para nosotros en una gran batalla y son héroes a la vez de nuestro país. Queremos romper ese esquema de que para una buena economía se requiere de un intermediario y estamos agradecidos de que ya hagas parte de ese proceso.</p>
        <p className="component-1-text component-text-perfil parrafo1-perfil">En esta sección visualizaras y eligiras de acuerdo a tu necesidad las opciones de perfil. Estas opciones estan orientadas a tu bienestar y por supuesto potecializando nuestro objetivo. Te recordamos que si tienes alguna duda puedes irte a la opción de contacto e interactuar más con el grupo EcoAgro, con el fin de que obtengan un mejor servicio y te sientas comodo en el aplicativo. A continuación, se mostraran los accesos que desde tu perfil tienes disponibles</p>
      </div>

      <div className="found-4-perfil">
        <h2 className="shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte ">Deseo Cambiar mi foto de Perfil</h2>
        <h3 className="titulodato-perfil subtitulo1-perfil">Recomendaciones generales</h3>
      </div>
        <div className="part1-perfil">
            <div>
            <a href="#" className="btn btn-light btn-primary-perfildecompassss"></a>
            <button type="button" class="btn btn-info btn2-perfil">Cambiar foto de perfil</button>
            </div>
           

         <ul className="list-unstyled-perfil">
            <li className="media">
                <div class="media-body parrafo1-perfil">
                    <h5 className="mt-0 mb-1 title-info-perfil-foto">Pon una foto clara donde se aprecie tu rostro</h5>
                   Los diferentes compradores podran conocer quien eres y van a sentirse más seguro al conocer quien es el productor encargado de su producto. Tenga en cuenta que es más comodo conocer con quienes interactuamos
                </div>
            </li>
            <li className="media my-4">
                <div className="media-body parrafo1-perfil ">
                    <h5 className="mt-0 mb-1 title-info-perfil-foto">En caso de no subir una foto</h5>
                    Comprendemos en caso de que no desees subir tu foto, como equipo EcoAgro te recomendamos que pongas visibles tus valoraciones, para que los diversos compradores conozcan abiertamente como llevas los procesos. Ya que como no conocen quien eres, tus valoraciones les dará una imagen
                </div>
            </li>
            <li className="media">
                <div className="media-body parrafo1-perfil">
                    <h5 className="mt-0 mb-1 title-info-perfil-foto">¿Puedo poner cualquier imagen?</h5>
                    Claro que se puede, mientras no vulnere e infrinja lo establecido por el equipo EcoaAgro, teniedno en cuenta que no debe de atentar contra la integridad de un humano. De emplear una imagen que violente ciertas políticas se vera sansionado o expulsado por el equipo. Recuerde que todo lo que hacemos es por ustedes y no se busca afectar a alguien
                </div>
            </li>
         </ul>
        </div>
       
        <h3 class="shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte ">Mi perfil</h3>
  

<br/>
<br/>

<div  className="cards-perfil">
        
        <div className="card0-perfil mb-5" >
          <div className="row no-gutters">
            <div className="col-md-8">
              <img src="https://cdn0.iconfinder.com/data/icons/shopping-and-ecommerce-15/512/sale_lineal_color_cnvrt-06-512.png" className="card-img-top-perfil" alt="..." />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title-perfil">Seguimiento de mi pedido</h5>
                <p className="card-text-perfil">Aquí podras hacer cambios y estar en constante actualización de tu información para un mejor servicio</p>
                <Link to="/comprador">
                <button type="button" class="btn btn-outline-light btn3-perfil">Seguir pedido</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="card0-perfil mb-5" >
          <div className="row no-gutters">
            <div className="col-md-8">
              <img src="https://images.vexels.com/media/users/3/200093/isolated/lists/596f0d8cb733b17268752d044976f102-icono-de-bolsa-de-compras.png" className="card-img-top-perfil img-orange" alt="..." />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title-perfil">Comprar producto</h5>
                <p className="card-text-perfil">Aquí podras montar la información del producto que deseas vender para que sea vista por el público</p>
                <Link to="/compradormapa">
                <button type="button" class="btn btn-outline-light btn3-perfil">Comprar producto</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="card0-perfil mb-5" >
          <div className="row no-gutters">
            <div className="col-md-8">
              <img src="https://cdn0.iconfinder.com/data/icons/business-startup-10/50/61-512.png" className="card-img-top-perfil" alt="..." />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title-perfil">Ver mi chat</h5>
                <p className="card-text-perfil">Aquí visualizaras las ofertas economicas ofrecidas de diversos compradores por tu producto</p>
                <Link to="/chatdecompradro">
                <button type="button" class="btn btn-outline-light btn3-perfil">Ver mi chat</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="card0-perfil mb-5" >
          <div className="row no-gutters">
            <div className="col-md-8">
              <img src="https://cdn2.iconfinder.com/data/icons/random-set-1/410/Asset_85-512.png" className="card-img-top-perfil" alt="..." />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title-perfil">Actualización de datos</h5>
                <p className="card-text-perfil">Aquí visualizaras los cursos que habías seleccionado previamente, para que accedas de nuevo a cada uno de los contenidos ofrecidos.</p>
                <Link to="/actualizacióndedatos">
                <button type="button" class="btn btn-outline-light btn3-perfil">Actualización de datos</button>
                </Link>      
              </div>
            </div>
          </div>
        </div>
</div>



</div>

  );
}
export default perfil;
