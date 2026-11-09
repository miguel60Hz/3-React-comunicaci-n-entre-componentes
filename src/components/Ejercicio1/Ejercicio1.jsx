import { useState } from "react";
import "./Ejercicio1.css";

export default function Ejercicio1() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: "Aprender React", completada: false },
    { id: 2, texto: "Practicar componentes", completada: false },
    { id: 3, texto: "Entregar el proyecto", completada: false },
  ]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = (e) => {
    e.preventDefault();
    if (!nuevaTarea.trim()) return;
    setTareas([
      ...tareas,
      { id: Date.now(), texto: nuevaTarea, completada: false },
    ]);
    setNuevaTarea("");
  };

  const toggleCompletada = (id) => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  return (
    <div className="ej1-card">
      <h2>Ejercicio 1 - Lista de Tareas</h2>
      <p>
        Cada tarea tiene un checkbox para marcarla como completada. Al marcarla,
        se pone en <strong>color verde</strong> y tachada.
      </p>
      <form onSubmit={agregarTarea} className="ej1-form">
        <input
          type="text"
          placeholder="Escribe una nueva tarea"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button type="submit">Agregar tarea</button>
      </form>
      <ul className="ej1-lista">
        {tareas.map((t) => (
          <li
            key={t.id}
            className={`ej1-item ${t.completada ? "completada" : ""}`}
          >
            <label className="ej1-label">
              <input
                type="checkbox"
                checked={t.completada}
                onChange={() => toggleCompletada(t.id)}
              />
              {t.texto}
            </label>
            <button
              type="button"
              className="ej1-eliminar"
              onClick={() => eliminarTarea(t.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <p className="ej1-pista">
        Total: {tareas.length} &bull; Completadas:{" "}
        {tareas.filter((t) => t.completada).length}
      </p>
    </div>
  );
}
