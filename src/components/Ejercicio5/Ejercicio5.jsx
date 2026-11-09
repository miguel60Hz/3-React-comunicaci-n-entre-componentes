import { useState } from "react";
import "./Ejercicio5.css";

export default function Ejercicio5() {
  const [modo, setModo] = useState("claseA"); // "claseA" | "claseB"

  return (
    <div className="ej5-card">
      <h2>Ejercicio 5 - Alternar entre dos clases CSS</h2>
      <p>
        Cuadro de texto y botón de alternar. Al hacer clic, el componente cambia
        entre dos clases CSS diferentes para modificar el estilo del cuadro.
      </p>
      <div className={`ej5-cuadro ${modo}`}>
        <p>Cuadro de texto con estilo alternado</p>
      </div>
      <button
        className="ej5-boton"
        onClick={() => setModo(modo === "claseA" ? "claseB" : "claseA")}
      >
        Alternar estilo ({modo === "claseA" ? "Clase A &rarr; B" : "Clase B &rarr; A"})
      </button>
      <p className="ej5-pista">Clase CSS activa: <strong>{modo}</strong></p>
    </div>
  );
}
