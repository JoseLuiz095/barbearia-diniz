// Importação dos pacotes necessários
import React from 'react';
import { useInView } from 'react-intersection-observer'; // Hook para detectar quando o elemento está visível
import './Agenda.css'; // Estilos específicos para a seção de agendamento

// Componente Agenda
const Agenda = () => {
  // Utilizando o hook useInView para aplicar a animação quando a seção estiver visível
  const { ref, inView } = useInView({
    triggerOnce: true, // A animação ocorre apenas uma vez
    threshold: 0.5, // Inicia a animação quando 30% da seção estiver visível
  });

  return (
    // Seção de agendamento, com uma animação de entrada 'flipInY'
    <section ref={ref} className={`agenda ${inView ? 'flipInY' : ''}`} id='agenda'>
      <h1>Agendamento</h1>
      <div className="container-agenda">
        <article className="d-flex flex-column align-items-center">
           <a href='#' className="contact-agendamento">
           <i class="bi bi-whatsapp"></i>
            <p>Whatsapp</p>
           </a>

           <a href='#' className="contact-agendamento">
           <i class="bi bi-tools"></i>
            <p>Trabalhe Conosco</p>
           </a>

           <a className="contact-agendamento">
           <i class="bi bi-alarm"></i>
            <p>Seg. à Sex. das 09h às 18h</p>
           </a>

           <a href='maito:dinizbarbershopp31@gmail.com' className="contact-agendamento">
           <i class="bi bi-envelope"></i>
            <p>dinizbarbershopp31@gmail.com</p>
           </a>
          </article>
        <div className="d-flex flex-column justify-content-center align-items-center">
          {/* Iframe para exibição do Google Maps, mostrando a localização da barbearia */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7481.622391024923!2d-43.671318!3d-20.349417000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa407bf5af350d3%3A0xfd1bd2073007f6fd!2sDiniz%20Barbershop!5e0!3m2!1spt-BR!2sbr!4v1724180864447!5m2!1spt-BR!2sbr"
            title="Localização da Barbearia Diniz" // Descrição do iframe para SEO e acessibilidade
            allowFullScreen="" // Permite que o mapa seja exibido em tela cheia
            className='localizacao'
            loading="lazy" // Carrega o mapa de forma assíncrona, melhorando a performance do site
            referrerPolicy="no-referrer-when-downgrade" // Política de referência do iframe
          ></iframe>
          {/* Botão de agendamento que direciona para a página de agendamento */}
          <a href="https://www.barberbook.com.br/43" className="btn btn-info">Agendar Agora!</a>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
