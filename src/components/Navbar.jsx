import "./Navbar.css";
import logo from '../img/logo.jpg';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [activeLink, setActiveLink] = useState('home');

    // Função para alternar o estado do menu de navegação
    const handleTogglerClick = () => {
        setIsNavCollapsed(!isNavCollapsed);
    };

    // UseEffect para observar se as seções estão visíveis e atualizar o link ativo
    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        setActiveLink(id);
                    }
                });
            },
            { threshold: 0.6 } // O link fica ativo quando 60% da seção é visível
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="navbar_container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <img
                            src={logo}
                            alt="Logo da barbearia Diniz"
                            width="40"
                            height="40"
                            className='img'
                        />
                        <h1>Barbearia do Diniz</h1>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={handleTogglerClick}
                        aria-controls="navbarTogglerDemo03"
                        aria-expanded={!isNavCollapsed}
                        aria-label="Toggle navigation"
                    >
                        {isNavCollapsed ? <FaBars size={24} /> : <FaTimes size={24} />}
                    </button>
                    <div className={`${isNavCollapsed ? 'collapse' : 'show'} navbar-collapse justify-content-lg-end`} id="navbarTogglerDemo03">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                                    to="home"
                                    smooth={true}
                                    duration={1000}
                                    offset={-82}
                                    onClick={() => setIsNavCollapsed(true)}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${activeLink === 'sobre' ? 'active' : ''}`}
                                    to="sobre"
                                    smooth={true}
                                    duration={1000}
                                    offset={-82}
                                    onClick={() => setIsNavCollapsed(true)}
                                >
                                    Sobre
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${activeLink === 'feedBack' ? 'active' : ''}`}
                                    to="feedBack"
                                    smooth={true}
                                    duration={1000}
                                    offset={-82}
                                    onClick={() => setIsNavCollapsed(true)}
                                >
                                    FeedBack
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${activeLink === 'agenda' ? 'active' : ''}`}
                                    to="agenda"
                                    smooth={true}
                                    duration={1000}
                                    offset={-82}
                                    onClick={() => setIsNavCollapsed(true)}
                                >
                                    Agendamento
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
