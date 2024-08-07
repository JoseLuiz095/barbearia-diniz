import React, { useState } from 'react'; // Importa React e useState do pacote react.
import { Link } from 'react-scroll'; // Importa o componente Link para navegação suave.
import { FaBars, FaTimes } from 'react-icons/fa'; // Importa ícones FaBars (menu) e FaTimes (fechar) do pacote react-icons.

import logo from '../img/logo.png'; // Importa a imagem do logo para ser exibido na barra de navegação.
import "./Navbar.css"; // Importa o arquivo de estilos CSS para o componente Navbar.

const Navbar = () => {
    // Declara um estado para controlar se o menu está colapsado ou não.
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [activeLink, setActiveLink] = useState('home'); // Estado para rastrear o link ativo

    // Função que será chamada quando um link do menu for clicado.
    // Fecha o menu definindo isNavCollapsed como true.
    const handleNavLinkClick = (link) => {
        setIsNavCollapsed(true);
        setActiveLink(link); // Atualiza o link ativo
    };

    // Função que alterna o estado de colapso do menu.
    // Se o menu está colapsado, ele será expandido, e vice-versa.
    const handleTogglerClick = () => {
        setIsNavCollapsed(!isNavCollapsed);
    };

    return (
        <div className="navbar_container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    {/* Link para a marca da barra de navegação, que inclui o logo e o nome da empresa */}
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <img
                            src={logo} // Logo da barbearia.
                            alt="Logo da barbearia Diniz" // Texto alternativo para a imagem.
                            width="40" // Largura da imagem.
                            height="40" // Altura da imagem.
                            className="d-inline-block align-text-top" // Classe CSS para alinhar o logo.
                        />
                        <h1 className="ms-2">Barbearia do Diniz</h1> {/* Nome da empresa ao lado do logo */}
                    </a>
                    {/* Botão para alternar o menu (abrir/fechar) */}
                    <button className="navbar-toggler" type="button" onClick={handleTogglerClick} aria-controls="navbarTogglerDemo03" aria-expanded={!isNavCollapsed} aria-label="Toggle navigation">
                        {/* Exibe FaBars se o menu estiver colapsado, e FaTimes se estiver expandido */}
                        {isNavCollapsed ? <FaBars size={24} /> : <FaTimes size={24} />}
                    </button>
                    {/* Div que contém o menu de navegação. Ela é colapsada se isNavCollapsed for true */}
                    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-lg-end`} id="navbarTogglerDemo03">
                        <ul className="navbar-nav">
                            {/* Lista de links de navegação */}
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                                    aria-current="page"
                                    to="home"
                                    smooth={true}
                                    duration={1000}
                                    offset={-82}
                                    onClick={() => handleNavLinkClick('home')} // Atualiza o link ativo ao clicar no link.
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
                                    onClick={() => handleNavLinkClick('sobre')} // Atualiza o link ativo ao clicar no link.
                                >
                                    Sobre
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${activeLink === 'depoimentos' ? 'active' : ''}`}
                                    to="depoimentos"
                                    smooth={true}
                                    duration={1000}
                                    offset={-82}
                                    onClick={() => handleNavLinkClick('depoimentos')} // Atualiza o link ativo ao clicar no link.
                                >
                                    Depoimentos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${activeLink === 'agenda' ? 'active' : ''}`}
                                    to="agenda"
                                    smooth={true}
                                    duration={1000}
                                    offset={-82}
                                    onClick={() => handleNavLinkClick('agenda')} // Atualiza o link ativo ao clicar no link.
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

export default Navbar; // Exporta o componente Navbar para ser usado em outros lugares.
