/**
 * Componente Mensaje.
 * Muestra un mensaje del chat. Recibe por props el texto y el tipo
 * ("propio" o "contacto") para aplicar el estilo correspondiente.
 */
export default function Mensaje({ texto, tipo }) {
  return (
    <div className={`mensaje ${tipo}`}>
      <span className="quien">{tipo === "propio" ? "Tú:" : "Contacto:"}</span>
      {texto}
    </div>
  );
}
