import React from "react";
import "../Estilos/formulariocapa.css";
import { Link } from "react-router-dom";

export default function formulario() {
 return (
   <div className="actualizacion">
     <h1>ACTUALIZACION DE DATOS</h1>

     <form className="formulario col-12 col-md-5">
       <div className="form-row">
         <div class="formu col-md-6">
           <label for="name">Nombres</label>
           <input type="text" className="form-control" id="name" required />
         </div>
         <div className="formu col-md-6">
           <label for="lastName">Apellidos</label>
           <input type="text" className="form-control" id="lastName" require />
         </div>
       </div>
       <div className="formu">
         <label for="inputEmail">Email</label>
         <input
           type="email"
           class="form-control"
           id="inputEmail"
           placeholder="email@example.com"
           required
         />
       </div>
       <div className="form-row">
         <div className="formu col-md-6">
           <label for="name">Municipio de Enseñanza</label>
           <input type="text" className="form-control" id="name" required />
         </div>
         <div className="formu col-md-6">
           <label for="lastName">Rol </label>
           <input type="text" className="form-control" id="lastName" require />
         </div>
       </div>
       <div className="form-row">
         <div class="formu col-md-6">
           <label for="name">Tiempo de experiencia</label>
           <input
             type="text"
             className="form-control"
             id="name"
             placeholder="Ingreselo en años"
             required
           />
         </div>
         <div class="col-md-6 mb-3">
           <label for="validationDefault04">Frecuencia de Enseñanza</label>
           <select class="custom-select" id="validationDefault04" required>
             <option selected disabled value="">
               Seleccione
             </option>
             <option>Alta Enseñanza</option>
             <option>Media Enseñanza</option>
             <option>Baja Enseñanza</option>
           </select>
         </div>
       </div>
       <h3 className="titulobody among">Cambio de Contraseña</h3>
       <div className="form-row">
         <div class="formu col-md-6">
           <label for="name">Contraseña Anterior</label>
           <input type="text" className="form-control" id="name" required />
         </div>
         <div className="formu col-md-6">
           <label for="lastName">Nueva Contraseña</label>
           <input type="text" className="form-control" id="lastName" require />
         </div>
       </div>

       <div className="text-center">
         <button type="submit" class="comfirmar text-black col-12">
           Confirmar
         </button>
       </div>
     </form>
   </div>
 );
}

