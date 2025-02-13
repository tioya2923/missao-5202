import React from 'react';
import { useParams } from 'react-router-dom';
import { lastEvent as eventos } from '../../Datas/eventos';
import './EventoCompleto.css';  // Importa o arquivo CSS

function EventoCompleto() {
  const { id } = useParams();
  const evento = eventos.find(evento => evento.id === id);

  if (!evento) {
    return <h2>Evento não encontrado</h2>;
  }

  return (
    <div className="evento-completo">
      <h2>{evento.theme}</h2>
      <img src={evento.image} alt={evento.theme} className="evento-imagem" />
      <div className="evento-detalhes">
        <p><strong>Data:</strong> {evento.date}</p>
        <p><strong>Hora:</strong> {evento.time}</p>
        <p><strong>Localização:</strong> {evento.location}</p>
        <p>{evento.description}</p>
      </div>
    </div>
  );
}

export default EventoCompleto;
