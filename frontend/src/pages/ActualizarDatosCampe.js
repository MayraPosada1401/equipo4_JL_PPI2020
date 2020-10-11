import React from 'react';
import Header from '../componentes/Headercampesino';
import InterfazActualizarDatosCampesino from '../componentes/InterfazActualizarDatoscampesino';

export default function ActualizarDatosCampe() {
    return (
        <div className="ActualizarDatosCampe">
            <Header/>
            <InterfazActualizarDatosCampesino/>
        </div>
    );
}