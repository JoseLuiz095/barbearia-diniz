import React from 'react';
import { useInView } from 'react-intersection-observer'; // Hook para detectar quando o elemento está visível
import './Agenda.css'; // Estilos específicos para a seção de agendamento

const Agenda = () => {
  // Hook useInView para animar a seção quando visível
  const { ref, inView } = useInView({
    triggerOnce: true, // Animação ocorre apenas uma vez
    threshold: 0.5, // 50% da seção visível antes de disparar a animação
  });

  return (
    // Seção de agendamento com animação 'flipInY'
    <section ref={ref} className={`agenda ${inView ? 'flipInY' : ''}`} id="agenda">
      <h1>Agendamento</h1>
      <div className="container-agenda">
        <article className="d-flex flex-column align-items-center">
          {/* Link para contato via WhatsApp */}
          <a href="https://api.whatsapp.com/send?phone=555199999999" className="contact-agendamento">
            <i className="bi bi-whatsapp"></i>
            <p>Whatsapp</p>
          </a>

          {/* Link para trabalhar conosco */}
          <a href="#" className="contact-agendamento">
            <i className="bi bi-tools"></i>
            <p>Trabalhe Conosco</p>
          </a>

          {/* Horário de funcionamento */}
          <div className="contact-agendamento">
            <i className="bi bi-alarm"></i>
            <p>Seg. à Sex. das 09h às 18h</p>
          </div>

          {/* Link para enviar email */}
          <a href="mailto:dinizbarbershopp31@gmail.com" className="contact-agendamento">
            <i className="bi bi-envelope"></i>
            <p>dinizbarbershopp31@gmail.com</p>
          </a>
        </article>

        {/* Iframe do Google Maps para localização */}
        <div className="d-flex flex-column justify-content-center align-items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7481.622391024923!2d-43.671318!3d-20.349417000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa407bf5af350d3%3A0xfd1bd2073007f6fd!2sDiniz%20Barbershop!5e0!3m2!1spt-BR!2sbr!4v1724180864447!5m2!1spt-BR!2sbr"
            title="Localização da Barbearia Diniz"
            allowFullScreen=""
            className="localizacao"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Botão de agendamento */}
          <a href="https://www.barberbook.com.br/43" className="btn btn-info">Agendar Agora!</a>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
