import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/home/App.tsx'
import Cadastro from './components/cadastro/Cadastro.tsx'
import Login from './components/login/Login.tsx'
import Postagens from './components/postagens/Postagens.tsx'
import Postagem from './components/postagem/Postagem.tsx'
import CadastrarPostagem from './components/postagemform/CadastrarPostagem.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/cadastro',
    element: <Cadastro />
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Postagens />
      },
      {
        path: '/postagem/:id',
        element: <Postagem />
      },
      {
        path: '/publicar',
        element: <CadastrarPostagem />
      }
    ]
  }
  
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}> 
    </RouterProvider>
  </StrictMode>,
)
