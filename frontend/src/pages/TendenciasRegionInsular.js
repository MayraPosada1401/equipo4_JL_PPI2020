import React from 'react';
import Header from '../componentes/Headercampesino';
import Footer from '../componentes/Footer';
import InterfazTendenciaRegionInsular from '../componentes/InterfazTendenciaRegionInsular'

export default function TendenciaRegionInsular() {
    return (
        <div className="TendenciaRegionInsular">
            <Header/>
            <InterfazTendenciaRegionInsular/>
            <Footer/>
        </div>
    );
}