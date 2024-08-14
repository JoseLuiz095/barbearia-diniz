import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useInView } from 'react-intersection-observer';
import './FeedBack.css'; 

import post01 from '../img/icon-perfil.png'; 

const feedbacks = [
  { id: 1, image: post01, name: 'Carlos Souza', description: 'Atendimento excelente e corte impecável. Recomendo!' },
  { id: 2, image: post01, name: 'Marcos Lima', description: 'Corte de cabelo perfeito, exatamente como eu queria.' },
  { id: 3, image: post01, name: 'Ricardo Fernandes', description: 'Ambiente agradável e profissionais de primeira linha.' },
  { id: 4, image: post01, name: 'Gustavo Oliveira', description: 'Saí muito satisfeito com o resultado. Ótima barbearia!' },
  { id: 5, image: post01, name: 'Felipe Santos', description: 'Melhor corte que já fiz, com certeza voltarei.' },
  { id: 6, image: post01, name: 'Rafael Silva', description: 'Serviço rápido e de alta qualidade. Nota 10!' },
  { id: 7, image: post01, name: 'André Almeida', description: 'Profissionais muito qualificados. Fiquei impressionado.' },
  { id: 8, image: post01, name: 'Lucas Martins', description: 'O corte ficou exatamente como eu pedi. Excelente trabalho!' },
  { id: 9, image: post01, name: 'Thiago Costa', description: 'A barbearia tem um ambiente incrível e o corte ficou ótimo.' },
  { id: 10, image: post01, name: 'Bruno Rocha', description: 'Atendimento personalizado e corte de alta qualidade. Recomendo muito!' },
];

const FeedBack = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Garante que a animação ocorra uma vez
    threshold: 0.3,    // 30% do componente visível antes de disparar
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };
  

  return (
<<<<<<< HEAD
    <section ref={ref} className={`${inView ? 'zoomInUp' : ''}`} id="feedBack">
=======
    <section className="feedBack" id="feedBack">
>>>>>>> 1372e9fd96c1330ce8ea89185f3a41196dd68e2b
      <div className="text-center">
        <h2 className="title">FeedBack</h2>
      </div>
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
