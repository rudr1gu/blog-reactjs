import './App.css'
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <section className='App'>
      <header>
        <Navbar />
      </header>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </section>
  )
}

export default App