import React from 'react';
import Header from '../componentes/Headercampesino';
import Footer from '../componentes/Footer';
import InterfazMisPedidos from '../componentes/InterfazMisPedidos'

export default function MisPedidos() {
    return (
        <div className="MisPedidos">
            <Header/>
            <InterfazMisPedidos/>
            <Footer/>
        </div>
    );
}
 