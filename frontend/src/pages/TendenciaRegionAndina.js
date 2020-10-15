import React from 'react';
import Header from '../componentes/Headercampesino';
import Footer from '../componentes/Footer';
import InterfazTendenciaRegionAndina from '../componentes/InterfazTendenciaRegionAndina'

export default function TendenciaRegionAndina() {
    return (
        <div className="TendenciaRegionAndina">
            <Header/>
            <InterfazTendenciaRegionAndina/>
            <Footer/>
        </div>
    );
}