import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Producto= ({items}) => {
        return (
          <div>
            {items.map(item => (
              <div>
              <img src={item.url} />
              <p>{item.descripcion}</p>
              <p>{item.precio}</p>
              <p>{item.tipo}</p>
              </div>
            ))}
        </div>)
      };
      
  
export {Producto};



