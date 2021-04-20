import React from 'react';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrow } from "@fortawesome/free-solid-svg-icons";
function Holamundo(){
  return <h1>Hola Mundo</h1>

}

function Bola(){
  return <div className="rodona"></div>
}

function Cuadrado(){
  return <div className="cuadrado"></div>
}

function Separador(){
  return <hr className="separador"></hr>

}
function Separadoruno(){
  return <hr className="separadoruno"></hr>

}

function Titulo(props){
  return <h1>{props.texto}</h1>

}
function Mosca(props){
  return <FontAwesomeIcon icon={faCrow} className="mosca" />
}

function Capital(props){
  return 
}


function App() {
  return (
    <div>
    <Holamundo />
    <Bola />
    <Cuadrado />
    <Separador />
    <Separadoruno />
    <Titulo texto="Hola React, gracies Ferran"/>
    <Mosca/>
    </div>
  );
}

export default App;
