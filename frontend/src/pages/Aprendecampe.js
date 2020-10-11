import React from 'react';
import Header from '../componentes/Headercampesino';
import InterfazAprende from '../componentes/InterfazAprende';
import Footer from '../componentes/Footer';

export default function Aprendecampe() {
    return (
        <div className="Aprendecampe">
            <Header/>
            <InterfazAprende/>
            <Footer/>
        </div>
    );
}