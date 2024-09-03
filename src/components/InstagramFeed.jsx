import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// Importação de imagens e vídeos
import logo from '../img/logo.png';
import post02 from '../img/post03-instagramFeed.jpg';
import post03 from '../img/post03-instagramFeed.jpg';
import post04 from '../img/post04-instagramFeed.mp4';
import post06 from '../img/post06-instagramFeed.jpg';
import circuloStorys from '../img/circulo-InstagramFeed.png';

import "./InstagramFeed.css";

const InstagramFeed = () => {
  // Estados para contagem de publicações, seguidores e seguindo
  const [postCount, setPostCount] = useState(0);
  const [followersCount, setFollowersCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);

  // Hook para verificar se o componente está visível na viewport
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      // Função para incrementar contadores
      const incrementCount = (setter, maxCount) => {
        let count = 0;
        const interval = setInterval(() => {
          count += 1;
          setter(count);
          if (count === maxCount) {
            clearInterval(interval);
          }
        }, 8);
      };

      incrementCount(setPostCount, 150);
      incrementCount(setFollowersCount, 640);
      incrementCount(setFollowingCount, 320);
    }
  }, [inView]);

  return (
    <div ref={ref} className="instagram">
      {/* Seção de perfil do Instagram */}
      <div className="perfil d-flex align-items-center mb-4 flex-wrap">
        {/* Imagem de perfil e círculo de stories */}
        <div className="profile-ring">
          <img src={circuloStorys} alt="Círculo Storys" className="circulo-storys" />
          <img
            src={logo}
            alt="Profile"
            className="rounded-circle profile-image"
          />
        </div>
        {/* Descrição do perfil */}
        <div className="descricao text-center text-md-start">
          <h2 className="mb-2 ms-2">dinizbarbershopp</h2>
          <div className="d-flex justify-content-around align-items-center text-center">
            <span className="descricao-text"><strong>{postCount}</strong> publicações</span>
            <span className="descricao-text"><strong>{followersCount}</strong> seguidores</span>
            <span className="descricao-text"><strong>{followingCount}</strong> seguindo</span>
          </div>
        </div>
      </div>

      {/* Grid de posts do Instagram */}
      <div className="row g-2 posts">
        <div className="col-4 col-sm-4 col-md-4">
          <img src={post06} alt="Post 1" className="img-fluid img-post" />
        </div>
        <div className="col-4 col-sm-4 col-md-4">
          <img src={post02} alt="Post 2" className="img-fluid img-post" />
        </div>
        <div className="col-4 col-sm-4 col-md-4">
          <video
            src={post04}
            className="img-fluid img-post"
            autoPlay
            muted
            loop
            playsInline
            alt="Post 4"
          />
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;
