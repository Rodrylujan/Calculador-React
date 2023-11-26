import React from "react";
import "../estilos/BotonClear.css"
function BotonClear({ manejarClick }){
    return(
        <div className="boton-contenedor-clear" onClick={()=>manejarClick()}>
            Limpiar
        </div>
    );
}

export default BotonClear;