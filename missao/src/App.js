import React from 'react'; import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/components/Home';
import TodasNoticias from './views/components/Noticias/TodasNoticias';
function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path='TodasNoticias' element={ <TodasNoticias />} />
      </Routes>
    </Router>
  );
}

export default App;
