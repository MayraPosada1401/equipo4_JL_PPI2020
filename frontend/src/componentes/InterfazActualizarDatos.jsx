import React from 'react';
import '../Estilos/EstiloActualizarCampe.css';


export default function InterfazActualizarDatos () {
  
  return (

<div>

    <div>
        <h1 className="component-1-text development titulobody" >Actualiza tus Datos</h1>
        <h3 className="component-1-text social subtitulo1">Aquí puedes estar en constante interacción con el manejo de tus datos</h3>
        <p className="component-1-text component-text parrafo1">Para EcoAgro es un placer que pertenezcas a esta familia. Somos conocedores de la importancia de ustedes en nuestros bellos campos colombianos, su trabajo es digno de admirar y ha de ser respetado, esa lucha constante que ustedes enfrentan para nosotros en una gran batalla y son héroes a la vez de nuestro país. Queremos romper ese esquema de que para una buena economía se requiere de un intermediario y estamos agradecidos de que ya hagas parte de ese proceso.</p>
        <p className="component-1-text component-text parrafo1">En esta sección podrás actualizar tus datos, para que los compradores y capacitadores conozcan más de ti y el equipo EcoAgro pueda ofrecerte un servicio de calidad según tus interes.</p>
    </div>

    
            <form className=" form col-12 col-md-5">
                <div className="form-row">
                  <div class="form-group col-md-6">
                    <label for="name">Nombres</label>
                    <input type="text" className="form-control" id="name" required/>
                  </div>
                  <div className="form-group col-md-6">
                    <label for="lastName">Apellidos</label>
                    <input type="text" className="form-control" id="lastName" require/>
                  </div>
                </div>
                <div className="form-group">
                  <label for="inputEmail">Email</label>
                  <input type="email" class="form-control" id="inputEmail" placeholder="email@example.com" required/>
                </div>
                <div className="form-row">
                  <div class="form-group col-md-6">
                    <label for="name">Municipio de Producción</label>
                    <input type="text" className="form-control" id="name" required/>
                  </div>
                  <div className="form-group col-md-6">
                    <label for="lastName">Rol Agrario</label>
                    <input type="text" className="form-control" id="lastName" require/>
                  </div>
                </div>
                <div className="form-row">
                  <div class="form-group col-md-6">
                    <label for="name">Tiempo de experiencia</label>
                    <input type="text" className="form-control" id="name" placeholder="Ingreselo en años" required/>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="validationDefault04">Frecuencia de Producción</label>
                    <select class="custom-select" id="validationDefault04" required>
                    <option selected disabled value="">Seleccione</option>
                    <option>Alta Producción</option>
                    <option>Media Producción</option>
                    <option>Baja Producción</option>
                    </select>
                  </div>
                </div>
                <h3 className="titulobody among">Cambio de Contraseña</h3>
                <div className="form-row">
                  <div class="form-group col-md-6">
                    <label for="name">Contraseña Anterior</label>
                    <input type="text" className="form-control" id="name" required/>
                  </div>
                  <div className="form-group col-md-6">
                    <label for="lastName">Nueva Contraseña</label>
                    <input type="text" className="form-control" id="lastName" require/>
                  </div>
                </div>
                
                <div class="text-center">
                    <button type="submit" class=" btn btn-info text-white col-12">Confirmar</button>
                </div>
            </form>
   
</div>

);
}