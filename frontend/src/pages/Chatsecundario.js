import React from 'react';
import Nabvar from '../componentes/Navbarcampesino';
import Footer from '../componentes/Footer';
import ChatSecundario from '../componentes/Interfazchatsecu'

export default function ChatSecundarioCampe() {
    return (
        <div className="ChatSecundarioCampe">
            <Nabvar/>
            <ChatSecundario/>
            <Footer/>
        </div>
    );
}