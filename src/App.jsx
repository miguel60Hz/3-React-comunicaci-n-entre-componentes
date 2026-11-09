import { useState } from "react";
import "./App.css";

import Ejercicio1 from "./components/Ejercicio1/Ejercicio1";
import Ejercicio2 from "./components/Ejercicio2/Ejercicio2";
import Ejercicio3 from "./components/Ejercicio3/Ejercicio3";
import Ejercicio4 from "./components/Ejercicio4/Ejercicio4";
import Ejercicio5 from "./components/Ejercicio5/Ejercicio5";
import Ejercicio6 from "./components/Ejercicio6/Ejercicio6";
import Ejercicio7 from "./components/Ejercicio7/Ejercicio7";
import Ejercicio8 from "./components/Ejercicio8/Ejercicio8";
import Ejercicio9 from "./components/Ejercicio9/Ejercicio9";
import Ejercicio10 from "./components/Ejercicio10/Ejercicio10";
import Ejercicio11 from "./components/Ejercicio11/Ejercicio11";
import Ejercicio12 from "./components/Ejercicio12/Ejercicio12";
import Ejercicio13 from "./components/Ejercicio13/Ejercicio13";
import Ejercicio14 from "./components/Ejercicio14/Ejercicio14";

const EJERCICIOS = [
  { num: 1, titulo: "Lista de Tareas", comp: Ejercicio1 },
  { num: 2, titulo: "Validación de longitud de texto", comp: Ejercicio2 },
  { num: 3, titulo: "Título con tamaño variable", comp: Ejercicio3 },
  { num: 4, titulo: "Lista con estilo condicional", comp: Ejercicio4 },
  { num: 5, titulo: "Alternar clases CSS", comp: Ejercicio5 },
  { num: 6, titulo: "Color de fondo por props", comp: Ejercicio6 },
  { num: 7, titulo: "Tema oscuro / claro", comp: Ejercicio7 },
  { num: 8, titulo: "Componente Producto", comp: Ejercicio8 },
  { num: 9, titulo: "Simulador de Semáforo", comp: Ejercicio9 },
  { num: 10, titulo: "Tabla de Productos", comp: Ejercicio10 },
  { num: 11, titulo: "Selects Encadenados", comp: Ejercicio11 },
  { num: 12, titulo: "Input a mayúsculas", comp: Ejercicio12 },
  { num: 13, titulo: "Encuesta de Satisfacción", comp: Ejercicio13 },
  { num: 14, titulo: "Chat de componentes", comp: Ejercicio14 },
];

export default function App() {
  const [activo, setActivo] = useState(null);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Comunicación entre componentes en React</h1>
        <p>Proyecto práctico - 14 ejercicios de la guía</p>
      </header>

      <nav className="app-nav">
        {EJERCICIOS.map((e) => (
          <button
            key={e.num}
            className={`ej-btn ${activo === e.num ? "activo" : ""}`}
            onClick={() => setActivo(e.num)}
          >
            Ejercicio {e.num}
          </button>
        ))}
      </nav>

      <main className="app-main">
        {activo === null ? (
          <section className="inicio">
            <h2>Bienvenido</h2>
            <p>
              Selecciona un ejercicio del menú para verlo en acción. Cada uno
              implementa un concepto de comunicación entre componentes en React:
              props, estado, eventos y comunicación padre/hijo/hermanos.
            </p>
          </section>
        ) : (
          <>
            {(() => {
              const Componente =
                EJERCICIOS.find((e) => e.num === activo)?.comp;
              return Componente ? <Componente /> : null;
            })()}
          </>
        )}
      </main>

      <footer className="app-footer">
        Proyecto desarrollado como parte de la guía "React - Comunicación entre
        componentes" &bull; SENA - Análisis y Desarrollo de Software
      </footer>
    </div>
  );
}
