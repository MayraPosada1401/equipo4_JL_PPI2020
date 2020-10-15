import React from 'react';
import Nabvarcampesino from '../componentes/Navbarcampesino';
import Carrouselcampesino from '../componentes/Carrouselcampesino';

export default function Header() {
    return (
        <div className="Header">
            <Nabvarcampesino/>
            <Carrouselcampesino/>
        </div>
    );
}