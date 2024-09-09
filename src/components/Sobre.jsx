import InstagramFeed from './InstagramFeed';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import "./Sobre.css";

const Sobre = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className={`${inView ? 'flipInY' : ''}`}
      id='sobre'
    >
      <h2>Sobre</h2>
      <div className="container-sobre container d-flex flex-column flex-lg-row justify-content-around align-items-center p-4">
        <div className="text-sobre d-flex flex-column align-items-center justify-content-evenly">
          <article className="d-flex flex-column align-items-center">
            <i className="bi bi-emoji-smile"></i>
            <p>MAIS DE 500 CLIENTES SATISFEITOS</p>
            <span>DESDE 2018</span>
          </article>
          <article className="d-flex flex-column align-items-center">
            <i className="bi bi-scissors"></i>
            <p>SERVIÇOS PREMIUM DE BARBEARIA</p>
            <span>QUALIDADE GARANTIDA</span>
          </article>
          <article className="d-flex flex-column align-items-center">
            <i className="bi bi-calendar-check"></i>
            <p>HORÁRIOS FLEXÍVEIS</p>
            <span>AGENDAMENTO FÁCIL</span>
          </article>
        </div>
        <a href="https://www.instagram.com/dinizbarbershopp/" className="instagram-sobre h-100 ">
          <InstagramFeed /> 
        </a>
      </div>
    </section>
  );
};

export default Sobre;
