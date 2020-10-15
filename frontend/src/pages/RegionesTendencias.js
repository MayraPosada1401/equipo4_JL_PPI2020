import React from 'react';
import Headercampesino from '../componentes/Headercampesino';
import InterfazRegionesTendencias from '../componentes/InterfazRegionestendencia';
import Footer from '../componentes/Footer';

export default function RegionesTendencias() {
    return (
        <div className="RegionesTendencias">
            <Headercampesino/>
            <InterfazRegionesTendencias/>
            <Footer/>
        </div>
    );
}