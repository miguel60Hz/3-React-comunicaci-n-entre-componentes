/**
 * Componente Semaforo.
 * Recibe un estado ('verde' | 'amarillo' | 'rojo') por props y aplica el
 * color de fondo correspondiente a cada luz.
 */
export default function Semaforo({ estado }) {
  const colores = {
    verde: "#4caf50",
    amarillo: "#ffeb3b",
    rojo: "#f44336",
  };

  return (
    <div className="semaforo">
      <div
        className={`luz ${estado === "verde" ? "encendida" : ""}`}
        style={{ backgroundColor: colores.verde }}
      ></div>
      <div
        className={`luz ${estado === "amarillo" ? "encendida" : ""}`}
        style={{ backgroundColor: colores.amarillo }}
      ></div>
      <div
        className={`luz ${estado === "rojo" ? "encendida" : ""}`}
        style={{ backgroundColor: colores.rojo }}
      ></div>
      <p className="estado-actual">
        Estado: <strong>{estado.toUpperCase()}</strong>
      </p>
    </div>
  );
}
