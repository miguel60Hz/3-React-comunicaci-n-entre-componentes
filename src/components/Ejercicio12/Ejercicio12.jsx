import { useState } from "react";
import "./Ejercicio12.css";

export default function Ejercicio12() {
  const [texto, setTexto] = useState("");

  return (
    <div className="ej12-card">
      <h2>Ejercicio 12 - Input a mayúsculas automáticamente</h2>
      <p>
        El input convierte el texto a mayúsculas automáticamente mientras el
        usuario escribe, tanto en el valor guardado como en la visualización.
      </p>
      <input
        type="text"
        className="ej12-input"
        value={texto}
        onChange={(e) => setTexto(e.target.value.toUpperCase())}
        placeholder="Escribe en minúsculas o mayúsculas..."
      />
      <p className="ej12-resultado">
        Valor guardado: <strong>{texto || "(vacío)"}</strong>
      </p>
    </div>
  );
}
