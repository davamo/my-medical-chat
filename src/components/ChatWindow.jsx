// src/components/ChatWindow.jsx
import React, { useState } from 'react';
import MessageBubble from './MessageBubble';
import { sendChatbotMessage } from '../services/api';

export default function ChatWindow({ user }) {
  const [messages, setMessages] = useState([]);

  // Suponiendo que `user` tiene sessionId
  const sessionId = user.sessionId;

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    setMessages([...messages, { sender: 'user', text }]);

    // Ahora enviamos sessionId y texto juntos
    const botResponse = await sendChatbotMessage(sessionId, text);

    // Si botResponse es un objeto, asegúrate de extraer el texto (ej. botResponse.message)
    setMessages((messages) => [...messages, { sender: 'bot', text: botResponse.message || botResponse }]);
  };

  return (
    <>
      <header className="header">
        <h2>Chat con agendamiento médico </h2>
        <br />
        <div>{user.username}</div>
      </header>
      <div className="chat-window">
        {messages.map((m, i) => (
          <MessageBubble key={i} message={m} />
        ))}
      </div>
      <ChatInput onSend={sendMessage} />
    </>
  );
}

function ChatInput({ onSend }) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    onSend(input);
    setInput('');
  };

  return (
    <div className="chat-input">
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Escribe aquí..."
        className="input"
      />
      <button onClick={handleSend} className="button">Enviar</button>
    </div>
  );
}
