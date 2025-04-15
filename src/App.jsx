import React from 'react';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';

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
