import { useState } from "react";
import Semaforo from "./Semaforo";
import "./Ejercicio9.css";

export default function Ejercicio9() {
  const [estado, setEstado] = useState("rojo");

  return (
    <div className="ej9-card">
      <h2>Ejercicio 9 - Simulador de Semáforo</h2>
      <p>
        El componente recibe un estado
        <code>{'verde' | 'amarillo' | 'rojo'}</code> y aplica un color de fondo
        correspondiente. El estado se controla desde el componente padre.
      </p>
      <Semaforo estado={estado} />
      <div className="ej9-controles">
        <button onClick={() => setEstado("rojo")} className="btn-rojo">
          Rojo
        </button>
        <button onClick={() => setEstado("amarillo")} className="btn-amarillo">
          Amarillo
        </button>
        <button onClick={() => setEstado("verde")} className="btn-verde">
          Verde
        </button>
      </div>
      <p className="ej9-pista">
        Comunicación: padre &rarr; hijo (vía props).
      </p>
    </div>
  );
}
