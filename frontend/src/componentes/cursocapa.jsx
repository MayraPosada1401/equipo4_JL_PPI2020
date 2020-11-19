import React from "react";
import "../Estilos/cursocapa.css";
import cursosubir from "../Imagenes/cursosubir.jpg";
import click from "../Imagenes/click.jpg";
import cursolisto from "../Imagenes/cursolisto.jpg";
import {Link} from 'react-router-dom';

export default function curso() {
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
                    <input type="text" className="form-control" id="name" required/>
                  </div>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Descripción Inicial</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Aquí vas a escribir una reseña breve que identificará a tu curso." rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Información del curso</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Escriba contenidos e información respectiva del cursos." rows="3"></textarea>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label for="name">Fecha del Curso</label>
                    <input type="text" className="form-control" id="name" placeholder="Escriba la fecha de publicación del curso en el formato (año-mes-día)" required/>
                  </div>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Dato Curioso</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Este campo es opcional, puedes escribir un dato curioso del campo colombiano." rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Links</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Aquí podra consignar links para el afianzamiento de contenido del curso." rows="3"></textarea>
                </div>
                <button href="#" className="btn btn-info centroooo col-md-12"><h1 className="tamañoescrt ">Subir curso</h1></button>
            </form>
       <br/>
     <br/>
     <br/>
     </div>
  );
}

