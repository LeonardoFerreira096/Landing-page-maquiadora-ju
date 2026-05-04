import { useState } from 'react'
import Header from "./components/Header.jsx";
import Intro from "./components/Intro.jsx";
import Footer from './components/Footer.jsx';
import Clients from './components/Clients.jsx';
import AboutMe from './components/AboutMe.jsx';
import ServicesOffered from './components/ServicesOffered.jsx';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Intro />
        <Clients />
        <ServicesOffered />
        <AboutMe />
      </main>
      <Footer />
    </div>
  )
}

export default App