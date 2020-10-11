import React from 'react';
import Nabvar from '../componentes/Navbarcampesino';
import Footer from '../componentes/Footer';
import ChatPrincipal from '../componentes/InterfazChatprincipal'

export default function ChatPrincipalcampe() {
    return (
        <div className="Chatprincipalcampesino">
            <Nabvar/>
            <ChatPrincipal/>
            <Footer/>
        </div>
    );
}