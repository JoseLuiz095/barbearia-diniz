import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import logo from '../img/logo.jpg';
import post01 from '../img/post01-instagramFeed.jpg';
import post02 from '../img/post02-instagramFeed.jpg';
import post03 from '../img/post03-instagramFeed.jpg';
import circuloStorys from '../img/circulo-InstagramFeed.png';

import "./InstagramFeed.css";

const InstagramFeed = () => {
  const [postCount, setPostCount] = useState(0);
  const [followersCount, setFollowersCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,  // Garante que a animação ocorra uma vez
    threshold: 0.3,     // 30% do componente visível antes de disparar
  });

  useEffect(() => {
    if (inView) {
      const incrementCount = (setter, maxCount) => {
        let count = 0;
        const interval = setInterval(() => {
          count += 1;
          setter(count);
          if (count === maxCount) {
            clearInterval(interval);
          }
        }, 5);
      };

      incrementCount(setPostCount, 150);
      incrementCount(setFollowersCount, 640);
      incrementCount(setFollowingCount, 320);
    }
  }, [inView]);

  return (
    <div ref={ref} className="container mt-5">
      {/* Header do Perfil */}
      <div className="d-flex align-items-center mb-4">
        <div className="profile-ring">
          <img src={circuloStorys} alt="Círculo Storys" className="circulo-storys" />
          <img
            src={logo}
            alt="Profile"
            className="rounded-circle profile-image"
            style={{ width: '150px', height: '150px' }}
          />
        </div>
        <div className="ms-3 descricao">
          <h2 className="mb-0">dinizbarbershopp</h2>
          <div className="d-flex mt-2">
            <span className=" text-center"><strong>{postCount}</strong> publicações</span>
            <span className=" text-center"><strong>{followersCount}</strong> seguidores</span>
            <span className=" text-center"><strong>{followingCount}</strong> seguindo</span>
          </div>
        </div>
      </div>

      {/* Grid de Posts */}
      <div className="row g-2">
        <div className="col-4">
          <img src={post01} alt="Post 1" className="img-fluid img-post" />
        </div>
        <div className="col-4">
          <img src={post02} alt="Post 2" className="img-fluid img-post" />
        </div>
        <div className="col-4">
          <img src={post03} alt="Post 3" className="img-fluid img-post" />
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;
