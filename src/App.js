import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import perfil from './image/perfil.png';

import Produtos from './Produtos'; // Componente Produtos
import Quem from './Quem';
import Cabelo from './Cabelo';
import Linhas from './Linhas';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/quem" element={<Quem />} />
          <Route path="/cabelos" element={<Cabelo />} />
          <Route path="/linhas-tratamento" element={<Linhas />} />





          {/* Rota principal */}
          <Route
            path="/"
            element={
              <div className="home-page">
                <br></br>
                <div className="profile-container">
                  <img src={perfil} alt="Perfil" className="profile-picture" />
                  <p className="profile-name">@brunadasprogressivas</p>
                </div>
                 {/* Botões de navegação */}
                 <Link to="/quem">
                  <button className="image-button">Quem sou eu?</button>
                </Link>
                <Link to="/cabelos">
                  <button className="image-button">Faça seu Cabelo</button>
                </Link>
                <Link to="/linhas-tratamento">
                <button className="image-button">Linhas de Tratamento</button>
                </Link>
                <Link to="/produtos">
                <button className="image-button">Produtos A Pronta Entrega</button>
                </Link>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
