// TodasNoticias.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './TodasNoticias.css';
import { noticias } from '../../Datas/noticiasData';

const TodasNoticias = () => {
  // Reverso das notícias para garantir que a última inserida seja a primeira a aparecer
  const noticiasReversas = [...noticias].reverse();

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
    </div>
  );
};

export default TodasNoticias;
