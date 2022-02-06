import React from 'react';
import './Producto.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Producto= ({items}) => {
        return (
          <div class="objetos container">
            {items.map(item => (
              <div class="product-box">
                <img class="product-image" src={item.url} />
                <p class="tipo texto">Tipo: {item.tipo}</p>
                <p class="precio texto">Precio: {item.precio}€</p>
                <p class="descripcion texto">Descripción: {item.descripcion}</p>
              </div>
            ))}
        </div>)
      };
      
  
export {Producto};



