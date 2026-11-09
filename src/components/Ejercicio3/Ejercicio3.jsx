import { useState } from "react";
import "./Ejercicio3.css";

export default function Ejercicio3() {
  const [nivel, setNivel] = useState(1); // 1 = pequeño, 2 = mediano, 3 = grande
  const tamaños = ["1.5rem", "2.5rem", "3.5rem"];
  const etiquetas = ["Pequeño", "Mediano", "Grande"];

  return (
    <div className="ej3-card">
      <h2>Ejercicio 3 - Título con tamaño variable</h2>
      <p>
        Al hacer clic en el botón, el tamaño del título cambia según un{" "}
        <strong>estado interno</strong> del componente.
      </p>
      <h1 className="ej3-titulo" style={{ fontSize: tamaños[nivel - 1] }}>
        Título dinámico
      </h1>
      <button
        className="ej3-boton"
        onClick={() => setNivel((n) => (n % 3) + 1)}
      >
        Cambiar tamaño (actual: {etiquetas[nivel - 1]})
      </button>
      <p className="ej3-pista">
        Estado interno: nivel {nivel} de 3 &bull; tamaño{" "}
        <strong>{tamaños[nivel - 1]}</strong>
      </p>
    </div>
  );
}
