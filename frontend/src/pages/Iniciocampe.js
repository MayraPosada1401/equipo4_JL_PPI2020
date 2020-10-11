import React from 'react';
import Header from '../componentes/Headercampesino';
import InterfazIniciocampesino from '../componentes/InterfazIniciocampesino';
import Footer from '../componentes/Footer';

function Iniciocampe() {
    return (
        <div className="Iniciocampe">
            <Header/>
            <InterfazIniciocampesino/>
            <Footer/>
        </div>
    );
}
export default Iniciocampe;