import "./Home.css"
import React from 'react'
import capa from '../img/capa.png';
const Home = () => {
  return (
    <section className='container' id='home'>
      <div className="d-flex justify-content-around align-items-center">
        <img
          src={capa}
          alt="Capa da barbearia diniz"
          width="45%"
          height="45%"
          className="d-inline-block p-4"
        />
        <div className='m-4 d-flex flex-column justify-content-center align-items-center'>
          <h2 >
            Aqui é barba, cabelo e bigode!
            Venha dar aquele tapa no visual
          </h2>

          <a class="btn btn-danger" aria-disabled="true">Agende Online</a>
        </div>

      </div>
    </section>
  )
}

export default Home