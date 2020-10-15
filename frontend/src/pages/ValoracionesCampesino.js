import React from 'react';
import Header from '../componentes/Headercampesino';
import Footer from '../componentes/Footer';
import InterfazValoracionescampesino from '../componentes/InterfazValoracionesCampesino'

export default function ValoracionesCampesino() {
    return (
        <div className="ValoracionesCampesino">
            <Header/>
            <InterfazValoracionescampesino/>
            <Footer/>
        </div>
    );
}