import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Agenda.css';

const Agenda = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [formData, setFormData] = useState({ name: '', phone: '', services: [], totalDuration: 0, date: '', time: '' });
  const [confirmation, setConfirmation] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    const { services } = formData;
    if (checked) {
      setFormData({ ...formData, services: [...services, value], totalDuration: formData.totalDuration + parseInt(value, 10) });
    } else {
      setFormData({ ...formData, services: services.filter(service => service !== value), totalDuration: formData.totalDuration - parseInt(value, 10) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementar a integração com Google Calendar e pagamento via Pix aqui.
    // Após o sucesso, definir a confirmação para true e enviar mensagem ao WhatsApp.
    setConfirmation(true);
  };

  return (
    <section
      ref={ref}
      className={`${inView ? 'zoomIn' : ''}`}
      id='agenda'
    >
      <div className='teste'>
        <div className='left'>
          <h1>Localização</h1>
          <p>Endereço: Rua Exemplo, 123</p>
          <p>Bairro: Centro</p>
          <p>Cidade: Exemplo</p>
        </div>
        <div className='right'>
          <h1>Agendamento</h1>
          {confirmation ? (
            <div className='confirmation-message'>
              <h2>Agendamento Confirmado!</h2>
              <button onClick={() => setConfirmation(false)}>Voltar</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label>Nome:</label>
                <input type='text' name='name' value={formData.name} onChange={handleInputChange} required />
              </div>
              <div className='form-group'>
                <label>Telefone:</label>
                <input type='text' name='phone' value={formData.phone} onChange={handleInputChange} required />
              </div>
              <div className='form-group'>
                <label>Serviços:</label>
                <div className='services'>
                  <label>
                    <input type='checkbox' value='30' onChange={handleServiceChange} />
                    Serviço A (30 min)
                  </label>
                  <label>
                    <input type='checkbox' value='60' onChange={handleServiceChange} />
                    Serviço B (60 min)
                  </label>
                  {/* Adicione mais serviços conforme necessário */}
                </div>
              </div>
              <div className='form-group'>
                <label>Total de Tempo:</label>
                <p>{formData.totalDuration} minutos</p>
              </div>
              <div className='form-group'>
                <label>Data:</label>
                <input type='date' name='date' value={formData.date} onChange={handleInputChange} required />
              </div>
              <div className='form-group'>
                <label>Hora:</label>
                <input type='time' name='time' value={formData.time} onChange={handleInputChange} required />
              </div>
              <button type='submit'>Confirmar Agendamento</button>
            </form>
          )}
          <button className='back-button'>Voltar</button>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
