import React from 'react';
import { Link } from 'react-router-dom';
import './TodosEventos.css';
import { lastEvent as eventos } from '../../Datas/eventos';

const TodosEventos = () => {
  // Reverso dos eventos para garantir que o último inserido seja o primeiro a aparecer
  const eventosReversos = [...eventos].reverse();

  return (
    <div className="eventos-section">
      <h2>Todos os Eventos</h2>
      <div className="eventos-container">
        {eventosReversos.map((evento) => (
          <div key={evento.id} className="evento-item">
            <Link to={`/evento/${evento.id}`}>
              <img src={evento.image} alt={evento.theme} className="evento-imagem" />
              <div className="evento-texto">
                <h3>{evento.theme}</h3>
                <p>{evento.date} - {evento.time}</p>
                <p>{evento.location}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodosEventos;
