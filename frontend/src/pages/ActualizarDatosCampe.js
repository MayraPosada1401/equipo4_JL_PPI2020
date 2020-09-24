import React from 'react';
import Header from '../componentes/Header';
import InterfazActualizarDatos from '../componentes/InterfazActualizarDatos';
import Footer from '../componentes/Footer';

export default function ActualizarDatos() {
    return (
        <div className="App">
            <Header/>
            <InterfazActualizarDatos/>
            <Footer/>
        </div>
    );
}