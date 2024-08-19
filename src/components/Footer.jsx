// Importando o CSS e bibliotecas necessárias
import './Footer.css';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
    // Hook para detecção de visibilidade do footer
    const { ref, inView } = useInView({
        triggerOnce: true, // Garante que a animação ocorra apenas uma vez
        threshold: 0.3,    // 30% do componente precisa estar visível para disparar
    });

    return (
        // Footer da página com efeito de animação condicional
        <footer ref={ref} className={`footer ${inView ? 'zoomInUp' : ''}`} >
            <section>
                {/* Seção adicional pode ser utilizada para links ou informações extras */}
            </section>
            <p>
                {/* Texto de copyright com link para o portfólio */}
                © Copyright 2024 – Barbearia do Diniz – Todos os direitos reservados – 
                Feito por <a href="https://portifolio-jl095.netlify.app" target="_blank" rel="noopener noreferrer">DevJL095</a>
            </p>
        </footer>
    );
};

export default Footer;
