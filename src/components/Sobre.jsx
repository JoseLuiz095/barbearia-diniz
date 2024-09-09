// Importações necessárias para o componente Sobre
import InstagramFeed from './InstagramFeed';
import React from 'react';
import { useInView } from 'react-intersection-observer'; // Biblioteca para detectar quando o componente está visível
import "./Sobre.css"; // Importação dos estilos CSS

// Componente Sobre - exibe informações da barbearia e feed do Instagram
const Sobre = () => {
  // Configuração do Intersection Observer para animar o componente quando ele estiver visível
  const { ref, inView } = useInView({
    triggerOnce: true, // A animação será disparada apenas uma vez
    threshold: 0.3,    // A animação é disparada quando 30% do componente está visível
  });

  return (
    // Seção principal do componente 'Sobre', aplicando a animação condicionalmente
    <section
      ref={ref} // Referência para o Intersection Observer
      className={`${inView ? 'flipInY' : ''}`} // Adiciona a classe de animação quando visível
      id='sobre' // ID único para a seção, importante para SEO e navegação por âncoras
    >
      <h1>Sobre</h1> {/* Título da seção */}
      
      {/* Container principal que alinha os elementos da seção */}
      <div className="container-sobre container d-flex flex-column flex-lg-row justify-content-around align-items-center p-4">
        
        {/* Área de texto com informações sobre a barbearia */}
        <div className="text-sobre d-flex flex-column align-items-center justify-content-evenly">
          
          {/* Artigos que descrevem os serviços e experiência da barbearia */}
          <article className="d-flex flex-column align-items-center">
            <i className="bi bi-emoji-smile"></i> {/* Ícone de cliente satisfeito */}
            <p>MAIS DE 500 CLIENTES SATISFEITOS</p>
            <span>DESDE 2018</span>
          </article>

          <article className="d-flex flex-column align-items-center">
            <i className="bi bi-scissors"></i> {/* Ícone de serviços premium */}
            <p>SERVIÇOS PREMIUM DE BARBEARIA</p>
            <span>QUALIDADE GARANTIDA</span>
          </article>

          <article className="d-flex flex-column align-items-center">
            <i className="bi bi-calendar-check"></i> {/* Ícone de agendamento flexível */}
            <p>HORÁRIOS FLEXÍVEIS</p>
            <span>AGENDAMENTO FÁCIL</span>
          </article>
        </div>

        {/* Link para o Instagram com feed integrado */}
        <a href="https://www.instagram.com/dinizbarbershopp/" className="instagram-sobre h-100">
          <InstagramFeed /> {/* Componente que exibe o feed do Instagram */}
        </a>
      </div>
    </section>
  );
};

export default Sobre;
