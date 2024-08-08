import React, { useState, useEffect } from 'react';

//Fotos do instagram
import capa from '../img/logo.png';
import post01 from '../img/post01-instagramFeed.jpg';
import post02 from '../img/post02-instagramFeed.jpg';
import post03 from '../img/post03-instagramFeed.jpg';

const InstagramFeed = () => {
  // Estados para os contadores
  const [postCount, setPostCount] = useState(0);
  const [followersCount, setFollowersCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);

  useEffect(() => {
    // Função para incrementar os contadores
    const incrementCount = (setter, maxCount) => {
      let count = 0;
      const interval = setInterval(() => {
        count += 1;
        setter(count);
        if (count === maxCount) {
          clearInterval(interval);
        }
      }, 10); // Tempo entre os incrementos (em ms)
    };

    incrementCount(setPostCount, 150); // Incrementa até 150
    incrementCount(setFollowersCount, 640); // Incrementa até 340
    incrementCount(setFollowingCount, ); // Incrementa até 210
  }, []);

  return (
    <div className="container mt-5">
      {/* Header do Perfil */}
      <div className="d-flex align-items-center mb-4">
        <img
          src={capa}
          alt="Profile"
          className="rounded-circle me-3"
          style={{ width: '150px', height: '150px' }}
        />
        <div>
          <h2 className="mb-0">@usuario</h2>
          <div className="d-flex mt-2">
            <span className="me-3"><strong>{postCount}</strong> posts</span>
            <span className="me-3"><strong>{followersCount}</strong> seguidores</span>
            <span><strong>{followingCount}</strong> seguindo</span>
          </div>
        </div>
      </div>

      {/* Grid de Posts */}
      <div className="row g-2">
        <div className="col-4">
          <img src={post01} alt="Post 1" className="img-fluid" />
        </div>
        <div className="col-4">
          <img src={post02} alt="Post 2" className="img-fluid" />
        </div>
        <div className="col-4">
          <img src={post03} alt="Post 3" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;
