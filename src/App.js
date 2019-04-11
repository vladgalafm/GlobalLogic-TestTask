import React, { Component } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './Styles/main.scss';

class App extends Component {
  render() {
    return (
      <>
        <Home />
        <main>
          <About />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;