import { useState } from "react";
import "./Ejercicio6.css";

function CajaColor({ color }) {
  return (
    <div className="caja-color" style={{ backgroundColor: color }}>
      {color}
    </div>
  );
}

export default function Ejercicio6() {
  const colores = ["#ffebee", "#e8f5e9", "#e3f2fd", "#fffde7", "#f3e5f5", "#ede7f6"];

  return (
    <div className="ej6-card">
      <h2>Ejercicio 6 - Color de fondo mediante propiedad (props)</h2>
      <p>
        El componente acepta una propiedad de entrada <code>color</code> que
        determina el color de fondo. El valor se aplica dinámicamente mediante
        <code>style={{ backgroundColor: color }}</code>.
      </p>
      <div className="ej6-contenedor">
        {colores.map((c) => (
          <CajaColor key={c} color={c} />
        ))}
      </div>
    </div>
  );
}
