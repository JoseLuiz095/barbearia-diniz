// Importações necessárias para o componente Home
import "./Home.css";
import React from 'react';

// Importação de imagens utilizadas no carrossel
import post01 from '../img/post01-instagramFeed.webp';
import post02 from '../img/post03-instagramFeed.jpg';
import post03 from '../img/post04-instagramFeed.webp';
import post04 from '../img/post05-instagramFeed.webp';


// Componente Home - seção inicial do site da Barbearia Diniz
const Home = () => {
  return (
    // Seção principal da página inicial, usada para âncoras e navegação interna
    <section id='home'>
      {/* Início do carrossel de imagens, utilizando a classe 'carousel' do Bootstrap */}
      <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
        {/* Div que contém os itens do carrossel */}
        <div className="carousel-inner">
          {/* Primeiro item do carrossel - imagem com chamada para ação */}
          <div className="carousel-item active">
            <div className="img-wrapper">
              <img src={post01} className="img-card-home d-block " alt="Imagem de estilo masculino na Barbearia Diniz" />
              <div className="aurelia"></div>
              <div className="carousel-caption fundo-caption center">
                <h1>Agende seu horário agora!</h1>
                <a href="https://www.barberbook.com.br/43" className="btn btn-outline-light btn-home">Agendar</a>
              </div>
            </div>
          </div>
          {/* Demais itens seguem a mesma estrutura do primeiro, com mensagens e imagens diferentes */}
          <div className="carousel-item">
            <div className="img-wrapper">
              <img src={post02} className="img-card-home d-block " alt="Transforme seu visual na Barbearia Diniz" />
              <div className="aurelia"></div>
              <div className="carousel-caption fundo-caption">
                <h1>Seu novo visual está a um clique!</h1>
                <a href="https://www.barberbook.com.br/43" className="btn btn-outline-light btn-home">Agendar</a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="img-wrapper">
              <img src={post03} className="img-card-home d-block " alt="Estilo e cuidado na Barbearia Diniz" />
              <div className="aurelia"></div>
              <div className="carousel-caption fundo-caption">
                <h1>Transforme seu estilo conosco!</h1>
                <a href="https://www.barberbook.com.br/43" className="btn btn-outline-light btn-home">Agendar</a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="img-wrapper">
              <img src={post04} className="img-card-home d-block " alt="Cuidados masculinos na Barbearia Diniz" />
              <div className="aurelia"></div>
              <div className="carousel-caption fundo-caption">
                <h1>Reserve seu horário hoje mesmo!</h1>
                <a href="https://www.barberbook.com.br/43" className="btn btn-outline-light btn-home">Agendar</a>
              </div>
            </div>
          </div>
          {/* Item comentado, pronto para futura adição se necessário */}
          {/* <div className="carousel-item">
            <div className="img-wrapper">
              <img src={post05} className="img-card-home d-block " alt="Corte e estilo na Barbearia Diniz" />
              <div className="aurelia"></div>
              <div className="carousel-caption fundo-caption center">
                <h1>Estamos prontos para te atender!</h1>
                <a href="https://www.barberbook.com.br/43" className="btn btn-outline-light btn-home">Agendar</a>
              </div>
            </div>
          </div> */}
        </div>
        {/* Botões de navegação para o carrossel (anterior e próximo) */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev" aria-label="Slide anterior">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next" aria-label="Slide seguinte">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>
    </section>
  );
}

// Exportação do componente Home para ser utilizado em outras partes do aplicativo
export default Home;
