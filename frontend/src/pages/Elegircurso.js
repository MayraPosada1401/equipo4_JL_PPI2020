import React from 'react';
import Header from '../componentes/Headercampesino';
import Footer from '../componentes/Footer';
import ElegirCurso from '../componentes/InterfazElegirCurso'

export default function ElegirCursoCampe() {
    return (
        <div className="ElegirCursoCampe">
            <Header/>
            <ElegirCurso/>
            <Footer/>
        </div>
    );
}