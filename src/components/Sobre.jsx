import InstagramFeed from './InstagramFeed'
import React from 'react'

import "./Sobre.css"

const Sobre = () => {
  return (
    <section className='container' id='sobre'>
      <h1>Sobre</h1>
      <div className="d-flex flex-row">
        <div className="d-flex flex-column">
          <h3>Siga-nos no Instagram para mais conteúdo exclusivo! <br />
            Quer mais atualizações, dicas e inspiração? Siga nossa jornada no Instagram e faça parte da nossa comunidade!
            📸 dinizbarbershopp<br />
            Descubra histórias por trás dos bastidores, promoções exclusivas e muito mais. Não perca nenhum detalhe!<br />
            Siga-nos agora mesmo para estar sempre conectado. Estamos ansiosos para interagir com você!
            </h3>
            <a href="https://www.instagram.com/dinizbarbershopp/" className="btn btn-danger">Instagram</a>
        </div>
      </div>
      <InstagramFeed />
    </section>
  )
}

export default Sobre