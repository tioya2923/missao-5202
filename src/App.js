import React from 'react'; import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/components/Home';
import TodasNoticias from './views/components/Noticias/TodasNoticias';
import BispoDiocese from './views/components/Pages/Arquidiocese-Huambo/Bispo-Diocese/bispo-diocese';
function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path='bispo-diocese' element={<BispoDiocese />} />
       <Route path='TodasNoticias' element={ <TodasNoticias />} />
      </Routes>
    </Router>
  );
}

export default App;
