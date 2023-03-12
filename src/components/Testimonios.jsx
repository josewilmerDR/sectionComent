import React from "react";
//import { ReactDOM } from "react-dom";
import "../hojas-de-estilos/Testimonios.css"

export function Testimonios (props){
  return (
    <>
    <div className="contenedor-testimonio">
      <img className="contenedor-imagen-testimonio" 
        src={require(`../img/image_${props.imagen}.png`)}
        alt={`foto de ${props.imagen}`}
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio">{props.testimonio}</p>
      </div>
    </div>
    </>
  )
}
