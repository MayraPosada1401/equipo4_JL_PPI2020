import React from 'react';
import Header from '../componentes/Headercampesino';
import Footer from '../componentes/Footer';
import InterfazTendenciaRegionCaribe from '../componentes/InterfazTendenciaRegionCaribe'

export default function TendenciaRegionCaribe() {
    return (
        <div className="TendenciaRegionCaribe">
            <Header/>
            <InterfazTendenciaRegionCaribe/>
            <Footer/>
        </div>
    );
}