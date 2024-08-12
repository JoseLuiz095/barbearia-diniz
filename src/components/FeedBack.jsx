import React from 'react'
import post01 from '../img/post01-instagramFeed.jpg';
import post02 from '../img/post02-instagramFeed.jpg';
import post03 from '../img/post03-instagramFeed.jpg';

const FeedBack = () => {
  return (
    <section className='container' id='feedBack'>
      <h1>FeedBack</h1>
      <div id="cardCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-center">
              <div className="card" style={{width: "18rem;"}}>
                <img src={post01} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <div className="card" style={{width: "18rem;"}}>
                <img src={post01} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <p className="card-text">Another example text for the card content.</p>
                  </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <div className="card" style={{width: "18rem;"}}>
                <img src={post01} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <p className="card-text">More example text to illustrate the card content.</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#cardCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#cardCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </section>
  )
}

export default FeedBack