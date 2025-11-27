// src/components/MessageBubble.jsx
import React from 'react';

export default function MessageBubble({ message }) {
  const className = message.sender === 'user' ? 'message user' : 'message bot';

  return <div className={className}>{message.text}</div>;
}
