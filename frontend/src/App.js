import React from 'react';
import './App.css';
import {Header} from './Header';
import {Footer} from './Footer';
import {Producto} from './Producto';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
function App() {
  const [items, setItems] = useState([])
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios('http://localhost:3000/productos.json')
      console.log(result.data.productos)
      setItems(result.data.productos)
    
      
   
   }
    fetchItems()
  }, [])
  return (
    <div className="App">
      <Header />
      <Producto items={items}/>

      
      <div>
      <select name="select">
        <option value="" defaultValue></option>
        <option value="bolso">Bolso</option>
        <option value="neceser">Neceser</option>
        <option value="monedero">Monedero</option>
        <option value="bolsito">Bolsito</option>
      </select>
      </div>
      <Footer />
    </div>
  );
}

export default App; 

