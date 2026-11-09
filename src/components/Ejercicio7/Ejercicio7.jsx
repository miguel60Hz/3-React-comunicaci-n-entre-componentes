import { useState } from "react";
import "./Ejercicio7.css";

export default function Ejercicio7() {
  const [oscuro, setOscuro] = useState(false);

  return (
    <div className={`ej7-card ${oscuro ? "oscuro" : ""}`}>
      <h2>Ejercicio 7 - Tema oscuro / claro</h2>
      <p>
        Botón de alternar para cambiar entre un tema oscuro y un tema claro. El
        componente aplica estilos CSS diferentes según el tema seleccionado.
      </p>
      <button
        className="ej7-boton"
        onClick={() => setOscuro(!oscuro)}
      >
        {oscuro ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
      </button>
      <p className="ej7-estado">
        Tema actual: <strong>{oscuro ? "Oscuro" : "Claro"}</strong>
      </p>
    </div>
  );
}
