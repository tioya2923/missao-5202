// Noticias.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Noticias.css';
import { noticias } from '../../Datas/noticiasData';

const Noticias = () => {
  const noticiasReversas = [...noticias].reverse().slice(0, 3);

  return (
    <div className="noticias-section">
      <h2>Notícias</h2>
      <div className="noticias-container">
        {noticiasReversas.map((noticia) => (
          <div key={noticia.id} className="noticia-item">
            <Link to={`/noticia/${noticia.id}`}>
              <img src={noticia.imagem} alt="Imagem da noticia" className="noticia-imagem" />
              <div className="noticia-texto">
                <h3>{noticia.titulo}</h3>
                <h4>{noticia.subtitulo}</h4>
                <p>{noticia.textoBreve}</p>
                <span>{noticia.data}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div>
        <Link to="/TodasNoticias" className="mais-noticias-link">Mais Notícias</Link>
      </div>
    </div>
  );
};

export default Noticias;
