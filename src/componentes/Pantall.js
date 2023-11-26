import React from "react";
import "../estilos/Pantalla.css"

function Pantalla({ valor }){
    return(
        <div className="contenedor-resultado">
            {valor}
        </div>
    );
}
export default Pantalla;