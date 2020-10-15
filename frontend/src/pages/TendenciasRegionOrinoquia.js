import React from 'react';
import Header from '../componentes/Headercampesino';
import Footer from '../componentes/Footer';
import InterfazTendenciaRegionOrinoquia from '../componentes/InterfazTendenciaRegionOrinoquia'

export default function TendenciaRegionOrinoquia() {
    return (
        <div className="TendenciaRegionOrinoquia">
            <Header/>
            <InterfazTendenciaRegionOrinoquia/>
            <Footer/>
        </div>
    );
}