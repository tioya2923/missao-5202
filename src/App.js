import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './views/components/Layout/Layout';
import Home from './views/components/Home';
import Noticias from './views/components/Noticias/Noticias';
import TodasNoticias from './views/components/Noticias/TodasNoticias';
import NoticiaCompleta from './views/components/Noticias/NoticiaCompleta';
import TodosEventos from './views/components/Eventos/TodosEventos';
import EventoCompleto from './views/components/Eventos/EventoCompleto';
import BispoDiocese from './views/components/Pages/Arquidiocese-Huambo/Bispo-Diocese/bispo-diocese';
import ComentarioLiturgico from './views/components/Pages/ComentarioL/ComentarioLiturgico';
import Calendario from './views/components/Pages/CalendarioLiturgico/Calendario';
import AdicionarEvento from './views/components/Pages/CalendarioLiturgico/AdicionarEvento';
import { EventosProvider } from './views/components/Pages/CalendarioLiturgico/EventosContext';

function App() {
  return ( 
  <EventosProvider>
    <Router>
      <Layout>       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bispo-diocese" element={<BispoDiocese />} />
          <Route path="/Noticias" element={<Noticias />} />
          <Route path="/noticia/:id" element={<NoticiaCompleta />} />
          <Route path="/TodasNoticias" element={<TodasNoticias />} />
          <Route path="/TodosEventos" element={<TodosEventos />} />
          <Route path="/evento/:id" element={<EventoCompleto />} />
          <Route path='/ComentarioLiturgico' element={<ComentarioLiturgico />} />
          <Route path='/Calendario' element={<Calendario />} />
          <Route path='/Calendario' element={<Calendario />} /> 
          <Route path='/adicionar-evento' element={<AdicionarEvento />} />
        </Routes>
      </Layout>
    </Router>
    </EventosProvider>
  );
}

export default App;
