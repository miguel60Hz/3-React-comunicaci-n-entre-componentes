import { useState } from "react";
import "./Ejercicio13.css";

export default function Ejercicio13() {
  const [satisfaccion, setSatisfaccion] = useState("");
  const [recomienda, setRecomienda] = useState("");
  const [comentarios, setComentarios] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    const resultados = {
      "Satisfacción (1-5)": satisfaccion || "No respondido",
      "¿Recomienda?": recomienda || "No respondido",
      Comentarios: comentarios || "Sin comentarios",
    };
    console.log("=== Resultados de la encuesta ===");
    console.table(resultados);
    alert(
      "Los resultados se enviaron a la consola del navegador. Presiona F12 y abre la pestaña Consola."
    );
  };

  const manejarReset = () => {
    setSatisfaccion("");
    setRecomienda("");
    setComentarios("");
  };

  return (
    <div className="ej13-card">
      <h2>Ejercicio 13 - Encuesta de Satisfacción</h2>
      <p>
        Simulación de encuesta con radios (1 a 5), select (sí/no) y un área de
        comentarios. Al enviar, los resultados se muestran en consola y hay un
        botón de reset.
      </p>
      <form onSubmit={manejarEnvio} className="ej13-form">
        <div className="ej13-grupo">
          <label>¿Qué tan satisfecho estás?</label>
          <div className="ej13-radios">
            {[1, 2, 3, 4, 5].map((n) => (
              <label key={n} className="ej13-radio-label">
                <input
                  type="radio"
                  name="satisfaccion"
                  value={n}
                  checked={satisfaccion === String(n)}
                  onChange={() => setSatisfaccion(String(n))}
                />
                {n}
              </label>
            ))}
          </div>
        </div>
        <div className="ej13-grupo">
          <label>¿Recomendarías este servicio?</label>
          <select
            value={recomienda}
            onChange={(e) => setRecomienda(e.target.value)}
          >
            <option value="">Selecciona</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="ej13-grupo">
          <label>Comentarios adicionales</label>
          <textarea
            value={comentarios}
            onChange={(e) => setComentarios(e.target.value)}
            placeholder="Escribe tus comentarios aquí..."
            rows="3"
          />
        </div>
        <div className="ej13-botones">
          <button type="submit" className="ej13-btn-enviar">
            Enviar
          </button>
          <button type="button" className="ej13-btn-reset" onClick={manejarReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
