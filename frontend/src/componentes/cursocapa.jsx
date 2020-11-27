import React, {Component} from "react";
import "../Estilos/cursocapa.css";
import axios from 'axios';

export default class curso extends Component{

  constructor(props) {
    super(props);
    this.state ={
        elCurso:{
          nombre_curso: '',
          descripcion_inicial: '',
          informacion_curso: '',
          fecha_curso: '',
          dato_curioso: '',
          links_externos: '',
          tipo_curso: ''
        }
    }
  }

  peticionPostC=async()=>{
    delete this.state.elCurso.id
    await axios.post('https://ecoagro-backend.herokuapp.com/api/nuevocurso', this.state.elCurso)
    .then(res=>{
      //this.peticionPost();
    }).catch(error=>{
      console.log(error.message)
    })
  }

  handleChange=async (e) =>{
    e.persist();
    await this.setState({
      elCurso:{
        ...this.state.elCurso,
        [e.target.name]: e.target.value 
      }
    })
    console.log(this.state.elCurso)
  }
 
 
  render(){
 return (
   <div className="cursito">
     <div className="cursillo contenedor-titulo-cursocapa">
       <h1 className="component-1-text shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte ">SUBIR CURSO</h1>
       <div className="subircurso">
       </div>
     </div>

     <p className="parrafo1-cursocapa">Aquí podrás almacenar información de tu curso para que los campesinos sigan aprendiendo técnicas innovadoras del campo Colombiano. Cuentas con múltiples campos los cuales serán de gran importancia para ofrecer información y conocimientos de manera óptima para el campesino.</p>
     <p className="parrafo1-cursocapa">NOTA: Algunos campos no son obligatorios, en cada uno se especifican los contenidos que deben de ir. Gracias nuevamente.</p>
     <form className=" form-cursocapa col-12 col-md-5">
          
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label for="name">Nombre del Curso</label>
                    <input type="text" className="form-control" id="name" required name="nombre_curso" onChange={this.handleChange} value={this.state.elCurso.nombre_curso}/>
                  </div>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Descripción Inicial</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" name="descripcion_inicial" onChange={this.handleChange} value={this.state.elCurso.descripcion_inicial} placeholder="Aquí vas a escribir una reseña breve que identificará a tu curso." rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Información del curso</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" name="informacion_curso" onChange={this.handleChange} value={this.state.elCurso.informacion_curso} placeholder="Escriba contenidos e información respectiva del cursos." rows="3"></textarea>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label for="name">Fecha del Curso</label>
                    <input type="text" className="form-control" name="fecha_curso" onChange={this.handleChange} value={this.state.elCurso.fecha_curso} id="name" placeholder="Escriba la fecha de publicación del curso en el formato (año-mes-día)" required/>
                  </div>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Dato Curioso</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" name="dato_curioso" onChange={this.handleChange} value={this.state.elCurso.dato_curioso} placeholder="Este campo es opcional, puedes escribir un dato curioso del campo colombiano." rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Links</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" name="links_externos" onChange={this.handleChange} value={this.state.elCurso.links_externos} placeholder="Aquí podra consignar links para el afianzamiento de contenido del curso." rows="3"></textarea>
                </div>
                <div className="form-row">
                  <div className="col-md-12 mb-3">
                    <label for="validationDefault04">Tipo Curso</label>
                    <select className="custom-select" id="validationDefault04" name="tipo_curso" onChange={this.handleChange} value={this.state.elCurso.tipo_curso} required>
                    <option selected disabled value="">Seleccione</option>
                    <option>Pesticidas</option>
                    <option>Emprendimientos</option>
                    <option>Abonos</option>
                    <option>Negocios</option>
                    <option>Fertilizantes</option>
                    <option>Otros</option>
                    </select>
                  </div>
                </div>
                <button href="#" className="btn btn-info centroooo col-md-12" onClick={this.peticionPostC}>Subir curso</button>
            </form>
       <br/>
     <br/>
     <br/>
     </div>
  );
}}

