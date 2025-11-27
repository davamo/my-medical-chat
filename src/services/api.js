const API_URL = 'http://localhost:3000/api';

export async function login(username, password) {
    console.log("Logging in with:", username, ':::', password   );
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  return response.json();
}

export async function sendChatbotMessage(sessionId, message) {
    console .log("Sending message to API:",sessionId, ':::', message);
  const response = await fetch(`${API_URL}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sessionId, message }),
  });
  return response.json();
}

export async function getAppointments() {
  const response = await fetch(`${API_URL}/appointments`);
  return response.json();
}

export async function fetchCitas() {
  const response = await fetch(`${API_URL}/citas`);
  if (!response.ok) throw new Error('Error al obtener citas');
  return response.json();
}

export async function createCita(cita) {
  const response = await fetch(`${API_URL}/citas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cita),
  });
  if (!response.ok) throw new Error('Error al crear cita');
  return response.json();
}

export async function updateCita(id, updates) {
  const response = await fetch(`${API_URL}/citas/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  });
  if (!response.ok) throw new Error('Error al actualizar cita');
  return response.json();
}

export async function deleteCita(id) {
  const response = await fetch(`${API_URL}/citas/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Error al eliminar cita');
  return;
}


