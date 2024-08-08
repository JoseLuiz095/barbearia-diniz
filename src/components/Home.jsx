import "./Home.css"
import React from 'react'
import capa from '../img/capa.png';
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <section className='container' id='home'>
      <div className="container-capa d-flex justify-content-around align-items-center">
        <img
          src={capa}
          alt="Capa da barbearia diniz"
          width="40%"
          height="40%"
          className="d-inline-block capa bounceInLeft"
        />
        <div className='gatilho bounceInRight d-flex flex-column  align-items-center'>
          <h2>
            Aqui é barba, cabelo e bigode! <br/>
            Venha dar aquele tapa no visual
          </h2>

          <Link
            className="btn btn-danger"
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

export default Home