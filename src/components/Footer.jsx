// Importando o CSS e bibliotecas necessárias
import './Footer.css';
import React from 'react';

const Footer = () => {
    
    return (
        <footer className={`footer`} >
            
            <p>
                {/* Texto de copyright com link para o portfólio */}
                © Copyright 2024 – Barbearia do Diniz – Todos os direitos reservados – 
                Feito por <a href="https://portifolio-jl095.netlify.app" target="_blank" rel="noopener noreferrer">DevJL095</a>
            </p>
        </footer>
    );
};

export default Footer;
