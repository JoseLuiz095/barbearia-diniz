import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useInView } from 'react-intersection-observer';
import './FeedBack.css'; 

import post01 from '../img/icon-perfil.png'; 

// Lista de feedbacks dos clientes
const feedbacks = [
  { id: 1, image: post01, name: 'Carlos Souza', description: 'Atendimento excelente e corte impecável. Recomendo!' },
  { id: 2, image: post01, name: 'Marcos Lima', description: 'Corte de cabelo perfeito, exatamente como eu queria.' },
  { id: 3, image: post01, name: 'Ana Paula', description: 'Ambiente agradável e profissionais qualificados. Satisfação garantida!' },
  { id: 4, image: post01, name: 'Rafael Dias', description: 'Serviço de primeira qualidade. Vou voltar sempre!' },
  { id: 5, image: post01, name: 'Beatriz Almeida', description: 'Ótimo atendimento e preço justo. Super indico!' },
  { id: 6, image: post01, name: 'João Pedro', description: 'Profissionais dedicados e corte moderno. Gostei muito!' },
  // Adicione mais feedbacks conforme necessário
];


const FeedBack = () => {
  // Ref e estado para a animação de entrada quando o componente se torna visível
  const { ref, inView } = useInView({
    triggerOnce: true, // Garante que a animação ocorra uma vez
    threshold: 0.3,    // 30% do componente visível antes de disparar a animação
  });

  // Configurações para o carrossel de feedbacks
  const settings = {
    dots: true, // Exibe os pontos de navegação
    infinite: true, // Permite rolagem infinita dos slides
    speed: 500, // Velocidade da transição dos slides
    slidesToShow: 3, // Número de slides visíveis por vez
    slidesToScroll: 1, // Número de slides que serão rolados por vez
    autoplay: true, // Ativa o autoplay do carrossel
    autoplaySpeed: 5000, // Intervalo do autoplay em milissegundos
    arrows: false, // Desativa as setas de navegação
    centerMode: true, // Centraliza o slide ativo
    centerPadding: '0px', // Padding ao redor do slide central
    responsive: [
      {
        breakpoint: 1024, // Para telas de até 1024px de largura
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768, // Para telas de até 768px de largura
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 480, // Para telas de até 480px de largura
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };
  
  return (
    // Componente FeedBack com animação ao se tornar visível
    <section ref={ref} className={inView ? 'zoomInUp' : ''} id="feedBack">
      <div className="text-center">
        <h2 className="title">FeedBack</h2>
      </div>
      {/* Carrossel de feedbacks dos clientes */}
      <Slider {...settings} className="carousel">
        {feedbacks.map((feedback) => (
          <div key={feedback.id}>
            <div className="card">
              <div className="box">
                <img src={feedback.image} alt={`Feedback do ${feedback.name}`} className="img-cards" />
                <div className="text">{feedback.name}</div>
                <p>{feedback.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default FeedBack;
