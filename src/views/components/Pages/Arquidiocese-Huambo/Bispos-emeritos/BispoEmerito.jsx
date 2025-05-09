import React from 'react';
import { useParams } from 'react-router-dom';
import '../Bispo-Diocese/bispo-diocese.css';
import { bisposEmeritos } from '../../../../Datas/bisposEmeritos';

const BispoEmerito = () => {
  const { id } = useParams(); // Obtém o ID do URL
  const bispoEmerito = bisposEmeritos.find((b) => b.id === id); // Encontra o bispo emérito correspondente

  if (!bispoEmerito) {
    return <p>Bispo Emérito não encontrado.</p>; // Mensagem de erro caso o bispo emérito não exista
  }

  return (
    <div className="bispo-container">
      <h1>{bispoEmerito.nomeCompleto}</h1>
      <img src={bispoEmerito.foto} alt={`Foto de ${bispoEmerito.nomeCompleto}`} />
      <p><strong>Data de Nascimento:</strong> {bispoEmerito.dataNascimento}</p>
      <p><strong>Data de Ordenação Sacerdotal:</strong> {bispoEmerito.dataOrdenacaoSacerdotal}</p>
      <p><strong>Data de Ordenação Episcopal:</strong> {bispoEmerito.dataOrdenacaoEpiscopal}</p>
      <p><strong>Contactos:</strong> {bispoEmerito.contactos}</p>
      <p><strong>Email:</strong> {bispoEmerito.email}</p>
      <h2>Nomeações</h2>
      <ul>
        {bispoEmerito.nomeacoes.map((nomeacao, index) => (
          <li key={index}>{nomeacao}</li>
        ))}
      </ul>
      <h2>Nota Biográfica</h2>
      <p>{bispoEmerito.notaBiografica}</p>
      <h2>Leitura das Armas Episcopais</h2>
      <p>{bispoEmerito.leituraArmas}</p>
      <img src={bispoEmerito.fotoArmas} alt={`Armas de ${bispoEmerito.nomeCompleto}`} />
    </div>
  );
};

export default BispoEmerito;
