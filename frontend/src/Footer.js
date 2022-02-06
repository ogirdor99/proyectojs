import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import instagram from './fotos/instagram.png';
import twitter from './fotos/twitter.png';
import facebook from './fotos/facebook.png';
import mapa from './fotos/mapa.png';
const Footer= () => {
  
    return (
    <nav>

      <h4>Privacidad</h4>
      <h4>Aviso legal</h4>
      <h4>Redes sociales</h4>
      <img src={instagram}></img>
      <img src={twitter}></img>
      <img src={facebook}></img>
      <h4>Localización</h4>
      <img src={mapa}></img>
    </nav>
    );
  };
export {Footer};



