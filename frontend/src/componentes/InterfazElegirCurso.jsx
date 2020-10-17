import React from 'react';
import '../Estilos/EstiloElegirCurso.css';
import {Link} from 'react-router-dom';


export default function InterfazElegirCurso () {
  
  return (

    <div className="contenedorprincipal-elegircurso-campesino">
        
        <div>
            <h1 className="titulo1-elegircurso-campesino shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte" >Elige un curso con Ecoagro</h1>
            <h3 className="subtitulo-elegircurso-campesino">Aquí te presentamos los cursos a los que puedes acceder</h3>
            <p className="parrafos-elegircurso-campesino">Para EcoAgro es un placer que pertenezcas a esta familia. Somos conocedores de la importancia de ustedes en nuestros bellos campos colombianos, su trabajo es digno de admirar y ha de ser respetado, esa lucha constante que ustedes enfrentan para nosotros en una gran batalla y son héroes a la vez de nuestro país. Queremos romper ese esquema de que para una buena economía se requiere de un intermediario y estamos agradecidos de que ya hagas parte de ese proceso.</p>
            <p className="parrafos-elegircurso-campesino">En esta sección visualizaras los cursos realizados por algunos capacitadores disponibles para ti. Esto con el fin de que puedas mejorar y fortalecer tus procesos de producción y aprendas más para desarrollar una mejor economía agraria.</p>
        </div>
           
        <div className="fondo1-imagencampesinito-elegircurso">       
        <div className="form-group col-md-6 mb-3 contenedor-selectordecurso-campesino">
            <select className="custom-select selectordecurso-campesino" id="validationDefault04">
                <option className="Mensajedeseleccióndecurso-campesino" selected disabled value="">Seleccione</option>
                <option className="opciondecurso-campesino">Negocios Agropecuarios</option>
                <option className="opciondecurso-campesino">Conservación de Suelos</option>
                <option className="opciondecurso-campesino">Formulación de Proyectos</option>
                <option className="opciondecurso-campesino">Abonos Agropecuarios</option>
                <option className="opciondecurso-campesino">Fertlizantes y Pesticidas</option>
                <option className="opciondecurso-campesino">Procesamiento de Productos</option>
            </select>
            <Link to="/seleccionarcurso">
            <button className="botonconfirmarelegircurso-elegircursocampe">Elegir</button>
            </Link>
        </div> 

        </div>

    </div>
)};