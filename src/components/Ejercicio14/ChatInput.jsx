import { useState } from "react";

/**
 * Componente ChatInput.
 * Permite escribir un mensaje y enviarlo. No gestiona la lista de mensajes:
 * recibe una función onEnviar por props (comunicación hijo -> padre) que el
 * padre ejecuta para agregar el mensaje al estado compartido.
 */
export default function ChatInput({ onEnviar }) {
  const [texto, setTexto] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!texto.trim()) return;
    onEnviar(texto);
    setTexto("");
  };

  return (
    <form onSubmit={manejarEnvio} className="chat-input-form">
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe un mensaje..."
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
