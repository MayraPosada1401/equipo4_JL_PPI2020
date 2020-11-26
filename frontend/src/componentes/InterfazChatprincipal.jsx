import React, {Component} from 'react';
import '../Estilos/EstiloChatPrincipal.css';
import Fresa from '../Imagenes/strawberry.png';
import Manzana from '../Imagenes/apple.png';
import Uva from '../Imagenes/grapes.png';
import Mango from '../Imagenes/mango.png';
import Pera from '../Imagenes/pera.png';
import Piña from '../Imagenes/pineapple.png';
import Sandia from '../Imagenes/sandia.png';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class InterfazChatPrincipal extends Component {
    
    constructor(props) {
        //Inicialización del estado y llamado de props
        super(props);
        this.state ={
            precioAcuerdo:{
                precio_nuevo: ''
              }
        }
    }

    peticionPostA=async()=>{
       //delete this.state.precioAcuerdo.id_registros
        await axios.post('https://semana9jl.karolcuellar.repl.co/api/nuevopreciodeacuerdo', this.state.precioAcuerdo)
        .then(res=>{
          //
        }).catch(error=>{
          console.log(error.message)
        })
      }
    
      handleChange=async (e) =>{
        e.persist();
        await this.setState({
          precioAcuerdo:{
            ...this.state.precioAcuerdo,
            [e.target.name]: e.target.value 
          }
        })
        console.log(this.state.precioAcuerdo)
      }

    render(){
        
    return (
    
    <div className="ChatPrincipal">

      <div className="part1-chatprincipal">
            
            <div className="principaldelasprincipalesdelchatanterior2">
            <Link to="/chatprivadocampesino" className="chatsanteriores text-decoration-none">
            <div type="button">
                <div className="contenedorinfocontacto-chat">
                    <img src="https://socialtools.me/wp-content/uploads/2016/04/foto-de-perfil.jpg" className="img-contacto-chatprincipal" alt="..." />
                    <div>
                      <h4 className="titulonombres-chatprincipal-campesino" >Martina Estrada</h4>
                      <p className="textocontacto-chatprincipal">La oferta esta correcta</p>
                    </div>
                </div>   
            </div>
            </Link>
            
            <p className="textocontacto-chatsanteriores">Escriba el precio pactado aquí</p>
            
            <div className="contenedor2dechat-chatprincipal">
            <div className="form-group-chatprincipal ">
                <input type="text" className="form-control chatprincipal-inputprecio" required="" name="precio_nuevo" onChange={this.handleChange} value={this.state.precioAcuerdo.precio_nuevo}/>
            </div>
            <button className="boton-chatprincipal-confirmar" onClick={this.peticionPostA}></button>
            </div> 
            </div>

            <div className="principaldelasprincipalesdelchatanterior">
            <div className="chatsanteriores"  type="button">
                <div className="contenedorinfocontacto-chat">
                    <img src="https://plataformas.news/online/nota_tudn-lanza-la-marca-mega-futbol-.jpg" className="img-contacto-chatprincipal" alt="..." />
                    <div>
                      <h4 className="titulonombres-chatprincipal-campesino" >Erick Valencia</h4>
                      <p className="textocontacto-chatprincipal">Podemos mejorar la oferta</p>
                    </div>
                </div>   
            </div>
            
            <p className="textocontacto-chatsanteriores">Escriba el precio pactado aquí</p>
            
            <div className="contenedor2dechat-chatprincipal">
            <div className="form-group-chatprincipal">
                <input type="text" className="form-control chatprincipal-inputprecio" required=""/>
            </div>
            <button className="boton-chatprincipal-confirmar"></button>
            </div> 
            </div>

            <div className="principaldelasprincipalesdelchatanterior">
            <div className="chatsanteriores"  type="button">
                <div className="contenedorinfocontacto-chat">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Personas_introvertidas_buenos_lideres.jpg" className="img-contacto-chatprincipal" alt="..." />
                    <div>
                      <h4 className="titulonombres-chatprincipal-campesino" >Mauricio Reyes</h4>
                      <p className="textocontacto-chatprincipal">¿Cómo fueron los procesos de cosecha?</p>
                    </div>
                </div>   
            </div>
            
            <p className="textocontacto-chatsanteriores">Escriba el precio pactado aquí</p>
            
            <div className="contenedor2dechat-chatprincipal">
            <div className="form-group-chatprincipal">
            <input type="text" className="form-control chatprincipal-inputprecio" required=""/>
            </div>
            <button className="boton-chatprincipal-confirmar"></button>
            </div> 
            </div>
            
         </div>
         <div className="contenedor-chatprincipal">
             <img src={Fresa} className="img-fruta-chatprincipal img-fresa-chatprincipal" alt=""/>
             <img src={Manzana} className="img-fruta-chatprincipal img-manzana-chatprincipal" alt=""/>
             <img src={Uva} className="img-fruta-chatprincipal img-uva-chatprincipal" alt=""/>
             <img src={Mango} className="img-fruta-chatprincipal img-mango-chatprincipal" alt=""/>
             <img src={Pera} className="img-fruta-chatprincipal img-pera-chatprincipal" alt=""/>
             <img src={Piña} className="img-fruta-chatprincipal img-piña-chatprincipal" alt=""/>
             <img src={Sandia} className="img-fruta-chatprincipal img-sandia-chatprincipal" alt=""/>
             <img src="https://i.pinimg.com/originals/ee/f1/9d/eef19dfeb18e85ca5ab7cfbcd46e86cb.png" className="imagen-campesinito-chatprincipal" alt=""/>
         </div>

        
    </div>

    );}}