import { useState } from "react";
import "./Ejercicio11.css";

const DATOS = {
  Colombia: {
    Antioquia: ["Medellín", "Envigado", "Itagüí"],
    Cundinamarca: ["Bogotá", "Soacha", "Zipaquirá"],
    Valle: ["Cali", "Palmira", "Buenaventura"],
  },
  México: {
    "Ciudad de México": ["Coyoacán", "Polanco", "Roma Norte"],
    Jalisco: ["Guadalajara", "Zapopan", "Tlaquepaque"],
    "Nuevo León": ["Monterrey", "San Pedro", "Santa Catarina"],
  },
  España: {
    Madrid: ["Madrid capital", "Alcalá de Henares", "Getafe"],
    Cataluña: ["Barcelona", "Girona", "Tarragona"],
    Andalucía: ["Sevilla", "Málaga", "Granada"],
  },
};

export default function Ejercicio11() {
  const [pais, setPais] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [ciudad, setCiudad] = useState("");

  const departamentos = pais ? Object.keys(DATOS[pais]) : [];
  const ciudades = departamento ? DATOS[pais][departamento] : [];

  return (
    <div className="ej11-card">
      <h2>Ejercicio 11 - Selects Encadenados</h2>
      <p>
        Las opciones del segundo select cambian dinámicamente según lo
        seleccionado en el primero. Ejemplo:
        <strong>País &rarr; Departamento &rarr; Ciudad</strong>.
      </p>
      <div className="ej11-selects">
        <div className="ej11-grupo">
          <label htmlFor="pais">País</label>
          <select
            id="pais"
            value={pais}
            onChange={(e) => {
              setPais(e.target.value);
              setDepartamento("");
              setCiudad("");
            }}
          >
            <option value="">Selecciona un país</option>
            {Object.keys(DATOS).map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div className="ej11-grupo">
          <label htmlFor="departamento">Departamento</label>
          <select
            id="departamento"
            value={departamento}
            onChange={(e) => {
              setDepartamento(e.target.value);
              setCiudad("");
            }}
          >
            <option value="">Selecciona un departamento</option>
            {departamentos.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <div className="ej11-grupo">
          <label htmlFor="ciudad">Ciudad</label>
          <select
            id="ciudad"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
          >
            <option value="">Selecciona una ciudad</option>
            {ciudades.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>
      {ciudad && (
        <p className="ej11-resultado">
          Seleccionado: <strong>{ciudad}</strong>,{" "}
          <strong>{departamento}</strong>, <strong>{pais}</strong>
        </p>
      )}
    </div>
  );
}
