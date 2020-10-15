import React from 'react';
import Header from '../componentes/Headercampesino';
import Footer from '../componentes/Footer';
import InterfazTendenciaRegionPacifica from '../componentes/InterfazTendenciaRegionPacifica'

export default function TendenciaRegionPacifica() {
    return (
        <div className="TendenciaRegionPacifica">
            <Header/>
            <InterfazTendenciaRegionPacifica/>
            <Footer/>
        </div>
    );
}