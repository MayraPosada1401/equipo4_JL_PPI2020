import React from 'react';
import '../Estilos/Estiloseleccionaralguncurso.css';
import {Link} from 'react-router-dom';

export default function InterfazSeleccionarAlgunCurso () {
  
  return (

    <div className="contenedorprincipal-selecionaralguncurso-campesino">
       

    <div className="contenedor-cards-seleccionaralguncurso">
       
        <div class="position-card1-seleccionaralguncurso">
            <img class="rounded-circle" src="https://www.ecoticias.com/userfiles/2019/Mar_20/238__93_original.jpg" alt="Generic placeholder image" width="140" height="140"/>
            <h2 className="titulocards-seleccionarunodeloscursos">Pesticidas Económicos</h2>
            <p className="textocards-seleccionarunodeloscursos">En este curso podras apreciar y conocer los diferentes aportes que puedes hacer para comprar e invertar en los cuidados de tus cosechas, esto por medio de pesticidas amigables y económicos.</p>
            <p><Link to="/materialcurso" class="btn btn-secondary" href="#" role="button">Tomar Curso</Link></p>
        </div>

        <div class="position-card1-seleccionaralguncurso">
            <img class="rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4adlmvQU-OkH8iBQzfG0jwk7ZoD0EzTSVRw&usqp=CAU" alt="Generic placeholder image" width="140" height="140"/>
            <h2 className="titulocards-seleccionarunodeloscursos">Pesticidas Orgánicos</h2>
            <p className="textocards-seleccionarunodeloscursos">Los contenidos de este curso estan orientados para que tu aprendas cuales sustancias orgánicas puedes emplear para realizar pesticidas efectivos, para el cuidado productivo y óptimo de tus cultivos.</p>
            <p><a class="btn btn-secondary" href="#" role="button">Tomar Curso</a></p>
        </div>

        <div class="position-card1-seleccionaralguncurso">
            <img class="rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRg8qdjGssOcYd-Lg6jnlqySi-BY9YCDeGAvg&usqp=CAU" width="140" height="140"/>
            <h2 className="titulocards-seleccionarunodeloscursos">Pesticidas Clasificados</h2>
            <p className="textocards-seleccionarunodeloscursos">Aquí vas a poder visualizar la diversidad de pesticidas que hay en los mercados y sus propiedades, esto con el fin de que conozcas sus características y sepas cuales son los más óptimos para tus cultivos.</p>
            <p><a class="btn btn-secondary" href="#" role="button">Tomar Curso</a></p>
        </div>

        <div class="position-card1-seleccionaralguncurso">
            <img class="rounded-circle" src="https://sites.google.com/site/productosagricolas6a/_/rsrc/1445450241442/fertilizantes/El-uso-de-fertilizantes-sobrepasar%C3%A1-los-200-millones-de-toneladas1.jpg" alt="Generic placeholder image" width="140" height="140"/>
            <h2 className="titulocards-seleccionarunodeloscursos">Fertilizantes Caseros</h2>
            <p className="textocards-seleccionarunodeloscursos">Aquí conoceras y apreciaras los métodos por los cuales puedes crear tus propios fertilizantes desde casa para el rendimiento óptimo de tus cultivos. Económicos y fáciles de realizar en el menor tiempo posible. </p>
            <p><a class="btn btn-secondary" href="#" role="button">Tomar Curso</a></p>
        </div>

        <div class="position-card1-seleccionaralguncurso">
            <img class="rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScET8lmmcyAE3T402cFWY4AFZn9AAKRV0DdA&usqp=CAU" alt="Generic placeholder image" width="140" height="140"/>
            <h2 className="titulocards-seleccionarunodeloscursos">Fertilizantes Orgánicos</h2>
            <p className="textocards-seleccionarunodeloscursos">En este curso vas a poder conocer a más profundidad los diferentes fertilizantes que puedes comprar y sus propiedades, especialmente los orgánicos que ayudan al medio ambiente.</p>
            <p><a class="btn btn-secondary" href="#" role="button">Tomar Curso</a></p>
        </div>

        <div class="position-card1-seleccionaralguncurso">
            <img class="rounded-circle" src="https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/2/25-productos-quimicos-peligrosos-que-guardas-en-el-hogar-5.jpg" width="140" height="140"/>
            <h2 className="titulocards-seleccionarunodeloscursos">Efectos Químicos</h2>
            <p className="textocards-seleccionarunodeloscursos">Podras observar como algunos fertilizantes químicos afectan los diferentes cultivos y cuales son sus efectos a corto y largo plazo. Esto permite que conozcas como debes de cuidar tus cultivos.</p>
            <p><a class="btn btn-secondary" href="#" role="button">Tomar Curso</a></p>
        </div>

    </div>

    </div>
)};