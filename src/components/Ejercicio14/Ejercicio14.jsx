import { useState } from "react";
import Mensaje from "./Mensaje";
import ChatInput from "./ChatInput";
import "./Ejercicio14.css";

export default function Ejercicio14() {
  const [mensajes, setMensajes] = useState([
    { texto: "Hola, ¿en qué puedo ayudarte hoy?", tipo: "contacto" },
  ]);

  /**
   * Función que recibe un mensaje del hijo (ChatInput) y lo agrega al estado
   * del padre. Luego simula una respuesta del contacto.
   */
  const recibirMensaje = (texto) => {
    const nuevo = { texto, tipo: "propio" };
    setMensajes((previos) => [...previos, nuevo]);

    setTimeout(() => {
      setMensajes((previos) => [
        ...previos,
        { texto: "Mensaje recibido: " + texto, tipo: "contacto" },
      ]);
    }, 1000);
  };

  return (
    <div className="ej14-card">
      <h2>Ejercicio 14 - Chat para comunicar componentes</h2>
      <p>
        El componente hijo <code>ChatInput</code> envía mensajes al padre
        mediante una función como props (<strong>hijo &rarr; padre</strong>). El
        padre mantiene el estado de los mensajes y lo reparte a los componentes
        <code>Mensaje</code> (<strong>padre &rarr; hijo</strong>). Así se
        comunican dos componentes hermanos a través del padre.
      </p>
      <div className="chat-ventana">
        {mensajes.map((m, i) => (
          <Mensaje key={i} texto={m.texto} tipo={m.tipo} />
        ))}
      </div>
      <ChatInput onEnviar={recibirMensaje} />
    </div>
  );
}
