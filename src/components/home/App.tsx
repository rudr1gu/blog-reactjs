import './App.css'
import Navbar from './navbar/Navbar';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <section className='App'>
      <header>
        <Navbar />
      </header>
      <Outlet />
      <footer>
        <p>Desenvolvido por: <a href='https://github.com/rudr1gu'>Rudrigu</a></p>
      </footer>
    </section>
  )
}

export default App