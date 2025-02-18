import React, { useState } from 'react';
import { useEventos } from './EventosContext';


const AdicionarEvento = () => {
  const [novoEvento, setNovoEvento] = useState({
    data: '',
    actividade: '',
    local: '',
    presidente: '',
    hora: ''
  });

  const { adicionarEvento } = useEventos();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoEvento({ ...novoEvento, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarEvento(novoEvento);
    setNovoEvento({ data: '', actividade: '', local: '', presidente: '', hora: '' });
  };

  return (
    <div>
      <h1>Actividades Episcopais e Calendário Litúrgico</h1>
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
          name="actividade"
          value={novoEvento.actividade}
          onChange={handleInputChange}
          placeholder="Actividade"
          required
        />
        <input
          type="text"
          name="local"
          value={novoEvento.local}
          onChange={handleInputChange}
          placeholder="Local"
          required
        />
        <input
          type="text"
          name="presidente"
          value={novoEvento.presidente}
          onChange={handleInputChange}
          placeholder="Presidente"
          required
        />
        <input
          type="time"
          name="hora"
          value={novoEvento.hora}
          onChange={handleInputChange}
          placeholder="Hora"
          required
        />
        <button type="submit">Adicionar Evento</button>
      </form>
    </div>
  );
};

export default AdicionarEvento;
