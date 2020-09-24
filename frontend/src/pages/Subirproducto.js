import React from 'react';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import SubirProductoCampe from '../componentes/InterfazSubirProducto'

export default function Subirproducto() {
    return (
        <div className="App">
            <Header/>
            <SubirProductoCampe/>
            <Footer/>
        </div>
    );
}