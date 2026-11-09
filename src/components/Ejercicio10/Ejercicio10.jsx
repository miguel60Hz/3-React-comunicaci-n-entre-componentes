import { useState } from "react";
import "./Ejercicio10.css";

const PRODUCTOS = [
  { nombre: "Laptop", categoria: "Tecnología", precio: 1200000, disponible: true },
  { nombre: "Mouse", categoria: "Accesorios", precio: 45000, disponible: true },
  { nombre: "Monitor 27\"", categoria: "Tecnología", precio: 550000, disponible: false },
  { nombre: "Teclado", categoria: "Accesorios", precio: 110000, disponible: true },
  { nombre: "Impresora", categoria: "Oficina", precio: 320000, disponible: false },
  { nombre: "Audífonos", categoria: "Accesorios", precio: 150000, disponible: true },
];

const formatoMoneda = (valor) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(valor);

export default function Ejercicio10() {
  const [filtro, setFiltro] = useState("todos"); // todos | disponibles | no_disponibles

  const filtrados = PRODUCTOS.filter((p) => {
    if (filtro === "disponibles") return p.disponible;
    if (filtro === "no_disponibles") return !p.disponible;
    return true;
  });

  return (
    <div className="ej10-card">
      <h2>Ejercicio 10 - Listado de Productos en Tabla</h2>
      <p>
        Tabla HTML con nombre, categoría, precio y estado (disponible / no
        disponible). Se usa formato de moneda y estilos condicionales según la
        disponibilidad.
      </p>
      <div className="ej10-filtros">
        <button
          className={`ej10-btn ${filtro === "todos" ? "activo" : ""}`}
          onClick={() => setFiltro("todos")}
        >
          Todos
        </button>
        <button
          className={`ej10-btn ${filtro === "disponibles" ? "activo" : ""}`}
          onClick={() => setFiltro("disponibles")}
        >
          Disponibles
        </button>
        <button
          className={`ej10-btn ${filtro === "no_disponibles" ? "activo" : ""}`}
          onClick={() => setFiltro("no_disponibles")}
        >
          No disponibles
        </button>
      </div>
      <table className="ej10-tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {filtrados.map((p) => (
            <tr
              key={p.nombre}
              className={`fila ${p.disponible ? "disponible" : "no_disponible"}`}
            >
              <td>{p.nombre}</td>
              <td>{p.categoria}</td>
              <td>{formatoMoneda(p.precio)}</td>
              <td>
                <span
                  className={`badge ${p.disponible ? "disponible" : "no_disponible"}`}
                >
                  {p.disponible ? "Disponible" : "No disponible"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
