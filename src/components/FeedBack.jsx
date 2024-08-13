import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './FeedBack.css'; 

// Suponha que os ícones de perfil estão armazenados na pasta 'assets'
import post01 from '../img/icon-perfil.png'; 
// import post02 from './assets/post02.jpg'; 
// import post03 from './assets/post03.jpg'; 


const feedbacks = [
  { id: 1, image: post01, name: 'Diniz', description: 'Descrição do feedback do Diniz' },
  { id: 2, image: post01, name: 'Cliente 2', description: 'Descrição do feedback do Cliente 2' },
  { id: 3, image: post01, name: 'Cliente 3', description: 'Descrição do feedback do Cliente 3' },
  // Adicione mais objetos conforme necessário
];

const FeedBack = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  return (
    <section className="feedBack" id="FeedBack">
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
