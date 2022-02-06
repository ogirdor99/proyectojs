import React from 'react';
import './App.css';
import {Header} from './Header';
import {Producto} from './Producto';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import uno from './fotos/1.jpeg';
//import axios from 'axios';
function App() {
  const [items, setItems] = useState([])
  useEffect(() => {
    const fetchItems = async () => {
      /*const result = await axios('http://localhost/proyectoJS/bd/service.php')
      console.log(result.data.results)
      setItems(result.data.results)
    */
      fetch('./productos.json')
      .then(response => {
          console.log(response.data.productos);
      })
      .catch(e => {
          
          console.log(e);
      })
   
   }
    fetchItems()
  }, [])
  return (
    <div className="App">
      <Header />
      <Producto items={items}/>

      <div>
        <img src={uno}></img>
        <spam>Bolso name</spam>
        <spam>Precio:40</spam>
        <spam>Tipo:Bolso</spam>
      </div>
      <div>

      </div>
    </div>
  );
}

export default App; 

