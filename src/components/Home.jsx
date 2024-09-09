// Importações necessárias para a página Home
import "./Home.css";
import React from 'react';

import post01 from '../img/post01-instagramFeed.jpg';
import post02 from '../img/post03-instagramFeed.jpg';
import post03 from '../img/post04-instagramFeed.jpg';
import post04 from '../img/post05-instagramFeed.jpg';
import post05 from '../img/post06-instagramFeed.jpg';

// Componente Home - seção inicial do site da Barbearia Diniz
const Home = () => {
  return (
    // Seção principal da página inicial
    <section id='home'>
      <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="img-wrapper">
              <img src={post01} className="img-card-home d-block " alt="..." />
              <div className="aurelia"></div>
              <div className="carousel-caption fundo-caption center">
                <h1>Agende seu horário agora!</h1>
                <a href="https://www.barberbook.com.br/43" className="btn btn-outline-light btn-home">Agendar</a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="img-wrapper">
              <img src={post02} className="img-card-home d-block " alt="..." />
              <div className="aurelia"></div>
              <div className="carousel-caption fundo-caption">
                <h1>Seu novo visual está a um clique!</h1>
                <a href="https://www.barberbook.com.br/43" className="btn btn-outline-light btn-home">Agendar</a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="img-wrapper">
              <img src={post03} className="img-card-home d-block " alt="..." />
              <div className="aurelia"></div>
              <div className="carousel-caption fundo-caption">
                <h1>Transforme seu estilo conosco!</h1>
                <a href="https://www.barberbook.com.br/43" className="btn btn-outline-light btn-home">Agendar</a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="img-wrapper">
              <img src={post04} className="img-card-home d-block " alt="..." />
              <div className="aurelia"></div>
              <div className="carousel-caption fundo-caption ">
                <h1>Reserve seu horário hoje mesmo!</h1>
                <a href="https://www.barberbook.com.br/43" className="btn btn-outline-light btn-home">Agendar</a>
              </div>
            </div>
          </div>
          {/* <div className="carousel-item">
            <div className="img-wrapper">
              <img src={post05} className="img-card-home d-block " alt="..." />
              <div className="aurelia"></div>
              <div className="carousel-caption fundo-caption center">
                <h1>Estamos prontos para te atender!</h1>
                <a href="https://www.barberbook.com.br/43" className="btn btn-outline-light btn-home">Agendar</a>
              </div>
            </div>
          </div> */}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

// Exportação do componente Home
export default Home;
