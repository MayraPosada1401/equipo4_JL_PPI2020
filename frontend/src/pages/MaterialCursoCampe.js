import React from 'react';
import Header from '../componentes/Headercampesino';
import Footer from '../componentes/Footer';
import InterfazMaterialCursoCampe from '../componentes/InterfazMaterialCursoCampe';

export default function MaterialCursoCampe() {
    return (
        <div className="MaterialCursoCampe">
            <Header/>
            <InterfazMaterialCursoCampe/>
            <Footer/>
        </div>
    );
}
 