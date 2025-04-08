import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Services />
        <Contact />
      </main>
      <footer>
        &copy; 2025 AirBnB. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
