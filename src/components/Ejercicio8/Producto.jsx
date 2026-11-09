/**
 * Componente hijo "producto". Representa un producto de una tienda en línea.
 * Recibe los datos del producto desde el componente padre mediante props:
 * nombre, precio y descripcion.
 */
export default function Producto({ nombre, precio, descripcion }) {
  return (
    <div className="producto-card">
      <h3>{nombre}</h3>
      <p className="producto-precio">${precio}</p>
      <p className="producto-descripcion">{descripcion}</p>
    </div>
  );
}
