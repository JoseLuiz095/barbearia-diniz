import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Agenda.css';

const Agenda = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className={`agenda-section ${inView ? 'flipInY' : ''}`} id='agenda'>
      <h1>Agendamento</h1>
      <div className="container-agenda">
        <div className="map-container">
          {/* Substitua o src com o link do mapa do Google Maps */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7481.604451680747!2d-43.679891852842864!3d-20.349787409483035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa407bf5af350d3%3A0xfd1bd2073007f6fd!2sDiniz%20Barbershop!5e0!3m2!1spt-BR!2sbr!4v1723742393541!5m2!1spt-BR!2sbr" 
            title="Localização"
            allowFullScreen=""
            className='localização'
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            >
          </iframe>
        </div>
        <div className="btn-container">
          <button className="btn btn-primary">Agendar Agora!</button>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
