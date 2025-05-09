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
import TodosBisposEmeritos from './views/components/Pages/Arquidiocese-Huambo/Bispos-emeritos/TodosBisposEmeritos';
import BispoEmerito from './views/components/Pages/Arquidiocese-Huambo/Bispos-emeritos/BispoEmerito';
import clero from './views/components/Pages/Arquidiocese-Huambo/Clero/clero';
import Presbitero from './views/components/Pages/Arquidiocese-Huambo/Clero/presbitero';
import CuriaArquidiocesana from './views/components/Pages/Arquidiocese-Huambo/Curia-arquidiocesana/curia-arquidiocesana';
import Paroquias from './views/components/Pages/Arquidiocese-Huambo/Paroquias/paroquias';
import MissaoParoquia from './views/components/Pages/Arquidiocese-Huambo/Paroquias/missaoParoquia';
import BoletimArquidiocesano from './views/components/Pages/Arquidiocese-Huambo/Boletim-arquidiocesano/boletim-arquidiocesano';
import Seminarios from './views/components/Pages/Arquidiocese-Huambo/Seminarios/seminarios';
import HuamboSeminario from './views/components/Pages/Arquidiocese-Huambo/Seminarios/huamboSeminario';
import ComunidadesReligiosas from './views/components/Pages/Arquidiocese-Huambo/Comunidades-religiosas/comunidades-religiosas';
import ComunidadeReligiosa from './views/components/Pages/Arquidiocese-Huambo/Comunidades-religiosas/comunidadeHuambo';
import MovimentosApostolado from './views/components/Pages/Arquidiocese-Huambo/Movimentos-apostolado/movimentos-apostolado';
import MovimentoApostolado from './views/components/Pages/Arquidiocese-Huambo/Movimentos-apostolado/movimentoDeApostolado';
import AssociacoesReligiosas from './views/components/Pages/Arquidiocese-Huambo/Associacoes-religiosas/associacoes-religiosas';
import AssociacaoDoHuambo from './views/components/Pages/Arquidiocese-Huambo/Associacoes-religiosas/associacaoHuambo';
import EscolasCatolicas from './views/components/Pages/Arquidiocese-Huambo/Escolas-catolicas/escolas-catolicas';
import EscolaCatolica from './views/components/Pages/Arquidiocese-Huambo/Escolas-catolicas/escolaHuambo';


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
            <Route path="/ComentarioLiturgico" element={<ComentarioLiturgico />} />
            <Route path="/Calendario" element={<Calendario />} />
            <Route path="/Calendario" element={<Calendario />} />
            <Route path="/adicionar-evento" element={<AdicionarEvento />} />
            <Route path="/TodosBisposEmeritos" element={<TodosBisposEmeritos />} />
            <Route path="/bispo-emerito/:id" element={<BispoEmerito />} /> {/* Página de detalhes */}
            <Route path="/clero" element={clero} />
            <Route path="/presbitero/:id" element={<Presbitero />} />
            <Route path="/curia-arquidiocesana" element={<CuriaArquidiocesana />} />
            <Route path="/paroquias" element={<Paroquias />} />
            <Route path="/missaoParoquia/:id" element={<MissaoParoquia />} />
            <Route path="/boletim-arquidiocesano" element={< BoletimArquidiocesano />} />
            <Route path="/seminarios" element={<Seminarios />} />
            <Route path="/huamboSeminario/:id" element={<HuamboSeminario />} />
            <Route path="/comunidades-religiosas" element={<ComunidadesReligiosas />} />
            <Route path="/comunidadeHuambo/:id" element={<ComunidadeReligiosa />} />
            <Route path="/movimentos-apostolado" element={< MovimentosApostolado />} />
            <Route path="/movimentoDeApostolado/:id" element={<MovimentoApostolado />} />
            <Route path="/associacoes-religiosas" element={<AssociacoesReligiosas />} />
            <Route path="/associacaoHuambo/:id" element={<AssociacaoDoHuambo />} />
            <Route path="/escolas-catolicas" element={<EscolasCatolicas />} />
            <Route path="/escolaHuambo/:id" element={<EscolaCatolica />} />
          </Routes>
        </Layout>
      </Router>
    </EventosProvider>
  );
}

export default App;
