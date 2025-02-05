// src/components/bispo-diocese.jsx
import React from 'react';
import './bispo-diocese.css';
import { datasBispos as bispo } from '../../../../Datas/datasBispos';

const BispoDiocese = () => {
  return (
    <div className="bispo-container">
      <h1>{bispo.nomeCompleto}</h1>
      <img src={bispo.foto} alt={`Foto de ${bispo.nomeCompleto}`} />
      <p><strong>Data de Nascimento:</strong> {bispo.dataNascimento}</p>
      <p><strong>Data de Ordenação Sacerdotal:</strong> {bispo.dataOrdenacaoSacerdotal}</p>
      <p><strong>Data de Ordenação Episcopal:</strong> {bispo.dataOrdenacaoEpiscopal}</p>
      <p><strong>Contactos:</strong> {bispo.contactos}</p>
      <h2>Nomeações</h2>
      <ul>
        {bispo.nomeacoes.map((nomeacao, index) => (
          <li key={index}>{nomeacao}</li>
        ))}
      </ul>
      <h2>Nota Biográfica</h2>
      <p>{bispo.notaBiografica}</p>
      <h2>Leitura das Armas Episcopais</h2>
      <p>{bispo.leituraArmas}</p>
      <img src={bispo.fotoArmas} alt={`Armas de ${bispo.nomeCompleto}`} />
    </div>
  );
};

export default BispoDiocese;
