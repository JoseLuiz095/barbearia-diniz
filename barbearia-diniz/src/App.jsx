import React from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Sobre from './components/Sobre';
import FeedBack from './components/FeedBack';
import Agendamento from './components/Agenda';
import Footer from './components/Footer';
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
        <Element name="feedBack">
          <SectionWrapper>
            <FeedBack />
          </SectionWrapper>
        </Element>
        <Element name="agenda">
          <SectionWrapper>
            <Agendamento />
          </SectionWrapper>
        </Element>
      <Footer/>
      </div>
    </>
  );
}

export default App;
