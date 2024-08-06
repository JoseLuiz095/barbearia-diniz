import React from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Depoimentos from './components/Depoimento';
import Agendamento from './components/Agenda';

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <Element name="home">
          <Home />
        </Element>
        <Element name="sobre">
          <Sobre />
        </Element>
        <Element name="depoimentos">
          <Depoimentos />
        </Element>
        <Element name="agenda">
          <Agendamento />
        </Element>
      </div>
    </>
  );
}

export default App;
