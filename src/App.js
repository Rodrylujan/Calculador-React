import "./App.css";
import Boton from "./componentes/Boton";
import BotonClear from "./componentes/BotonClear";
import Pantalla from "./componentes/Pantall";
import logo from "./imagenes/logo.jpg";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const agregaroperador = (val) => {
    if (val !== "") {
      if (/[+\-*/]$/.test(input) && /[+\-*/]/.test(val)) {
        setInput(input.slice(0, -1) + val);
      } else {
        setInput(input + val);
      }
    }
  };

  const agregarInput = (val) => {
    if (val !== "") {
      setInput(input + val);
    }
  };

  const limpiarPantalla = () => {
    setInput("");
  };

  const calcularResultado = () => {
    if (input !== "" && (/[+\-*/]/.test(input))) setInput(evaluate(input));
  };

  return (
    <div className="App">
      <div className="contenedor-logo">
        <div className="logo">CALCULADORA BASICA</div>
      </div>
      <div className="contenedor-calculadora">
        <Pantalla valor={input} />
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregaroperador}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregaroperador}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregaroperador}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregaroperador}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClick={limpiarPantalla} />
        </div>
      </div>
    </div>
  );
}

export default App;
