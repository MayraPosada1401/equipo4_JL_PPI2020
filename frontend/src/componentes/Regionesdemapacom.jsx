import React, {Component} from 'react';
import ECOAGRODEFINITIVO1 from '../Imagenes/ECOAGRODEFINITIVO1.png';
import '../Estilos/Regionesdemapacom.css';
import COMPRADOR1 from '../Imagenes/COMPRADOR1.png';
import COMPRADOR2 from '../Imagenes/COMPRADOR2.png';
import comprador3 from '../Imagenes/comprador3.png';
import { Link } from 'react-router-dom';
import papa from '../Imagenes/papa.png';
import axios from 'axios';

class andina extends Component{

  constructor(props) {
    //Inicialización del estado y llamado de props
    super(props);
    this.state ={
        dataProductos:[]
    }
}

peticionGet3=()=>{
    axios.get('https://semana9jl.karolcuellar.repl.co/api/productos').then(res =>{
        //console.log(res.data);
        this.setState({
            dataProductos: res.data
        })
    }).catch(err =>{
        console.log(err.message)
    })
}

componentDidMount(){
    this.peticionGet3();
}
  render(){
    const datosProductos = this.state.dataProductos
  return (
    <div className="anecdotadeunahistoria">
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

<div className="cultivoscambiofof" >Cultivos</div>
<div className="diesñosubdecom">Alta producción</div>
<div className="diseñocentrocom">Regiones colombianas</div>

    <div className="fonfeseparacionconllecion7">  
    
    {datosProductos.map((pet3) =>{
           return(
            <div className="cardfree">
            <div className="card-textwer ">
              <div className="portada">
                <img src={papa} alt="" className="imagenproducto-comprador14"/>
              </div>
            <div className="title-total-comprador">   
               <h2>{pet3.nombre_producto}</h2>
               <p>Precio: {pet3.precio} X Lb</p>
               <Link to="/regionesparaconocer"><p className="card-textwer"><button type="button" className="btn btn-inf btn btn-outline-warning">Más info</button></p></Link> 
               <br/> 
               <Link to="/comprasdelcomprador"><p className="card-textwer"><button type="button" className="btn btn-inf btn btn-outline-warning">Comprar</button></p></Link> 
               <br/>
               <Link to="/chatdecompradro"><p className="card-textwer"><button type="button" className="btn btn-inf btn btn-outline-warning">Acuerdo</button></p></Link> 
               <br/>
            </div>
            </div>
         </div>
           )
       })}

      </div>

      <div className="nesparaver">
         <Link to="/compradormapa"><button type="button" class="btn btn-outline-light centroycentro separecionbur"><h1>Mapa</h1></button></Link> 
         <Link to="/app1"><button type="button" class="btn btn-outline-light centroycentro2 separecionbur"><h1>Mas</h1></button></Link> 
      </div>
    
    <br/>
    <br/>
    </div>
    
  );
}}
export default andina;