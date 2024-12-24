import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/home/App.tsx'
import Cadastro from './components/cadastro/Cadastro.tsx'
import Login from './components/login/Login.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Cadastro />
    <Login />
  </StrictMode>,
)
