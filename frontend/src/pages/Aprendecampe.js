import React from 'react';
import Header from '../componentes/Header';
import InterfazAprende from '../componentes/InterfazAprende';
import Footer from '../componentes/Footer';

export default function Aprendecampe() {
    return (
        <div className="App">
            <Header/>
            <InterfazAprende/>
            <Footer/>
        </div>
    );
}