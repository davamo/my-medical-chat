# Medical Chat - Chatbot de Agendamiento Médico

Aplicación web desarrollada en **React** para interactuar con un chatbot inteligente de agendamiento de citas médicas. Incluye autenticación básica y comunicación en tiempo real con un backend API.

## 🎯 Características Principales

- ✅ **Autenticación de usuario** - Login seguro con validación
- 💬 **Chat interactivo** - Interfaz conversacional con el asistente médico
- �� **Agendamiento de citas** - Integración CRUD con backend
- 📱 **Diseño mobile-first** - Totalmente responsivo y optimizado para dispositivos móviles
- 🤖 **Asistente con OpenAI** - Potenciado por inteligencia artificial

## 🛠️ Tecnologías Utilizadas

- **React 19** - Framework UI
- **Vite** - Build tool y servidor de desarrollo
- **JavaScript ES6+** - Lenguaje de programación
- **CSS3** - Estilos y responsive design
- **Axios** - Cliente HTTP para llamadas a API

## 📂 Estructura del Proyecto

\`\`\`
my-medical-chat/
├── src/
│   ├── components/
│   │   ├── LoginForm.jsx          # Formulario de autenticación
│   │   ├── ChatWindow.jsx         # Ventana principal del chat
│   │   ├── ChatWin.jsx            # Componente alternativo de chat
│   │   └── MessageBubble.jsx      # Componente de burbujas de mensaje
│   ├── services/
│   │   └── api.js                 # Configuración de llamadas HTTP
│   ├── App.jsx                    # Componente raíz
│   ├── main.jsx                   # Punto de entrada
│   ├── styles.css                 # Estilos globales
│   ├── App.css                    # Estilos de App
│   └── index.css                  # Estilos de índice
├── public/                        # Archivos estáticos
├── index.html                     # HTML principal
├── package.json                   # Dependencias y scripts
├── vite.config.js                 # Configuración de Vite
├── eslint.config.js               # Configuración de ESLint
└── README.md                      # Este archivo
\`\`\`

## 📋 Requisitos Previos

- **Node.js** >= 16
- **npm** >= 8
- **Backend** en ejecución (por defecto en \`http://localhost:4000/api\`)

## 🚀 Instalación y Ejecución

### 1. Clonar el repositorio
\`\`\`bash
git clone https://github.com/davamo/my-medical-chat.git
cd my-medical-chat
\`\`\`

### 2. Instalar dependencias
\`\`\`bash
npm install
\`\`\`

### 3. Ejecutar en modo desarrollo
\`\`\`bash
npm run dev
\`\`\`

La aplicación se abrirá en \`http://localhost:5173\`

## ⚙️ Configuración

El archivo \`src/services/api.js\` contiene la configuración de la API:

\`\`\`javascript
const API_BASE_URL = 'http://localhost:4000/api';
\`\`\`

Si el backend corre en otra URL o puerto, actualiza esta constante en \`api.js\`.

## 📝 Scripts Disponibles

\`\`\`bash
npm run dev       # Inicia el servidor de desarrollo con HMR
npm run build     # Genera la versión optimizada de producción
npm run lint      # Ejecuta ESLint para verificar la calidad del código
npm run preview   # Previsualiza la construcción de producción
\`\`\`

## 🔌 Endpoints de API

El frontend consume los siguientes endpoints del backend:

- \`POST /auth/login\` - Autenticación de usuario
- \`GET /appointments\` - Listar citas
- \`POST /appointments\` - Crear nueva cita
- \`PUT /appointments/:id\` - Actualizar cita
- \`DELETE /appointments/:id\` - Eliminar cita
- \`POST /chat\` - Enviar mensaje al chatbot

## 📱 Flujo de la Aplicación

1. Usuario ingresa sus credenciales en \`LoginForm\`
2. Se valida la autenticación contra el backend
3. Si es exitoso, se accede a \`ChatWindow\`
4. El usuario puede enviar mensajes al chatbot
5. El asistente responde con sugerencias de agendamiento
6. Las citas se gestionan mediante llamadas API

## 🔒 Autenticación

La autenticación se maneja en el componente \`LoginForm\` y se valida contra el backend. Una vez autenticado, se recibe un \`sessionId\` que se utiliza para las posteriores llamadas a la API.

## 📦 Dependencias Principales

- \`react\` - Librería UI
- \`react-dom\` - Renderizado en DOM

## 🛡️ Code Quality

Se utiliza **ESLint** para mantener la calidad del código. Ejecuta:

\`\`\`bash
npm run lint
\`\`\`

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo licencia MIT.

## 👤 Autor

**davamo** - [GitHub](https://github.com/davamo)
