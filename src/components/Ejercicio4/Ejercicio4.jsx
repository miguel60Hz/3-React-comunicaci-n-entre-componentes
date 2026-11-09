import { useState } from "react";
import "./Ejercicio4.css";

const ELEMENTOS = ["Manzana", "Banana", "Naranja", "Pera", "Uva", "Sandía"];

export default function Ejercicio4() {
  const [estiloActivo, setEstiloActivo] = useState(false);

  return (
    <div className="ej4-card">
      <h2>Ejercicio 4 - Lista con estilo aplicado por botón</h2>
      <p>
        Al hacer clic en el botón, se aplica un estilo CSS específico a todos
        los elementos de la lista mediante un estado.
      </p>
      <button
        className={`ej4-boton ${estiloActivo ? "activo" : ""}`}
        onClick={() => setEstiloActivo(!estiloActivo)}
      >
        {estiloActivo ? "Quitar estilo de la lista" : "Aplicar estilo a la lista"}
      </button>
      <ul className={`ej4-lista ${estiloActivo ? "destacada" : ""}`}>
        {ELEMENTOS.map((e, i) => (
          <li
            key={i}
            className={`ej4-item ${estiloActivo ? "ej4-item-activo" : ""}`}
          >
            {e}
          </li>
        ))}
      </ul>
      <p className="ej4-pista">
        Estilo aplicado: <strong>{estiloActivo ? "SÍ" : "NO"}</strong>
      </p>
    </div>
  );
}
