import React from 'react';
import { Link } from 'react-scroll';


import logo from '../img/logo.png';
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img
                        src={logo}
                        alt="Bootstrap logo"
                        width="40"
                        height="40"
                        className="d-inline-block align-text-top"
                    />
                    <h1>Barbearia do Diniz</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="home" smooth={true} duration={1000}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="sobre" smooth={true} duration={1000}>
                                Sobre
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="depoimentos" smooth={true} duration={1000}>
                                Depoimentos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="agenda" smooth={true} duration={1000}>
                                Agendamento
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
