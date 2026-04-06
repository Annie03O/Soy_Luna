import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD:Frontend/src/main.tsx
import App from './App'
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./styles/style.css"
=======
import './index.css'
import App from './App'
>>>>>>> 8c5dee871abf7b0bf4d9c46a612d9acd776cfd5d:src/main.tsx

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
