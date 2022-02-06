import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Producto= ({items}) => {
        return (
          <div>
            {items.map(item => (
                <p className="c-cardorigin">{item.origin.name}</p>
                
            ))}
        </div>)
      };
      
  
export {Producto};



