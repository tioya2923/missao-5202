import React, { createContext, useContext, useState, useEffect } from 'react';

const EventosContext = createContext();

export const useEventos = () => {
  return useContext(EventosContext);
};

export const EventosProvider = ({ children }) => {
  const [eventos, setEventos] = useState(() => {
    const eventosSalvos = localStorage.getItem('eventos');
    return eventosSalvos ? JSON.parse(eventosSalvos) : [];
  });

  useEffect(() => {
    localStorage.setItem('eventos', JSON.stringify(eventos));
  }, [eventos]);

  const adicionarEvento = (novoEvento) => {
    setEventos([...eventos, novoEvento]);
  };

  return (
    <EventosContext.Provider value={{ eventos, adicionarEvento }}>
      {children}
    </EventosContext.Provider>
  );
};
