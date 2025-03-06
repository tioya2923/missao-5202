import React from 'react';
import { Link } from 'react-router-dom';
import './TodosBisposEmeritos.css';
import { bisposEmeritos } from '../../../../Datas/bisposEmeritos';

const TodosBisposEmeritos = () => {
  const bisposReversos = [...bisposEmeritos].reverse();

  return (
    <div className="bispos-section">
      <h2>Bispos Eméritos</h2>
      <div className="bispos-container">
        {bisposReversos.map((bispo) => (
          <div key={bispo.id} className="bispo-item">
            <Link to={`/bispo-emerito/${bispo.id}`}>
              <img src={bispo.foto} alt={`Foto de ${bispo.nomeCompleto}`} className="bispo-imagem" />
              <div className="bispo-texto">
                <h3>{bispo.nomeCompleto}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodosBisposEmeritos;
