import React from 'react';
import Header from '../componentes/Headercampesino';
import Footer from '../componentes/Footer';
import InterfazPerfilCampesino from '../componentes/InterfazPerfilCampesino'

export default function Perfilcampe() {
    return (
        <div className="Perfilcampe">
            <Header/>
            <InterfazPerfilCampesino/>
            <Footer/>
        </div>
    );
}
 