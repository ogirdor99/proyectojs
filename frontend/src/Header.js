import React from 'react';
import './Header.css';
import logo from './fotos/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
const Header= () => {
  
    return (
    <nav class="header">
      <img class="logo-image" src={logo}></img>
      <h1 class="title">GABYZUELA</h1>
      
    </nav>
    );
  };
export {Header};



