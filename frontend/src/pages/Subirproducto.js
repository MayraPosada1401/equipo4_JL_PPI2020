import React from 'react';
import Header from '../componentes/Headercampesino';
import Footer from '../componentes/Footer';
import SubirProductoCampe from '../componentes/InterfazSubirProducto'

export default function Subirproducto() {
    return (
        <div className="Subirproducto">
            <Header/>
            <SubirProductoCampe/>
            <Footer/>
        </div>
    );
}