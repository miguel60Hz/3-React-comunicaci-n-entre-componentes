import { useState } from "react";
import "./Ejercicio2.css";

export default function Ejercicio2() {
  const [texto, setTexto] = useState("");
  const LIMITE = 10;
  const excedido = texto.length > LIMITE;

  return (
    <div className="ej2-card">
      <h2>Ejercicio 2 - Validación de longitud de texto</h2>
      <p>
        Escribe en el cuadro de texto. Si el texto supera los{" "}
        <strong>{LIMITE} caracteres</strong>, el fondo del cuadro se vuelve
        <strong>rojo</strong>.
      </p>
      <textarea
        className={`ej2-area ${excedido ? "excedido" : ""}`}
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe aquí tu texto..."
        rows="5"
      ></textarea>
      <div className="ej2-info">
        Caracteres: {texto.length} / {LIMITE}{" "}
        {excedido ? <span className="ej2-alerta"> - ¡Límite excedido!</span> : ""}
      </div>
    </div>
  );
}
