import './Footer.css';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Garante que a animação ocorra uma vez
        threshold: 0.3,    // 30% do componente visível antes de disparar
      });
  return (
    <footer ref={ref} className={`footer ${inView ? 'zoomInUp' : ''}`} >
        <section ></section>
      <p>
        © Copyright 2024 – Barbearia do Diniz – Todos os direitos reservados – 
        Feito por <a href="https://portifolio-jl095.netlify.app" target="_blank" rel="noopener noreferrer">DevJL095</a>
      </p>
    </footer>
  );
};

export default Footer;
