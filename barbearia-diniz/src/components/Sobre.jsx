import InstagramFeed from './InstagramFeed';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import "./Sobre.css";

const Sobre = () => {
  // Hook para detectar quando a seção entra na viewport
  const { ref, inView } = useInView({
    triggerOnce: true, // Garante que a animação ocorra apenas uma vez
    threshold: 0.3,    // 30% do componente visível antes de disparar
  });

  return (
    <section
      ref={ref}
      className={`${inView ? 'flipInY' : ''}`} // Adiciona classe de animação se visível
      id='sobre'
    >
      <h1>Sobre</h1>
      <div className="container-sobre container d-flex flex-row">
        <div className="d-flex flex-column align-items-center justify-content-center text-sobre">
          <p>
            Siga-nos no Instagram para mais conteúdo exclusivo! <br />
            Quer mais atualizações, dicas e inspiração? Siga nossa jornada no Instagram e faça parte da nossa comunidade!
            📸 dinizbarbershopp<br />
            Descubra histórias por trás dos bastidores, promoções exclusivas e muito mais. Não perca nenhum detalhe!<br />
            Siga-nos agora mesmo para estar sempre conectado. Estamos ansiosos para interagir com você!
          </p>
          <a href="https://www.instagram.com/dinizbarbershopp/" className="btn btn-info">Instagram</a>
        </div>
        <InstagramFeed /> {/* Componente que exibe o feed do Instagram */}
      </div>
    </section>
  );
};

export default Sobre;
