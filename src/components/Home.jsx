// Importações necessárias para a página Home
import "./Home.css";
import React from 'react';
import capa from '../img/capa.png';
import { Link } from 'react-scroll';

// Componente Home - seção inicial do site da Barbearia Diniz
const Home = () => {
  return (
    // Seção principal da página inicial
    <section className='container' id='home'>
      <div className="container-capa d-flex justify-content-around align-items-center">
        {/* Imagem de capa da barbearia */}
        <img
          src={capa}
          alt="Capa da Barbearia Diniz"
          width="45%"
          height="45%"
          className="d-inline-block capa bounceInLeft"
        />
        {/* Texto promocional e botão de agendamento */}
        <div className='gatilho bounceInRight d-flex flex-column align-items-center'>
          <h2>
            Aqui é barba, cabelo e bigode! <br/>
            Venha dar aquele tapa no visual
          </h2>

          {/* Link para a seção de agendamento */}
          <Link
            className="btn btn-info"
            id="botao"
            to="agenda"
            smooth={true}
            duration={1000}
            offset={-82}
            aria-disabled="true"
          >
            Agende Online
          </Link>
        </div>
      </div>
    </section>
  )
}

// Exportação do componente Home
export default Home;
