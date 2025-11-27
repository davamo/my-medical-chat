import React, { useState, useEffect } from 'react';
import MessageBubble from './MessageBubble';
import { fetchCitas, createCita, updateCita, deleteCita, sendChatbotMessage } from '../services/api';

export default function ChatWindow({ user }) {
  const [messages, setMessages] = useState([]);
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    fetchCitas().then(setCitas);
  }, []);

  const sendMessage = async (text) => {
    if (!text.trim()) return;
    setMessages([...messages, { sender: 'user', text }]);

    // Lógica simple para comandos CRUD vía chatbot
    if (text.toLowerCase().includes('listar citas')) {
      const lista = citas.map(c => `${c.id}: ${c.fecha} - ${c.motivo}`).join('\n');
      setMessages(messages => [...messages, { sender: 'bot', text: lista || 'No hay citas agendadas' }]);
      return;
    }

    if (text.toLowerCase().startsWith('agendar cita')) {
      // Aquí puedes extender para pedir más datos con más mensajes
      const nuevaCita = { fecha: '2025-12-01 10:00', motivo: 'Consulta general' };
      const citaCreada = await createCita(nuevaCita);
      setCitas([...citas, citaCreada]);
      setMessages(messages => [...messages, { sender: 'bot', text: '[translate:Cita agendada con éxito]' }]);
      return;
    }

    // Enviar mensaje al chatbot backend para respuesta general
    const botResponse = await sendChatbotMessage(text);
    setMessages(messages => [...messages, { sender: 'bot', text: botResponse }]);
  };

  return (
    <>
      <header className="header">
        <h2>[translate:Chat con agendamiento médico]</h2>
        <div>{user.username}</div>
      </header>
      <div className="chat-window">
        {messages.map((m, i) => (
          <MessageBubble key={i} message={m} />
        ))}
      </div>
      {/* Para mejorar UX puede añadirse lista visible de citas */}
      <div>
        <h3>[translate:Listado de citas]</h3>
        <ul>
          {citas.map(c => (
            <li key={c.id}>{`${c.id}: ${c.fecha} - ${c.motivo}`}</li>
          ))}
        </ul>
      </div>
      <ChatInput onSend={sendMessage} />
    </>
  );
}

function ChatInput({ onSend }) {
  const [input, setInput] = React.useState('');

  const handleSend = () => {
    onSend(input);
    setInput('');
  };

  return (
    <div className="chat-input">
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="[translate:Escribe aquí...]"
        className="input"
      />
      <button onClick={handleSend} className="button">[translate:Enviar]</button>
    </div>
  );
}
