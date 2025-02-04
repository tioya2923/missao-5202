import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="main-content">
      {/* Conteúdo principal da página aqui */}
      <div className="footer-container">
        <div className="footer">
          <div className="footer-links">
            <div className='title-footer'>Institucional</div>
            <div className='other-footers-links'><a href='#apresentacao'>Apresentação</a></div>
            <div className='other-footers-links'><a href='#noticias'>Notícias</a></div>
          </div>
          <div className="footer-links">
            <div className='title-footer'>Ensino</div>
            <div className='other-footers-links'><a href='#faculdades'>Faculdades</a></div>
            <div className='other-footers-links'><a href='#escolas'>Escolas</a></div>
            <div className='other-footers-links'><a href='#ensino'>Ensino</a></div>
            <div className='other-footers-links'><a href='#cursos'>Cursos</a></div>
            <div className='other-footers-links'><a href='#candidaturas'>Candidaturas</a></div>
            <div className='other-footers-links'><a href='#porque-ispoc'>Porquê o ISPOC</a></div>
          </div>
          <div className="footer-links">
            <div className='title-footer'>Contactos</div>
            <div className='other-footers-links'><a href='#institucionais'>Institucionais</a></div>
            <div className='other-footers-links'><a href='#academicos'>Académicos</a></div>
          </div>
          <div className="footer-links">
            <div className='title-footer'>Ligações úteis</div>
            <div className='other-footers-links'><a href='#e-servicos'>E-Serviços</a></div>
          </div>
          <div className="footer-links">
            <div className='title-footer'>Morada</div>
            <div className='address'>Rua São Paulo II, Huambo, Angola</div>
            <div>
              <a href="mailto:info@ispoc.ao" className='address'>info@ispoc.ao</a>
            </div>
            <div>
              <a href="tel:+244945836101" className='address'>+244 945 836 101</a>
            </div>
          </div>
          <div className="footer-links">
            <div className='title-footer'>Junte-se a nós</div>
            <div className='social-icons'>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f" style={{ color: 'white', margin: '0 10px' }}></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in" style={{ color: 'white', margin: '0 10px' }}></i>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube" style={{ color: 'white', margin: '0 10px' }}></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram" style={{ color: 'white', margin: '0 10px' }}></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
