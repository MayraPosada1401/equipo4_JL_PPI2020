import React, {Component} from 'react';
import ECOAGRODEFINITIVO1 from '../Imagenes/ECOAGRODEFINITIVO1.png';
import Canasta from '../Imagenes/Canasta.png';
import carrusel1 from '../Imagenes/carrusel1.png';
import carrusel2 from '../Imagenes/carrusel2.png';
import carrusel3 from '../Imagenes/carrusel3.png';
import CAMPO2 from '../Imagenes/CAMPO2.jpg';
import procesoecoagro from '../Imagenes/procesoecoagro.png';
import { Link } from 'react-router-dom';
import '../Estilos/Registro.css';
import axios from 'axios';

class Transportador extends Component {

  constructor(props) {
    //Inicialización del estado y llamado de props
    super(props);
    this.state ={
        losRegistros:{
          nombre: '',
          apellido: '',
          usuario: '',
          email: '',
          contraseña: '',
          confirmar_contraseña: '',
          departamento: '',
          tipo_usuario: '',
          estrato: '',
          genero: ''
        }
    }
  }

  peticionPostR=async()=>{
    //delete this.state.losRegistros.id
    await axios.post('https://semana9jl.karolcuellar.repl.co/api/ingresonuevoregistro', this.state.losRegistros)
    .then(res=>{
      //
    }).catch(error=>{
      console.log(error.message)
    })
  }

  handleChange=async (e) =>{
    e.persist();
    await this.setState({
      losRegistros:{
        ...this.state.losRegistros,
        [e.target.name]: e.target.value 
      }
    })
    console.log(this.state.losRegistros)
  }

  render(){

    return (
        <div className="App">
          <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/"><a className="navbar-brand"><img src={ECOAGRODEFINITIVO1} className="img-iconoheadercampe" /></a></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      
        <li className="nav-item normal-nav nav-item active">
        <Link to="/transportador"> <a class="nav-link" href="#">Transportador</a></Link>
        </li>
        <li className="nav-item normal-nav nav-item active">
        <Link to="/quienes"><a className="nav-link" href="#">Contactanos</a></Link> 
      </li>
        <li className="nav-item normal-nav nav-item active">
          <Link to=""><a className="nav-link  " href="#">Conocenos</a></Link>
        </li>
        <li className="nav-item normal-nav nav-item active">
        <Link to="/registro"><a className="nav-link  " href="#">¿No te haz registrado aún?</a></Link>
        </li>
       
        <a type="button" class="btn1-header btn-info1"></a>
      <Link to="/iniciosesiongeneral"><button type="button" class="btn btn-info btn-ingresar-pagina">Ingresar</button></Link>
      
      <li className="nav-item">
        </li>
      </ul>
    </div>
  </nav>
    </div>  
      
  
  <div className="Eiminaciondecarrusel">
  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
     
      <ol className="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
  
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={carrusel1} className="d-block w-100" alt="..."/>
        </div>
      <div className="carousel-item">
        <img src={carrusel2} className="d-block w-100" alt="..."/>
        
        </div>
      <div className="carousel-item">
        <img src={carrusel3} className="d-block w-100" alt="..."/>
        
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
  
  </div></div>
  <div className="contenedorpararegistro">
  
  <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Nombre</label>
      <input type="text" class="form-control" id="inputEmail4" name="nombre" onChange={this.handleChange} value={this.state.losRegistros.nombre}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Apellido</label>
      <input type="text" class="form-control" id="inputPassword4" name="apellido" onChange={this.handleChange} value={this.state.losRegistros.apellido}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Nombre de Usuario</label>
      <input type="text" class="form-control" id="inputEmail4" name="usuario" onChange={this.handleChange} value={this.state.losRegistros.usuario}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Email</label>
      <input type="email" class="form-control" id="inputPassword4" name="email" onChange={this.handleChange} value={this.state.losRegistros.email}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Contraseña</label>
      <input type="password" class="form-control" id="inputEmail4" name="contraseña" onChange={this.handleChange} value={this.state.losRegistros.contraseña}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Confirme Contraseña</label>
      <input type="password" class="form-control" id="inputPassword4" name="confirmar_contraseña" onChange={this.handleChange} value={this.state.losRegistros.confirmar_contraseña}/>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Departamento</label>
      <input type="text" class="form-control" id="inputCity" name="departamento" onChange={this.handleChange} value={this.state.losRegistros.departamento}/>
    </div>
    <div class="form-group col-md-2">
      <label for="inputState">Elija su tipo de usuario</label>
      <select id="inputState" class="form-control" name="tipo_usuario" onChange={this.handleChange} value={this.state.losRegistros.tipo_usuario}>
        <option selected>Tipo de usuario</option>
        <option>Campesino</option>
        <option>Comprador</option>
        <option>Capacitador</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Estrato</label>
      <input type="text" class="form-control" id="inputZip" name="estrato" onChange={this.handleChange} value={this.state.losRegistros.estrato}/>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Género</label>
      <select id="inputState" class="form-control" name="genero" onChange={this.handleChange} value={this.state.losRegistros.genero}>
        <option selected>Género</option>
        <option>Femenino</option>
        <option>Masculino</option>
        <option>No especificado</option>
      </select>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <label class="form-check-label" for="gridCheck">
       Al rellenar el formulario usted acepta el almacenamiento de información protegida bajo la <a href="https://actualicese.com/ley-1266-de-31-12-2008/">ley 1266 de Habeas Data</a>
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary margin-formulario-registro-usuarios" onClick={this.peticionPostR}>Registrarse</button>
</form>
</div>
  </div> 


      );
    }}
    export default Transportador;