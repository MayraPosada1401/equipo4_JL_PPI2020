import React from 'react';
import '../Estilos/Iniciodesesiongeneralperfil.css';
import { Link } from 'react-router-dom';

export default function Iniciodesesiongeneralperfil() {
return(

        <div className="Iniciodesesiongeneralperfil">

            <div className="fondecoloryestiloboton1">
                <Link to="/iniciosesioncampesino">
                <button type="button" class="espacioenimagenrepres-iniciosesiongeneral"><h1 className="Fondotransparenteparainciogeneral">Campesino</h1></button>
                </Link>
            </div>
            <div className="fondecoloryestiloboton2">
                <Link to="/iniciosesioncomprador">
                <button type="button" class="espacioenimagenrepres2-iniciosesiongeneral"><h1 className="Fondotransparenteparainciogeneral">Comprador</h1></button>
                </Link>
            </div>
            <div className="fondecoloryestiloboton3">
                <Link to="/iniciosesioncapacitador">
                <button type="button" class="espacioenimagenrepres3-iniciosesiongeneral"><h1 className="Fondotransparenteparainciogeneral">Capacitador</h1></button>
                </Link>
            </div>

        </div>
    );
}