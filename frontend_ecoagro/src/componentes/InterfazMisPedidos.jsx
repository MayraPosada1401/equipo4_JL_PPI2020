import React from 'react';
import '../Estilos/EstiloMisPedidos.css'

export default function InterfazMisPedidos() {

  return (
    <div className="InterfazMisPedidos">

    <h1 className="titulo1-mispedidos  bg-whiteverdecitovalor rounded Titulocompradorterceraparte" >Tus Pedidos</h1>
    <h3 className="subtitulo1-mispedidos shadow p-3 mb-5 ">Aquí te presentamos los pedidos que tienes de algunos de tus productos</h3>  

    <div className="d-md-flex flex-md-equal w-100  contenedortargetasdemispedidos-campesino">
     
      <div className="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden targeta1-mispedidoscampe">
        <div className="bg-light box-shadow mx-auto targetasfinales-mispedidoscampe">
          <img className="img-targetasfinales2-mispedidoscampe mx-auto" src="https://socialtools.me/wp-content/uploads/2016/04/foto-de-perfil.jpg" alt=""/>
        </div>
        <div className="my-3 py-3">
          <h2 className="display-5 titulo1-targetasfinales-mispedidoscampe">Para: Martina Estrada</h2>
        </div>
        <div className="Productoqueordena-mispedidoscampe mx-auto mt-auto">
          <h5 className="categoria-mispedidoscampe pl-3">Producto:</h5>
          <h3 className="tituloproductoqueordena-pedidoscampe pt-auto pb-2">20 Kilos de Papa Capira</h3>
        </div>
        <div className="fechadeentrega-mispedidoscampe mx-auto mt-3">
          <h5 className="categoria-mispedidoscampe pl-3">Fecha en que se recoge:</h5>
          <h3 className="tituloproductoqueordena-pedidoscampe pt-auto pb-2">29/10/2020</h3>
        </div>
        <div className="lugardeentrega-mispedidoscampe mx-auto mt-3">
          <h5 className="categoria-mispedidoscampe pl-3">Lugar en que se recoge:</h5>
          <h3 className="tituloproductoqueordena-pedidoscampe pt-auto pb-2">Cooperativa del Café</h3>
        </div>
        <div className="personaquerecoge-mispedidoscampe mx-auto mt-3">
          <h5 className="categoria-mispedidoscampe pl-3">Transportador que recoge:</h5>
          <h3 className="tituloproductoqueordena-pedidoscampe pt-auto pb-2">Armando Estrada</h3>
        </div>
        <div className="contactorecogedor-mispedidoscampe mx-auto mt-3">
          <h5 className="categoria-mispedidoscampe pl-3">Teléfono de transportador:</h5>
          <h3 className="tituloproductoqueordena-pedidoscampe pt-auto pb-2">3115762475</h3>
        </div>
      </div>
      
      <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden targeta1-mispedidoscampe">
        <div className="bg-dark box-shadow mx-auto targetasfinales-mispedidoscampe">
            <img className="img-targetasfinales2-mispedidoscampe mx-auto" src="https://www.inboundcycle.com/hubfs/ClaraAlvarez.jpg" alt=""/>
        </div>
        <div className="my-3 p-3">
          <h2 className="display-5 titulo1-targetasfinales2-mispedidoscampe">Para: Clara Alvarez</h2>
        </div>
        <div className="Productoqueordena-mispedidoscampe mx-auto mt-auto">
          <h5 className="categoria-mispedidoscampe pl-3">Producto:</h5>
          <h3 className="tituloproductoqueordena-pedidoscampe pt-auto pb-2">10 Kilos de Mango Tomy</h3>
        </div>
        <div className="fechadeentrega-mispedidoscampe mx-auto mt-3">
          <h5 className="categoria-mispedidoscampe pl-3">Fecha en que se recoge:</h5>
          <h3 className="tituloproductoqueordena-pedidoscampe pt-auto pb-2">18/10/2020</h3>
        </div>
        <div className="lugardeentrega-mispedidoscampe mx-auto mt-3">
          <h5 className="categoria-mispedidoscampe pl-3">Lugar en que se recoge:</h5>
          <h3 className="tituloproductoqueordena-pedidoscampe pt-auto pb-2">Banco Agrario</h3>
        </div>
        <div className="personaquerecoge-mispedidoscampe mx-auto mt-3">
          <h5 className="categoria-mispedidoscampe pl-3">Transportador que recoge:</h5>
          <h3 className="tituloproductoqueordena-pedidoscampe pt-auto pb-2">Cristian Henao</h3>
        </div>
        <div className="contactorecogedor-mispedidoscampe mx-auto mt-3">
          <h5 className="categoria-mispedidoscampe pl-3">Teléfono de transportador:</h5>
          <h3 className="tituloproductoqueordena-pedidoscampe pt-auto pb-2">3016731234</h3>
        </div>
      </div>
     
      <div className="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden targeta1-mispedidoscampe">
        <div className="bg-light box-shadow mx-auto targetasfinales-mispedidoscampe">
           <img className="img-targetasfinales2-mispedidoscampe mx-auto" src="https://image.freepik.com/foto-gratis/hombre-negocios-guapo-posando-vista-frontal_23-2148336822.jpg" alt=""/>
        </div>
        <div className="my-3 py-3">
          <h2 className="display-5 titulo1-targetasfinales-mispedidoscampe">Para: Zéf Platón</h2>
        </div>
        <div className="Productoqueordena-mispedidoscampe mx-auto mt-auto">
          <h5 className="categoria-mispedidoscampe pl-3">Producto:</h5>
          <h3 className="tituloproductoqueordena-pedidoscampe pt-auto pb-2">25 Kilos de Naranja Tangeno</h3>
        </div>
        <div className="fechadeentrega-mispedidoscampe mx-auto mt-3">
          <h5 className="categoria-mispedidoscampe pl-3">Fecha en que se recoge:</h5>
          <h3 className="tituloproductoqueordena-pedidoscampe pt-auto pb-2">06/11/2020</h3>
        </div>
        <div className="lugardeentrega-mispedidoscampe mx-auto mt-3">
          <h5 className="categoria-mispedidoscampe pl-3">Lugar en que se recoge:</h5>
          <h3 className="tituloproductoqueordena-pedidoscampe pt-auto pb-2">Galeria del Pueblo</h3>
        </div>
        <div className="personaquerecoge-mispedidoscampe mx-auto mt-3">
          <h5 className="categoria-mispedidoscampe pl-3">Transportador que recoge:</h5>
          <h3 className="tituloproductoqueordena-pedidoscampe pt-auto pb-2">Felipe Castro</h3>
        </div>
        <div className="contactorecogedor-mispedidoscampe mx-auto mt-3">
          <h5 className="categoria-mispedidoscampe pl-3">Teléfono de transportador:</h5>
          <h3 className="tituloproductoqueordena-pedidoscampe pt-auto pb-2">3216431421</h3>
        </div>
      </div> 

    </div>

    </div>


)};