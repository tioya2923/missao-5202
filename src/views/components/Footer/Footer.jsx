import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="main-content">
      {/* Conteúdo principal da página aqui */}
      <div className="footer-container">
        <div className="footer">
          <div className="footer-links">
            <div className='title-footer'>Missão no Huamo</div>
            <div className='other-footers-links'><a href='#apresentacao'>Apresentação</a></div>
            <div className='other-footers-links'><a href='#noticias'>Notícias</a></div>
          </div>
          <div className="footer-links">
            <div className='title-footer'>Arquidiocese do Huambo</div>
            <div className='other-footers-links'><a href='#bispo-diocese'>Bispo da Diocese</a></div>
            <div className='other-footers-links'><a href='#bispos-emeritos'>Bispos Eméritos</a></div>
            <div className='other-footers-links'><a href='#clero'>Clero</a></div>
            <div className='other-footers-links'><a href='curia-arquidiocesana'>Cúria Arquidiocesana</a></div>
            <div className='other-footers-links'><a href='#paroquias'>Paróquias</a></div>
            <div className='other-footers-links'><a href='#missoes'>Missões</a></div>
          </div>
          <div className="footer-links">
            <div className='title-footer'>Comunidade</div>
            <div className='other-footers-links'><a href='#seminarios'>Seminários</a></div>
            <div className='other-footers-links'><a href='#comunidades-religiosas'>Comunidades Religiosas</a></div>
            <div className='other-footers-links'><a href='#movimentos-apostolado'>Movimentos de Apostolado</a></div>
            <div className='other-footers-links'><a href='#associacoes-religiosas'>Associações Religiosas</a></div>
            <div className='other-footers-links'><a href='#escolas-catolicas'>Escolas Católicas</a></div>
          </div>
          <div className="footer-links">
            <div className='title-footer'>Liturgia</div>
            <div className='other-footers-links'><a href='#calendario-liturgico'>Calendário Litúrgico</a></div>
            <div className='other-footers-links'><a href='#comentario-liturgia'>Comentário à Liturgia</a></div>
            <div className='other-footers-links'><a href='#lectio-divina'>Lectio Divina</a></div>
            <div className='other-footers-links'><a href='#canticos-pt'>Cânticos em Português</a></div>
            <div className='other-footers-links'><a href='#canticos-ub'>Cânticos em Umbundu</a></div>
          </div>
          <div className="footer-links">
            <div className='title-footer'>Catecismo</div>
            <div className='other-footers-links'><a href='#catecismo-pt'>Catecismo em Português</a></div>
            <div className='other-footers-links'><a href='#catecismo-umbundu'>Catecismo em Umbundu</a></div>          
          </div>
          <div className="footer-links">
            <div className='title-footer'>Contacto</div>            
            <div>
              <a href="mailto:info@ispoc.ao" className='address'>info@mh.ao</a>
            </div>
            <div>
              <a href="tel:+244945836101" className='address'>+244 943 448 081</a>
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
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tiktok" style={{ color: 'white', margin: '0 10px' }}></i>
              </a>
              <a href="https://www.flickr.com/photos/fotosdamissaonohuambo/with/52264207612" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-flickr" style={{ color: 'white', margin: '0 10px' }}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
