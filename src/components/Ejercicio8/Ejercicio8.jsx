import Producto from "./Producto";
import "./Ejercicio8.css";

const PRODUCTOS = [
  {
    nombre: "Laptop",
    precio: 1200,
    descripcion: "Computadora portátil de alto rendimiento.",
  },
  {
    nombre: "Mouse inalámbrico",
    precio: 25,
    descripcion: "Mouse ergonómico con conexión inalámbrica.",
  },
  {
    nombre: "Teclado mecánico",
    precio: 60,
    descripcion: "Teclado con retroiluminación y switches mecánicos.",
  },
  {
    nombre: "Monitor 27\"",
    precio: 300,
    descripcion: "Pantalla IPS de 27 pulgadas con resolución 4K.",
  },
  {
    nombre: "Audífonos",
    precio: 80,
    descripcion: "Audífonos con cancelación de ruido.",
  },
];

export default function Ejercicio8() {
  return (
    <div className="ej8-card">
      <h2>Ejercicio 8 - Componente Producto</h2>
      <p>
        El componente <code>Producto</code> muestra nombre, precio y una breve
        descripción. Los datos se pasan desde el componente padre a través de
        <strong>props</strong>.
      </p>
      <div className="ej8-grid">
        {PRODUCTOS.map((p, i) => (
          <Producto
            key={i}
            nombre={p.nombre}
            precio={p.precio}
            descripcion={p.descripcion}
          />
        ))}
      </div>
    </div>
  );
}
