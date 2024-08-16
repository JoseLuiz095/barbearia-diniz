// Importação dos pacotes necessários
import React from 'react';
import { useInView } from 'react-intersection-observer'; // Hook para detectar quando o elemento está visível
import './Agenda.css'; // Estilos específicos para a seção de agendamento

// Componente Agenda
const Agenda = () => {
  // Utilizando o hook useInView para aplicar a animação quando a seção estiver visível
  const { ref, inView } = useInView({
    triggerOnce: true, // A animação ocorre apenas uma vez
    threshold: 0.3, // Inicia a animação quando 30% da seção estiver visível
  });

  return (
    // Seção de agendamento, com uma animação de entrada 'flipInY'
    <section ref={ref} className={`agenda-section ${inView ? 'flipInY' : ''}`} id='agenda'>
      <h1>Agendamento</h1>
      <div className="container-agenda">
        <div className="map-container">
          {/* Iframe para exibição do Google Maps, mostrando a localização da barbearia */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7481.604451680747!2d-43.679891852842864!3d-20.349787409483035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa407bf5af350d3%3A0xfd1bd2073007f6fd!2sDiniz%20Barbershop!5e0!3m2!1spt-BR!2sbr!4v1723742393541!5m2!1spt-BR!2sbr" 
            title="Localização da Barbearia Diniz" // Descrição do iframe para SEO e acessibilidade
            allowFullScreen="" // Permite que o mapa seja exibido em tela cheia
            className='localização'
            loading="lazy" // Carrega o mapa de forma assíncrona, melhorando a performance do site
            referrerPolicy="no-referrer-when-downgrade" // Política de referência do iframe
          ></iframe>
        </div>
        <div className="btn-container">
          {/* Botão de agendamento que direciona para a página de agendamento */}
          <a href='#' className="btn btn-primary">Agendar Agora!</a>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
