import React from 'react';
import '../Estilos/EstiloPerfil.css';

export default function InterfazPerfil() {
  
    return (
    <div className="Perfil">

      <div>
        <h1 className="component-1-text development titulobody" >Bienvenido a tu perfil de EcoAgro</h1>
        <h3 className="component-1-text social subtitulo1">Aquí te presentamos las opciones que tienes para mayor accesibilidad a contenidos de Ecoagro</h3>
        <p className="component-1-text component-text parrafo1">Para EcoAgro es un placer que pertenezcas a esta familia. Somos conocedores de la importancia de ustedes en nuestros bellos campos colombianos, su trabajo es digno de admirar y ha de ser respetado, esa lucha constante que ustedes enfrentan para nosotros en una gran batalla y son héroes a la vez de nuestro país. Queremos romper ese esquema de que para una buena economía se requiere de un intermediario y estamos agradecidos de que ya hagas parte de ese proceso.</p>
        <p className="component-1-text component-text parrafo1">En esta sección visualizaras y eligiras de acuerdo a tu necesidad las opciones de perfil. Estas opciones estan orientadas a tu bienestar y por supuesto potecializando nuestro objetivo. Te recordamos que si tienes alguna duda puedes irte a la opción de contacto e interactuar más con el grupo EcoAgro, con el fin de que obtengan un mejor servicio y te sientas comodo en el aplicativo. A continuación, se mostraran los accesos que desde tu perfil tienes disponibles</p>
      </div>

      <div className="found-4">
        <h2 className="titulo titulobody">Deseo Cambiar mi foto de Perfil</h2>
        <h3 className="titulodato subtitulo1">Recomendaciones generales</h3>
      </div>
        <div className="part1">
            <div>
            <a href="#" className="btn btn-primary"></a>
            <button type="button" class="btn btn-info btn2">Cambiar foto de perfil</button>
            </div>
           

         <ul className="list-unstyled">
            <li className="media">
                <div class="media-body parrafo1">
                    <h5 className="mt-0 mb-1 ">Pon una foto clara donde se aprecie tu rostro</h5>
                   Los diferentes compradores podran conocer quien eres y van a sentirse más seguro al conocer quien es el productor encargado de su producto. Tenga en cuenta que es más comodo conocer con quienes interactuamos
                </div>
            </li>
            <li className="media my-4">
                <div className="media-body parrafo1">
                    <h5 className="mt-0 mb-1">En caso de no subir una foto</h5>
                    Comprendemos en caso de que no desees subir tu foto, como equipo EcoAgro te recomendamos que pongas visibles tus valoraciones, para que los diversos compradores conozcan abiertamente como llevas los procesos. Ya que como no conocen quien eres, tus valoraciones les dará una imagen
                </div>
            </li>
            <li className="media">
                <div className="media-body parrafo1">
                    <h5 className="mt-0 mb-1">¿Puedo poner cualquier imagen?</h5>
                    Claro que se puede, mientras no vulnere e infrinja lo establecido por el equipo EcoaAgro, teniedno en cuenta que no debe de atentar contra la integridad de un humano. De emplear una imagen que violente ciertas políticas se vera sansionado o expulsado por el equipo. Recuerde que todo lo que hacemos es por ustedes y no se busca afectar a alguien
                </div>
            </li>
         </ul>
        </div>
       

       <h2 className="titulo-option titulobody found-5">Mis Opciones</h2>
       
       <div  className="cards">
        
        <div className="card0 mb-5" >
          <div className="row no-gutters">
            <div className="col-md-8">
              <img src="https://images.squarespace-cdn.com/content/v1/56d4d4819f72665658c25066/1531244407408-79KUX7WMDBI7S4JIFIVB/ke17ZwdGBToddI8pDm48kHhlTY0to_qtyxq77jLiHTtZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7T-j82ScS_xjTqFYGqFrT72qZ_E0ELtHpOZiWcSG1QwIMeEVreGuQ8F95X5MZTW1Jw/actualizar.png" className="card-img-top" alt="..." />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">Actualizar Datos</h5>
                <p className="card-text">Aquí podras hacer cambios y estar en constante actualización de tu información para un mejor servicio</p>
                <button type="button" class="btn btn-outline-warning btn-info btn3">Actualizar Datos</button>
              </div>
            </div>
          </div>
        </div>

        <div className="card0 mb-5" >
          <div className="row no-gutters">
            <div className="col-md-8">
              <img src="https://images.vexels.com/media/users/3/185791/isolated/preview/27c69d1413163918103a032d4951213e-kawaii-gui--o-de-aguacate-by-vexels.png" className="card-img-top img-orange" alt="..." />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">Deseo Subir un producto</h5>
                <p className="card-text">Aquí podras montar la información del producto que deseas vender para que sea vista por el público</p>
                <button type="button" class="btn btn-outline-warning btn-info btn3">Subir Producto</button>
              </div>
            </div>
          </div>
        </div>

        <div className="card0 mb-5" >
          <div className="row no-gutters">
            <div className="col-md-8">
              <img src="https://images.vexels.com/media/users/3/200093/isolated/lists/596f0d8cb733b17268752d044976f102-icono-de-bolsa-de-compras.png" className="card-img-top" alt="..." />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">Mis ofertas por compradores</h5>
                <p className="card-text">Aquí visualizaras las ofertas economicas ofrecidas de diversos compradores por tu producto</p>
                <button type="button" class="btn btn-outline-warning btn-info btn3">Ver Mis Ofertas</button>
              </div>
            </div>
          </div>
        </div>

        <div className="card0 mb-5" >
          <div className="row no-gutters">
            <div className="col-md-8">
              <img src="https://image.flaticon.com/icons/png/512/45/45255.png" className="card-img-top" alt="..." />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">Mis Cursos</h5>
                <p className="card-text">Aquí visualizaras los cursos que habías seleccionado previamente, para que accedas de nuevo a cada uno de los contenidos ofrecidos.</p>
                <button type="button" class="btn btn-outline-warning btn-info btn3">Mis cursos</button>
              </div>
            </div>
          </div>
        </div>

        <div className="card0 mb-5" >
          <div className="row no-gutters">
            <div className="col-md-8">
              <img src="https://www.cellularishop.com/img/cms/Messages-512.png" className="card-img-top" alt="..." />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">Mi chat</h5>
                <p className="card-text">Aquí visualizaras las diferentes conversaciones con algunos compradores para establecer precios a pagar por tus productos. Igualmente puedes confirmar precios finales</p>
                <button type="button" class="btn btn-outline-warning btn-info btn3">Ver Chat</button>
              </div>
            </div>
          </div>
        </div>

        <div className="card0 mb-5" >
          <div className="row no-gutters">
            <div className="col-md-8">
              <img src="https://espinozaycia.cl/wp-content/uploads/2017/07/camion-de-reparto2-1.png" className="card-img-top" alt="..." />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">Mis pedidos</h5>
                <p className="card-text">Aquí visualizaras el estado de pedidos pendientes y ordenados por los diferentes compradores. Tendras la información específica de ellos y los detalles de envio.</p>
                <button type="button" class="btn btn-outline-warning btn-info btn3">Ver Pedidos</button>
              </div>
            </div>
          </div>
        </div>

        <div className="card0 mb-5" >
          <div className="row no-gutters">
            <div className="col-md-8">
              <img src="https://www.caminoaemaus.org/wp-content/uploads/2016/09/Pablo-300x300.png" className="card-img-top" alt="..." />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">Mis Valoraciones</h5>
                <p className="card-text">Aquí visualizaras las valoraciones ofrecidas por los compradores, para que estes informado de las diversas opiniones respecto a tu servicio.</p>
                <button type="button" class="btn btn-outline-warning btn-info btn3">Ver mis valoraciones</button>
              </div>
            </div>
          </div>
        </div>
      
      </div>

    </div>

    );}