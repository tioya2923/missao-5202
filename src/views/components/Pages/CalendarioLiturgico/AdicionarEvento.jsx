// AdicionarEvento.js
import React, { useState } from 'react';

const AdicionarEvento = ({ adicionarEvento }) => {
  const [novoEvento, setNovoEvento] = useState({ data: '', evento: '', pais: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoEvento({ ...novoEvento, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarEvento(novoEvento);
    setNovoEvento({ data: '', evento: '', pais: '' });
  };

  return (
    <div>
      <h1>Adicionar Novo Evento</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="data"
          value={novoEvento.data}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="evento"
          value={novoEvento.evento}
          onChange={handleInputChange}
          placeholder="Evento"
          required
        />
        <input
          type="text"
          name="pais"
          value={novoEvento.pais}
          onChange={handleInputChange}
          placeholder="País"
          required
        />
        <button type="submit">Adicionar Evento</button>
      </form>
    </div>
  );
};

export default AdicionarEvento;
