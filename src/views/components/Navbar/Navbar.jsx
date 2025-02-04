import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Logo/ispoc.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEnsinoDropdownOpen, setIsEnsinoDropdownOpen] = useState(false);

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

  return (
    <div className="navbar-container">
      <div className="navbar">
        <a href='#/home' className='navbar-logo'>
          <img src={logo} alt="Logo" />
        </a>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <div className="navbar-line">
            <a href="#bibliotecas">Bibliotecas</a>
            <a href="#ispoc-dit">ISPOC DIT</a>            
            <a href="#loja-online">Loja Online</a>
            <input type="text" placeholder="Pesquisar..." />
          </div>
          <div className="navbar-line">
            <div
              className="navbar-line-two"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#o-ispoc">O ISPOC</a>
              {isDropdownOpen && (
                <div className="dropdown">
                  <div className="dropdown-column">
                    <a href="#apresentacao">Apresentação</a>
                    <a href="#missao-visao-estrategia">Missão, Visão, Estratégia</a>
                    <a href="#historia">História</a>
                    <a href="#organizacao">Organização</a>
                    <a href="#entidades-associadas">Entidades Associadas</a>
                    <a href="#comunicacoes-da-directoria">Comunicações da Directoria</a>
                    <a href="#provedorias">Provedorias</a>
                    <a href="#sistema-de-qualidade">Sistema de Qualidade</a>
                    <a href="#documentacao-e-legislacao">Documentação e Legislação</a>
                    <a href="#protecao-de-dados-pessoais">Proteção de Dados Pessoais</a>
                    <a href="#actividade-editorial">Actividade Editorial</a>
                  </div>
                  <div className="dropdown-column">
                    <a href="#noticias">Notícias</a>
                    <a href="#eventos">Eventos</a>
                  </div>
                  <div className="dropdown-column">
                    <a href="#revista">Revista</a>
                  </div>
                  <div className="dropdown-column">
                    <a href="#calendario-academico">Calendário Académico</a>
                  </div>
                </div>
              )}
            </div>
            <div
              className="navbar-line-two"
              onMouseEnter={handleEnsinoMouseEnter}
              onMouseLeave={handleEnsinoMouseLeave}
            >
              <a href="#ensino">Ensino</a>
              {isEnsinoDropdownOpen && (
                <div className="dropdown">
                  <div className="dropdown-column">
                    <a href="#candidatura">Candidatura</a>
                    <a href="#condicoes-de-acesso">Condições de Acesso</a>
                    <a href="#provas-de-ingresso">Provas de Ingresso</a>
                    <a href="#matriculas">Matrículas</a>
                    <a href="#propinas">Propinas</a>
                    <a href="#apoio-social-e-bolsas">Apoio Social e Bolsas</a>
                    <a href="#faqs">FAQs</a>
                  </div>             

                </div>
              )}
            </div>
            <a href="#crusos" className="navbar-line-two">Crusos</a>  
            <a href="#e-servicos" className="navbar-line-two">E-Serviços</a>
            <a href="#pesquisa-inovacao" className="navbar-line-two">Pesquisa e Inovação</a>
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
