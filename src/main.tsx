import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/home/App.tsx'
import Cadastro from './components/cadastro/Cadastro.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Cadastro />
  </StrictMode>,
)
