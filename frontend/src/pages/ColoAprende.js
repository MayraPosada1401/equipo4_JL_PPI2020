import React from 'react';
import Header from '../componentes/Headercampesino';
import InterfazAprendeColom from '../componentes/InterfazAprendeColom';
import Footer from '../componentes/Footer';

export default function ColoAprende() {
    return (
        <div className="ColoAprende">
            <Header/>
            <InterfazAprendeColom/>
            <Footer/>
        </div>
    );
}