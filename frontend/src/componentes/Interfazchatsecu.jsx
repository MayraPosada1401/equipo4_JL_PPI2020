import React, {Component} from 'react';
import '../Estilos/EstiloChatSecun.css';
import axios from 'axios';

export default class InterfazChatSecundario extends Component {

    
    constructor(props) {
        //Inicialización del estado y llamado de props
        super(props);
        this.state ={
            dataConversación:[],
            precioAcuerdo:{
                precio_nuevo: '',
                id_registros: ''
            },
            conversacionUsers:{
                conversacion: '',
                id_registro: ''
            }
        }
    }

    peticionPostA=async()=>{
        delete this.state.precioAcuerdo.id_registros
        await axios.post('https://semana9jl.karolcuellar.repl.co/api/nuevopreciodeacuerdo', this.state.precioAcuerdo)
        .then(res=>{
          //
        }).catch(error=>{
          console.log(error.message)
        })
    }

    peticionPostC=async()=>{
        delete this.state.conversacionUsers.id_registro
        await axios.post('https://semana9jl.karolcuellar.repl.co/api/nuevaconversacion', this.state.conversacionUsers)
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
          },
          conversacionUsers:{
            ...this.state.conversacionUsers,
            [e.target.name]: e.target.value 
          }
        })
        console.log(this.state.precioAcuerdo)
        console.log(this.state.conversacionUsers)
      }

    peticionGetConversación=()=>{
        axios.get('https://semana9jl.karolcuellar.repl.co/api/conversaciones').then(res =>{
            //console.log(res.data);
            this.setState({
                dataConversación: res.data
            })
        }).catch(err =>{
            console.log(err.message)
        })
    }

    componentDidMount(){
        this.peticionGetConversación();
    }

    render(){
        const datosConversacion = this.state.dataConversación
    return (
    
    <div className="ChatSecundario-campe">

      <div className="part1-chatsecundario">
            
            <div className="principaldelchatanterior2-secundario-campe">
            <div className="chatsanteriores-secundario-campe" type="button">
                <div className="contenedorinfocontacto-chat-secundario-campe">
                    <img src="https://socialtools.me/wp-content/uploads/2016/04/foto-de-perfil.jpg" className="img-contacto-chatsecundario" alt="..." />
                    <div>
                      <h4 className="titulonombres-chatprincipal" >Martina Estrada</h4>
                      <p className="textocontacto-chatsecundario">La oferta esta correcta</p>
                    </div>
                </div>   
            </div>
            
            <p className="textocontacto-chatsanteriores-secundario">Escriba el precio pactado aquí</p>
            
            <div className="contenedor2dechat-chatsecundario">
            <div className="form-group-chatsecundario col-md-6">
                <input type="text" className="form-control chatsecundario-inputprecio" required name="precio_nuevo" onChange={this.handleChange} value={this.state.precioAcuerdo.precio_nuevo}/>
                <input type="text" className="chatsecundario-inputprecio-cancelar" required name="id_registros" onChange={this.handleChange} value={this.state.precioAcuerdo.id_registros}/>
            </div>
            <button className="boton-chatsecundario-confirmar" onClick={this.peticionPostA}></button>
            </div> 
            </div>

            <div className="principaldelchatanterior-secundario-campe">
            <div className="chatsanteriores-secundario-campe"  type="button">
                <div className="contenedorinfocontacto-chat-secundario-campe">
                    <img src="https://plataformas.news/online/nota_tudn-lanza-la-marca-mega-futbol-.jpg" className="img-contacto-chatsecundario" alt="..." />
                    <div>
                      <h4 className="titulonombres-chatprincipal" >Erick Valencia</h4>
                      <p className="textocontacto-chatsecundario">Podemos mejorar la oferta</p>
                    </div>
                </div>   
            </div>
            
            <p className="textocontacto-chatsanteriores-secundario">Escriba el precio pactado aquí</p>
            
            <div className="contenedor2dechat-chatsecundario">
            <div className="form-group-chatsecundario col-md-6">
                <input type="text" className="form-control chatsecundario-inputprecio" required/>
            </div>
            <button className="boton-chatsecundario-confirmar"></button>
            </div> 
            </div>

            <div className="principaldelchatanterior-secundario-campe">
            <div className="chatsanteriores-secundario-campe"  type="button">
                <div className="contenedorinfocontacto-chat-secundario-campe">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Personas_introvertidas_buenos_lideres.jpg" className="img-contacto-chatsecundario" alt="..." />
                    <div>
                      <h4 className="titulonombres-chatprincipal" >Mauricio Reyes</h4>
                      <p className="textocontacto-chatsecundario">¿Cómo fueron los procesos de cosecha?</p>
                    </div>
                </div>   
            </div>
            
            <p className="textocontacto-chatsanteriores-secundario">Escriba el precio pactado aquí</p>
            
            <div className="contenedor2dechat-chatsecundario">
            <div className="form-group-chatsecundario col-md-6">
                <input type="text" className="form-control chatsecundario-inputprecio" required/>
            </div>
            <button className="boton-chatsecundario-confirmar"></button>
            </div> 
            </div>


            
         </div>
      
         
         <div className="contenedor-chatsecundario-campe">
         <h3 className="titulos-fechas-chatsecundario">19/07/2020</h3>
         {datosConversacion.map((chatConver) =>{
           return(
            <div className="recuadromensaje-chatsecundario-campe">
                <h4 className="nombreusuario-chatsecundario-campe">Usuario: {chatConver.id_registro}</h4>
                <p className="parrafo-conversación-chatsecundario-campe">{chatConver.conversacion}</p>
            </div>        
             )})}

            <div className="contenedor2dechat-perfilsecundario-campe">
            <div className="form-group-chatsecundario-campe col-md-10">
                <input type="text" className="form-control border border-warning border-input-chatsecundario-campe" required name="conversacion" onChange={this.handleChange} value={this.state.conversacionUsers.conversacion}/>
                <input type="text" className="chatsecundario-inputprecio-cancelar" required name="id_registro" onChange={this.handleChange} value={this.state.conversacionUsers.id_registro}/>
            </div>
            <button className="boton-enviarmensaje-chatsecundario-campe" onClick={this.peticionPostC}></button>
            </div> 
         </div>
        

        
    </div>

    );}}