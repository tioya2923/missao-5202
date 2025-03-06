import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Logo/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEnsinoDropdownOpen, setIsEnsinoDropdownOpen] = useState(false);
  const [isCatecismoDropdownOpen, setIsCatecismoDropdownOpen] = useState(false); // New state for Catecismo dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleEnsinoMouseEnter = () => {
    setIsEnsinoDropdownOpen(true);
  };

  const handleEnsinoMouseLeave = () => {
    setIsEnsinoDropdownOpen(false);
  };

  const handleCatecismoMouseEnter = () => {
    setIsCatecismoDropdownOpen(true);
  };

  const handleCatecismoMouseLeave = () => {
    setIsCatecismoDropdownOpen(false);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <a href='/' className='navbar-logo'>
          <img src={logo} alt="Logo" />
        </a>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <div className="navbar-line">
            <input type="text" placeholder="Pesquisar..." />
          </div>
          <div className="navbar-line">
            <div
              className="navbar-line-two"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#arquidiocese-huambo">Arquidiocese do Huambo</a>
              {isDropdownOpen && (
                <div className="dropdown">
                  <div className="dropdown-column">
                    <a href="bispo-diocese">Bispo da Diocese</a>
                    <a href="TodosBisposEmeritos">Bispos Eméritos</a>
                    <a href="#clero">Clero</a>
                    <a href="#curia-arquidiocesana">Cúria Arquidiocesana</a>
                    <a href="#paroquias">Paróquias</a>
                    <a href="#missoes">Missões</a>
                    <a href="#boletim-arquidiocesano">Boletim Arquidiocesano</a>
                  </div>
                  <div className="dropdown-column">
                    <a href="#seminarios">Seminários</a>
                    <a href="#comunidades-religiosas">Comunidades Religiosas</a>
                  </div>
                  <div className="dropdown-column">
                    <a href="#movimentos-apostolado">Movimentos de Apostolado</a>
                    <a href="#associacoes-religiosas">Associações Religiosas</a>
                  </div>
                  <div className="dropdown-column">
                    <a href="#escolas-catolicas">Escolas Católicas</a>
                    <a href="#historia">História</a>
                  </div>
                </div>
              )}
            </div>
            <div
              className="navbar-line-two"
              onMouseEnter={handleEnsinoMouseEnter}
              onMouseLeave={handleEnsinoMouseLeave}
            >
              <a href="#liturgia">Liturgia</a>
              {isEnsinoDropdownOpen && (
                <div className="dropdown">
                  <div className="dropdown-column">


                    <a href="/Calendario">Calendário Litúrgico</a>
                    <a href="/ComentarioLiturgico">Comentário à Liturgia</a>
                  </div>
                  <div className="dropdown-column">
                    <a href="#lectio-divina">Lectio Divina</a>              
                    <a href="#santo-rosario">Santo Rosário</a>
                  </div>

                  <div className="dropdown-column">
                    <a href="#canticos-pt">Cânticos em Português</a>
                    <a href="#canticos-ub">Cânticos em Umbundu</a>
                  </div>
                </div>
              )}
            </div>
            <div
              className="navbar-line-two"
              onMouseEnter={handleCatecismoMouseEnter}
              onMouseLeave={handleCatecismoMouseLeave}
            >
              <a href="#catecismo">Catecismo</a>
              {isCatecismoDropdownOpen && (
                <div className="dropdown">
                  <div className="dropdown-column">
                    <a href="#catecismo-pt">Catecismo em Português</a>
                    <a href="#catecismo-umbundu">Catecismo em Umbundu</a>
                  </div>
                </div>
              )}
            </div>
            <a href="#e-servicos" className="navbar-line-two">Formação</a>
            <a href="#pesquisa-inovacao" className="navbar-line-two">A MH</a>
            <a href="#contacto" className="navbar-line-two">Contacto</a>
          </div>
        </div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
