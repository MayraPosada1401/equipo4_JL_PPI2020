import React from 'react';
import Header from '../componentes/Headercampesino';
import Footer from '../componentes/Footer';
import ChatPerfil from '../componentes/InterfazChat-Perfil'

export default function ChatyPerfil() {
    return (
        <div className="ChatyPerfil">
            <Header/>
            <ChatPerfil/>
            <Footer/>
        </div>
    );
}