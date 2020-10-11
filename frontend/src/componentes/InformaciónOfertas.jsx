import React from 'react';
import '../Estilos/EstiloInformaciónOfer.css';
import Vertical from '../Imagenes/vertical-line.png';

export default function InterfazInformaciónOfertas() {
  
    return (
    <div className="Perfil">

      <div>
        <h1 className="component-1-text development titulobody" >Sube tu producto</h1>
        <h3 className="component-1-text social subtitulo1">Aquí te presentamos los campos que debes de llenar para subir tu producto</h3>
        <p className="component-1-text component-text parrafo1">Para EcoAgro es un placer que pertenezcas a esta familia. Somos conocedores de la importancia de ustedes en nuestros bellos campos colombianos, su trabajo es digno de admirar y ha de ser respetado, esa lucha constante que ustedes enfrentan para nosotros en una gran batalla y son héroes a la vez de nuestro país. Queremos romper ese esquema de que para una buena economía se requiere de un intermediario y estamos agradecidos de que ya hagas parte de ese proceso.</p>
        <p className="component-1-text component-text parrafo1">En esta sección deberas rellenar algunos campos, para que tu producto sea publicado en la interfaz de los compradores y así puedas promocionar y vender cada uno de tus producidos</p>
      </div>

      <div className="part1">
            
            <div className="Botones">
                <div>
                <a href="#" className="btn btn-primary"></a>
                <button type="submit" class=" btn btn-outline-warning col-10 btn2">Subir Imagen de Producto</button>
                </div>   
                <div>
                <a href="#" className="btn btn-primary btn-config-img"></a>
                <button type="submit" class=" btn btn-outline-warning col-10 btn2">Subir Imagen de Proceso</button>
                </div>   
            </div>

            <div class="verticalLinea"></div>
      
            <form className=" form1 col-12 col-md-5">
                <h2 className="titulobody config-title2">Campos a LLenar</h2>
                <div className="form-row">
                  <div class="form-group col-md-6">
                    <label for="name">Nombre del producto</label>
                    <input type="text" className="form-control" id="name" required/>
                  </div>
                  <div className="form-group col-md-6">
                    <label for="lastName">Tipo de Producto</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Cítrico, Tuberculo, etc" require/>
                  </div>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Descripción del producto</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-row">
                  <div class="form-group col-md-6">
                    <label for="name">Municipio de Producción</label>
                    <input type="text" className="form-control" id="name" required/>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="validationDefault04">Tipo de Producción</label>
                    <select class="custom-select" id="validationDefault04" required>
                    <option selected disabled value="">Seleccione</option>
                    <option>Alta Producción</option>
                    <option>Baja Producción</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div class="col-md-6 mb-3">
                    <label for="validationDefault04">Región de Producción</label>
                    <select class="custom-select" id="validationDefault04" required>
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
                <h3 className="titulobody among">Precio del Producto</h3>
                <div className="form-row">
                  <div class="form-group col-md-6">
                    <label for="name">Ingrese precio</label>
                    <input type="text" className="form-control" id="name" placeholder="Ingreselo por libras" required/>
                  </div>
                  <div className="form-group col-md-6">
                    <label for="lastName">Confime Precio</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Ingreselo por libras" require/>
                  </div>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Descripción del precio</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Este campo no es obligatorio. Aquí puede escribir las razones por las cuales asignó ese precio" rows="3"></textarea>
                </div>
                <div class="text-center">
                    <button type="submit" class=" btn btn-info text-white col-12 btn-padding-confirmar">Confirmar Producto</button>
                </div>
            </form>

         
        </div>

        <center>
    <iframe className="chat" src="http://www.canalchat.org/chatear/webchat.php?canal=html">
    </iframe><br /><a href="http://www.canalchat.org/" title="chat gratis"><strong>canalchat.org</strong></a></center>
    </div>

    );}



