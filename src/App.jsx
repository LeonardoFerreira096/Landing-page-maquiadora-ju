import { useState } from 'react'
import Header from "./components/Header.jsx";
import Intro from "./components/Intro.jsx";
import Footer from './components/Footer.jsx';
import Clientes from './components/Clientes.jsx';

function App() {

  return (
    <>
      <Header />
      <Intro />
      <Clientes />
      <Footer />
    </>
  )
}

export default App
