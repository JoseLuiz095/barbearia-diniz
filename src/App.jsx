import React from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Depoimentos from './components/Depoimento';
import Agendamento from './components/Agenda';
import SectionWrapper from './components/SectionWrapper';

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <Element name="home">
          <SectionWrapper>
            <Home />
          </SectionWrapper>
        </Element>
        <Element name="sobre">
          <SectionWrapper>
            <Sobre />
          </SectionWrapper>
        </Element>
        <Element name="depoimentos">
          <SectionWrapper>
            <Depoimentos />
          </SectionWrapper>
        </Element>
        <Element name="agenda">
          <SectionWrapper>
            <Agendamento />
          </SectionWrapper>
        </Element>
      </div>
    </>
  );
}

export default App;
