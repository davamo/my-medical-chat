Frontend – Chatbot Agendamiento Médico

Aplicación web mobile-first﻿desarrollado en React para interactuar con un chatbot de agendamiento médico, con login básico e integración a un backend con API CRUD de citas médicas﻿.

Tecnologías utilizadas﻿ React (Vite como paquete)﻿

JavaScript (ES6+)

CSS simple , primero para dispositivos móviles﻿

Obtener API para llamadas HTTP al backend

Estructura del proyecto﻿ intento /frontend ├── src │ ├── components │ │ ├── LoginForm.jsx │ │ ├── ChatWindow.jsx │ │ └── MessageBubble.jsx │ ├── services │ │ └── api.js │ ├── App.jsx │ ├── main.jsx (o index.jsx según Vite/plantilla) │ └── styles.css ├── index.html ├── package.json └── README.md Requisitos previos

Node.js 22

npm 

Backend de la prueba en ejecución (por defecto en http://localhost:4000/api)

Instalación y ejecución intento

Clonar repositorio
git clone <URL_DE_TU_REPOSITORIO_FRONTEND> cd frontend

Instalar dependencias
npm install

Ejecutar en modo desarrollo
npm run dev

La aplicación se abrirá en el puerto que indique Vite (por defecto 5173)
http://localhost:5173

Configuración
El archivo src/services/api.jsapunta por defecto a:

http://localhost:4000/api

Si el backend corre en otra URL o puerto, actualice la constante API_URLen api.js.

Funcionalidades principales Inicio de sesión básico:

Formulario con usuario y contraseña (autenticación simulada en frontend).

Chat de agendamiento:

Envío y recepción de mensajes.

Mensajes del usuario y del bot diferenciados visualmente.

Gestión de citas:

Consumo de endpoints CRUD del backend para crear, listar, actualizar y eliminar  citas médicas (según implementación en ChatWindow.jsxy api.js).

Scripts disponibles En el directorio del proyecto:

npm run dev– Inicia el servidor de desarrollo.

npm run build– Genera la versión de producción.

npm run preview– Previsualiza la construcción de producción.

Notas Este frontend está diseñado para la prueba técnica de desarrollador full-stack con foco en simplicidad y diseño mobile-first.

La lógica avanzada del chatbot (herramienta de llamadas con OpenAI y reglas de negocio de agendamiento) se maneja en el backend, al cual el frontend consume mediante src/services/api.js