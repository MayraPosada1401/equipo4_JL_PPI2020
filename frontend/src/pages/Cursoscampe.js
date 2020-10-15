import React from 'react';
import Header from '../componentes/Headercampesino';
import InterfazMisCursos from '../componentes/InterfazMisCursos';
import Footer from '../componentes/Footer';

export default function MisCursos() {
    return (
        <div className="MisCursos">
            <Header/>
            <InterfazMisCursos/>
            <Footer/>
        </div>
    );
}