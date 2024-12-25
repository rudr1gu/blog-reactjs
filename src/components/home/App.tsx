import './App.css'

//reaproveitamento de estruturas
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <section className='App'>
      <header>
        <h1>Home</h1>
      </header>
      <Outlet />
      <footer>
        <p>Desenvolvido por: <a href='https://github.com/rudr1gu'>Rudrigu</a></p>
      </footer>
    </section>
  )
}

export default App