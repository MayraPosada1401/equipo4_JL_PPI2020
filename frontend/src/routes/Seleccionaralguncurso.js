import React from 'react';
import Header from '../componentes/Headercampesino';
import Seleccionaralguncurso from '../componentes/Interfazseleccionarunodeloscursos';
import Footer from '../componentes/Footer';

export default function Alguncurso() {
    return (
        <div className="Alguncurso">
            <Header/>
            <Seleccionaralguncurso/>
            <Footer/>
        </div>
    );
}