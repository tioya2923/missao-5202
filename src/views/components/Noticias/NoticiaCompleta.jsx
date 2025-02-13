import React from 'react';
import { useParams } from 'react-router-dom';
import { noticias } from '../../Datas/noticiasData';
import './NoticiaCompleta.css';  // Importa o arquivo CSS

function NoticiaCompleta() {
  const { id } = useParams();
  const noticia = noticias.find(noticia => noticia.id === id);

  if (!noticia) {
    return <h2>Notícia não encontrada</h2>;
  }

  return (
    <div className="noticia-completa">
      <h2>{noticia.titulo}</h2>
      <h4>{noticia.subtitulo}</h4>
      <img src={noticia.imagem} alt="Imagem da noticia" className="noticia-imagem" />
      <p>{noticia.textoCompleto}</p>
      <span>{noticia.data}</span>
    </div>
  );
}

export default NoticiaCompleta;
