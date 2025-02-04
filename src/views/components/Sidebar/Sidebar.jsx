import React, { useState, useEffect } from 'react';
import { sidebars } from '../../Datas/sidebarData'; // Importa os dados
import './Sidebar.css';

const Sidebar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sidebars.length);
    }, 10000); // Mudança a cada 10 segundos

    return () => clearInterval(interval);
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sidebars.length) % sidebars.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sidebars.length);
  };

  return (
    <div className="sidebar">
      <button onClick={handlePrevClick}>&lt;</button>
      <div className="content">        
        <div className="image">
          <img src={sidebars[currentIndex].image} alt="Descrição da Imagem" />
          <div className="text-overlay">{sidebars[currentIndex].description}</div>
        </div>
      </div>
      <button onClick={handleNextClick}>&gt;</button>
    </div>
  );
}

export default Sidebar;
