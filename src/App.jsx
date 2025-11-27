// src/App.jsx
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import ChatWindow from './components/ChatWindow';
import { login } from './services/api';
import './styles.css';

export default function App() {
  const [user, setUser] = useState(null); // { username, sessionId }

  const handleLogin = async ({ username, password }) => {
    const data = await login(username, password);
    if (data.success) {
      // backend debe devolver sessionId y user.username
      setUser({
        username: data.user.username,
        sessionId: data.sessionId
      });
    } else {
      alert('Error de login');
    }
  };

  if (!user) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return <ChatWindow user={user} />;
}
