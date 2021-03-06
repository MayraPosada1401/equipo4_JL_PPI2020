
import React from 'react';
import ECOAGRODEFINITIVO1 from '../Imagenes/ECOAGRODEFINITIVO1.png';
import COMPRADOR1 from '../Imagenes/COMPRADOR1.png';
import COMPRADOR2 from '../Imagenes/COMPRADOR2.png';
import comprador3 from '../Imagenes/comprador3.png';
import comp from '../Imagenes/comp.png'
import '../Estilos/Comprasdelcomprador.css'
import { Link } from 'react-router-dom';

function compra() {
  return (
    <div className="fondopanvalor1">
      
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
      <li className="nav-item nav-item normal-nav active">
      <Link to="/conexionescompra"><a className="nav-link" href="">Conexiones <span class="sr-only">(current)</span></a></Link>
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



      <div className="Contenedor"> 
      <h1 className="shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte"> COMPRAS</h1> 
      </div>


<div  className="UBICACION">
        
<div className=" card03 mb-5" >

          <div className=" row no-gutters">
            <div className="col-md-8">
              <img src={comp} className="card-img-top" alt="Responsive image" />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">DATOS DE LA COMPRA</h5>
                <p className="card-text">Llena el siguiente formulario con tus datos para poder agendar tu envío</p>

                <form className="margen03 form03 col-12 col-md-25">
                <div className="margen form-row">
                  <div class="form-group col-md-15">
                    <label for="name">Dirección</label>
                    <input type="text" className="form-control" id="name" required/>
                  </div>
                  <div className="margen form-row">
                  <div class="form-group col-md-15">
                    <label for="name">Identidad</label>
                    <input type="text" className="form-control" id="name" required/>
                  </div>
                  <div className="margen form-row">
                  <div class="form-group col-md-15">
                    <label for="name">Contacto</label>
                    <input type="text" className="form-control" id="name" required/>
                  </div>

                  
            
                </div>
                </div>
                </div>
            
              </form>

              <div class="text-center">
                    <button type="submit" class="btn btn-outline-info">Factura</button>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      
      <div className="shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte izquierdafactur"> FACTURA</div> 
<div className="Colordefondoform">
  <div className="margincom">
  <h1 className="coloytamaño">Número de pedido:</h1>  
  <h1 className="coloytamaño">123</h1>  
    </div>
<br/>

<div className="margincom">
  <h1 className="coloytamaño">Valor a pagar:</h1>  
  <h1 className="coloytamaño">30.000</h1>  
    </div>
<br/>
<div className="margincom">
  <h1 className="coloytamaño">Nombre del usuario:</h1>  
  <h1 className="coloytamaño">Fabiola Narváez</h1>  
    </div>

<div className="margincom">
  <h1 className="coloytamaño">Días habiles de entrega:</h1>  
  <h1 className="coloytamaño">3</h1>  
    </div>
<br/>

<br/>
<br/>

</div>
</div>
</div>
    
    
  
  );
}
export default compra;
