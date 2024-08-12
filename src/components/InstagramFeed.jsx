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
    triggerOnce: true,
    threshold: 0.3,
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
    <div ref={ref} className="instagram container mt-5">
      {/* Header do Perfil */}
      <div className="perfil d-flex align-items-center mb-4 flex-wrap">
        <div className="profile-ring">
          <img src={circuloStorys} alt="Círculo Storys" className="circulo-storys" />
          <img
            src={logo}
            alt="Profile"
            className="rounded-circle profile-image"
          />
        </div>
        <div className=" descricao text-center text-md-start">
          <h2 className="mb-2 ms-3">dinizbarbershopp</h2>
          <div className="d-flex justify-content-around align-items-center text-center">
            <span className="descricao-text"><strong>{postCount}</strong> publicações</span>
            <span className="descricao-text"><strong>{followersCount}</strong> seguidores</span>
            <span className="descricao-text"><strong>{followingCount}</strong> seguindo</span>
          </div>
        </div>
      </div>

      {/* Grid de Posts */}
      <div className="row g-2 posts">
        <div className="col-4 col-sm-4 col-md-4">
          <img src={post01} alt="Post 1" className="img-fluid img-post" />
        </div>
        <div className="col-4 col-sm-4 col-md-4">
          <img src={post02} alt="Post 2" className="img-fluid img-post" />
        </div>
        <div className="col-4 col-sm-4 col-md-4">
          <img src={post03} alt="Post 3" className="img-fluid img-post" />
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;
