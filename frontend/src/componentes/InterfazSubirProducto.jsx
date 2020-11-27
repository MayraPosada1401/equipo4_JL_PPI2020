import React, {Component} from 'react';
import '../Estilos/EstiloSubirProducto.css';
import axios from 'axios';

export default class InterfazSubirProducto extends Component {

  constructor(props) {
    //Inicialización del estado y llamado de props
    super(props);
    this.state ={
        //dataSubirProducto:[],
        elProducto:{
          nombre_producto: '',
          tipo_producto: '',
          descripcion: '',
          municipio_produccion: '',
          precio: '',
          tipo_producion: '',
          region_produccion: '',
          descripcion_precio: ''
        }
    }
  }

  peticionPostP=async()=>{
    //delete this.state.elProducto.id
    await axios.post('https://ecoagro-backend.herokuapp.com/api/nuevoproducto', this.state.elProducto)
    .then(res=>{
      //this.peticionPost();
    }).catch(error=>{
      console.log(error.message)
    })
  }

  /*peticionPost=()=>{
    this.setState({
      dataSubirProducto: !this.state.dataSubirProducto
  })}*/

  handleChange=async (e) =>{
    e.persist();
    await this.setState({
      elProducto:{
        ...this.state.elProducto,
        [e.target.name]: e.target.value 
      }
    })
    console.log(this.state.elProducto)
  }

    render(){
  
    return (
    <div className="Perfil">

      <div>
        <h1 className="component-1-text development-subirproducto titulobody-subirproducto shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte" >Sube tu producto</h1>
        <h3 className="component-1-text social-subirproducto subtitulo1">Aquí te presentamos los campos que debes de llenar para subir tu producto</h3>
        <p className="component-1-text component-text-subirproducto parrafo1-subirproducto">Para EcoAgro es un placer que pertenezcas a esta familia. Somos conocedores de la importancia de ustedes en nuestros bellos campos colombianos, su trabajo es digno de admirar y ha de ser respetado, esa lucha constante que ustedes enfrentan para nosotros en una gran batalla y son héroes a la vez de nuestro país. Queremos romper ese esquema de que para una buena economía se requiere de un intermediario y estamos agradecidos de que ya hagas parte de ese proceso.</p>
        <p className="component-1-text component-text-subirproducto parrafo1-subirproducto">En esta sección deberas rellenar algunos campos, para que tu producto sea publicado en la interfaz de los compradores y así puedas promocionar y vender cada uno de tus producidos</p>
      </div>

      <div className="part1-subirproducto">
            
      <div className="Botones">
                <div>
                <button className="btn btn-warning btn-2-subirproducto" type="file"></button>
                <button type="submit" className=" btn btn-outline-warning  btn2-subriproducto">Subir Imagen de Producto</button>
                </div>   
                <div>
                <a href="#" className="btn  btn-warning btn-2-subirproducto btn-config-img-subirproducto"></a>
                <button type="submit" className=" btn btn-outline-warning  btn2-subriproducto">Subir Imagen de Proceso</button>
                </div>   
            </div>

            <div className="verticalLinea-subirproducto"></div>
      
            <form className=" form1-subirproducto col-12 col-md-5">
                <h2 className="titulobody-subirproducto config-title2-subirproducto">Campos a LLenar</h2>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="name">Nombre del producto</label>
                    <input type="text" className="form-control" id="name" name="nombre_producto" onChange={this.handleChange} value={this.state.elProducto.nombre_producto} required/>
                  </div>
                  <div className="form-group col-md-6">
                    <label for="lastName">Tipo de Producto</label>
                    <input type="text" className="form-control" id="lastName" name="tipo_producto" onChange={this.handleChange} value={this.state.elProducto.tipo_producto} placeholder="Cítrico, Tuberculo, etc" require/>
                  </div>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Descripción del producto</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" name="descripcion" onChange={this.handleChange} value={this.state.elProducto.descripcion} rows="3"></textarea>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="name">Municipio de Producción</label>
                    <input type="text" className="form-control" id="name" name="municipio_produccion" onChange={this.handleChange} value={this.state.elProducto.municipio_produccion} required/>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label for="validationDefault04">Tipo de Producción</label>
                    <select className="custom-select" id="validationDefault04" name="tipo_producion" onChange={this.handleChange} value={this.state.elProducto.tipo_producion} required>
                    <option selected disabled value="">Seleccione</option>
                    <option>Alta Producción</option>
                    <option>Baja Producción</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <label for="validationDefault04">Región de Producción</label>
                    <select className="custom-select" id="validationDefault04" name="region_produccion" onChange={this.handleChange} value={this.state.elProducto.region_produccion} required>
                    <option selected disabled value="">Seleccione</option>
                    <option>Andina</option>
                    <option>Caribe</option>
                    <option>Amazónica</option>
                    <option>Orinoquía</option>
                    <option>Insular</option>
                    <option>Pacífica</option>
                    </select>
                  </div>
                </div>
                <h3 className="titulobody-subirproducto among">Precio del Producto</h3>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label for="name">Ingrese precio (Escribalo sin comas ni puntos Ej: 1200)</label>
                    <input type="text" className="form-control" id="name" name="precio" onChange={this.handleChange} value={this.state.elProducto.precio} placeholder="Ingreselo por libras" required/>
                  </div>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Descripción del precio</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" name="descripcion_precio" onChange={this.handleChange} value={this.state.elProducto.descripcion_precio} placeholder="Este campo no es obligatorio. Aquí puede escribir las razones por las cuales asignó ese precio" rows="3"></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className=" btn btn-info text-white col-12 btn-padding-confirmar-subirproducto" onClick={this.peticionPostP}>Confirmar Producto</button>
                </div>
            </form>

        </div>
    </div>

    );}}