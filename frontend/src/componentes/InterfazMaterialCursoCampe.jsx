import React, {Component} from 'react';
import '../Estilos/EstiloMaterialCursoCampe.css';
import axios from 'axios';

export default class InterfazMaterialCursoCampe extends Component {

  constructor(props) {
    //Inicialización del estado y llamado de props
    super(props);
    this.state ={
        dataInfoCurso:[]
    }
}

peticionGet2=()=>{
    axios.get('https://semana9jl.karolcuellar.repl.co/api/curso/:id').then(res =>{
        console.log(res.data);
        this.setState({
          dataInfoCurso: res.data
        })
    }).catch(err =>{
        console.log(err.message)
    })
}

componentDidMount(){
    this.peticionGet2();
}

render (){
  const datosInfo = this.state.dataInfoCurso
return (
    
    <div className="MaterialCursoCampe2">
            <div className="blog-main">
            <h1 className="border-bottom titulodelcurso-materialcursocampe">
            pet2.nombre_curso
            </h1>
  
            <div className="blog-post-1-materialcursocampe">
               <div>
               <h2 className="blog-post-title1-materialcursocampe font-italic">¿Cuánto puedo invertir por un pesticida?</h2>
           <p className="blog-post-meta">pet2.fecha_curso</p>
  
              <p className="parrafosdematerialcursocampe">Al momento de comprar un pesticida muchas veces nos preguntamos si su precio influye en su calidad y si en realidad es óptimo para el cuidado de nuestros cultivos, por lo cual nos inclinamos por unos precios y en realidad al momento de probarlo nos damos cuenta de que no son tan buenos y benéficos para el desarrollo de nuestros cultivos y esto nos causa un dolor de cabeza.</p>
              <hr/>
              <p className="parrafosdematerialcursocampe">Hay muchos aspectos que se deben de tener en cuenta para comprar pesticidas que nos permitan fortalecer las cosechas y su producción. El precio no siempre es algo que defina la calidad y la forma en que el pesticida va a influir para un desarrollo de productos eficiente. Muchas veces los pesticidas económicos sirven más que los costosos, pero es por los componentes que contienen los cuales influyen de manera diversa en los cultivos.</p>
              <p className="parrafosdematerialcursocampe">No te sientas mal si aún no dominas los mercados agrícolas especializados en pesticidas, todo se trata de un proceso el cual vas a llevar a cabo en este curso.</p>
              <h3 className= "blog-post-title1-materialcursocampe font-italic">Los Errores y Cascaras a la Hora de Comprar</h3>
              <p className="parrafosdematerialcursocampe">En esta pequeña introducción se mostraran esos errores cotidianos que se enfrentan en el mercado agrícola a la hora de invertir por un pesticida, el cual muchas veces fue juzgado por su precio antes que por sus beneficios y calidad.</p>
              <ul>
                <li className="parrafosdematerialcursocampe">Identificación errónea o tardía de la plaga.</li>
                <li className="parrafosdematerialcursocampe">Considerar que los pesticidas son inocuos, y no tóxicos.</li>
                <li className="parrafosdematerialcursocampe">Almacenamiento incorrecto de pesticidas.</li>
                <li className="parrafosdematerialcursocampe">No utilizar equipos de protección, o utilización errónea.</li>
              </ul>
               </div> 
              
           
          <aside className="blog-sidebar-materialcursocampe">
            <div className="bg-light rounded">
              <h4 className="font-italic padding-datocurioso-materialcursocampe">Dato Curioso</h4>
              <p className="parrafosdematerialcursocampe padding-datocurioso-materialcursocampe">Las fresas son las frutas con más pesticidas, en cantidad y en variedad -36 pesticidas diferentes son utilizados en estas deliciosas frutas-. Esto hace que casi el 90% de la producción muestre signos de químicos por encima del nivel saludable. Otros frutos rojos y bayas tienen similares cantidades, aunque los niveles de las fresas son realmente alarmantes.</p>
            </div>
  
            <div>
              <h4 className="font-italic padding-datocurioso-materialcursocampe">Documentación</h4>
              <ol className="list-unstyled mb-0">
                <li className="padding-listas-materialcursocampe"><a href="#">Mejoresmarcasdepesticidas.pdf</a></li>
                <li className="padding-listas-materialcursocampe"><a href="#">Tiposdepesticidas.docx</a></li>
                <li className="padding-listas-materialcursocampe"><a href="#">Pesticidaseconómicos.docx</a></li>
                <li className="padding-listas-materialcursocampe"><a href="#">NoticiaPesticida.png</a></li>
                <li className="padding-listas-materialcursocampe"><a href="#">ExplicaciónInfluenciapesticidas.mp4</a></li>
                <li className="padding-listas-materialcursocampe"><a href="#">AudioExpositivopesticidas.mp3</a></li>
                <li className="padding-listas-materialcursocampe"><a href="#">Influenciaeconómicadeunpesticida.pdf</a></li>
              </ol>
            </div>
  
            <div className="margin-links-documentoscursocampe">
              <h4 className="font-italic padding-datocurioso-materialcursocampe">Links Externos</h4>
              <ol className="list-unstyled">
                <li className="padding-listas-materialcursocampe"><a href="#">Video de Youtube de uso de Pesticidas</a></li>
                <li className="padding-listas-materialcursocampe"><a href="#">Noticia: Desarrollo de Pesticidas orgánicos y económicos</a></li>
                <li className="padding-listas-materialcursocampe"><a href="#">Texto de uso de pesticidas económicos para plagas</a></li>
              </ol>
            </div>
          </aside> 
         </div>
        </div>

    </div>  
    
)}};