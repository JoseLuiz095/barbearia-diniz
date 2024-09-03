import "./Navbar.css";
import logo from '../img/logo.png';
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

    // UseEffect para observar se as seções estão visíveis e atualizar o Link ativo
    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        console.log('Seção visível:', id);
                        setActiveLink(id);
                    }
                });
            },
            { threshold: 0.6 }
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
            <nav className="navbar navbar-expand bg-body-tertiary fixed-top">
                <div className="container-center">
                    <Link className="navbar-brand d-flex align-items-center" href="#home"
                        to="home"
                        smooth={true}
                        duration={1000}
                        offset={-96}
                        onClick={() => setIsNavCollapsed(true)}
                    >
                        <img
                            src={logo}
                            alt="Logo da barbearia Diniz"
                            width="42"
                            height="42"
                            className='img'
                        />
                        <h1>Barbearia Diniz</h1>
                    </Link>
                    <hr className="barra" />

                    <ul className="navbar-select">
                        <li className="nav-item">
                            <Link
                                href="#home"
                                className={`nav-Link ${activeLink === 'home' ? 'active-nav' : ''}`}
                                to="home"
                                smooth={true}
                                duration={1000}
                                offset={-200}
                                onClick={() => setIsNavCollapsed(true)}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href="#sobre"
                                className={`nav-Link ${activeLink === 'sobre' ? 'active-nav' : ''}`}
                                to="sobre"
                                smooth={true}
                                duration={1000}
                                offset={-130}
                                onClick={() => setIsNavCollapsed(true)}
                            >
                                Sobre
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href="#feedBack"
                                className={`nav-Link ${activeLink === 'feedBack' ? 'active-nav' : ''}`}
                                to="feedBack"
                                smooth={true}
                                duration={1000}
                                offset={-130}
                                onClick={() => setIsNavCollapsed(true)}
                            >
                                FeedBack
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href="#agenda"
                                className={`nav-Link ${activeLink === 'agenda' ? 'active-nav' : ''}`}
                                to="agenda"
                                smooth={true}
                                duration={1000}
                                offset={-130}
                                onClick={() => setIsNavCollapsed(true)}
                            >
                                Agendamento
                            </Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;
