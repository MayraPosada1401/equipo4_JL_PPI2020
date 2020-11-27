import React, {Component} from 'react';
import '../Estilos/Estiloseleccionaralguncurso.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class InterfazSeleccionarAlgunCurso extends Component {

    constructor(props) {
        //Inicialización del estado y llamado de props
        super(props);
        this.state ={
            dataCursos:[]
        }
    }

    peticionGet=()=>{
        axios.get('https://semana9jl.karolcuellar.repl.co/api/cursos').then(res =>{
            //console.log(res.data);
            this.setState({
                dataCursos: res.data
            })
        }).catch(err =>{
            console.log(err.message)
        })
    }

    componentDidMount(){
        this.peticionGet();
    }
   
    render (){
        const datosCurso = this.state.dataCursos
    return (

    <div className="contenedorprincipal-selecionaralguncurso-campesino">
       

    <div className="contenedor-cards-seleccionaralguncurso">
       
       {datosCurso.map((pet) =>{
           return(
            <div className="position-card1-seleccionaralguncurso">
              <img className="rounded-circle" src="https://www.ecoticias.com/userfiles/2019/Mar_20/238__93_original.jpg" alt="Generic placeholder image" width="140" height="140"/>
              <h2 className="titulocards-seleccionarunodeloscursos">{pet.nombre_curso}</h2>
              <p className="textocards-seleccionarunodeloscursos">{pet.descripcion_inicial}</p>
              <p><Link to="/materialcurso" className="btn btn-secondary" href="#" role="button">Tomar Curso</Link></p>
            </div>
           )
       })}

    </div>

    </div>
)}};