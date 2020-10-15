import React from 'react';
import Header from '../componentes/Headercampesino';
import InterfazInformacionOfertas from '../componentes/InformaciónOfertas';
import Footer from '../componentes/Footer';

export default function InfoOfertas() {
    return (
        <div className="InfoOfertas">
            <Header/>
            <InterfazInformacionOfertas/>
            <Footer/>
        </div>
    );
}