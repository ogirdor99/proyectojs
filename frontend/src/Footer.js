import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import instagram from './fotos/instagram.png';
import twitter from './fotos/twitter.png';
import facebook from './fotos/facebook.png';
import mapa from './fotos/mapa.png';
const Footer= () => {
  
    return (
    <div class="footer">
      <h4>Privacidad</h4>
      <h4>Aviso legal</h4>
      <div class="red">
        <h4>Redes sociales:</h4>
        <img class="inst" src={instagram}></img>
        <img class="twt" src={twitter}></img>
        <img class="face" src={facebook}></img>
      </div>
      
      <div class="loc">
        <h4>Localización:</h4>
        <img class="gmap" src={mapa}></img>
      </div>
    </div>
    );
  };
export {Footer};



