import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import introImage from './image/intro3.png'; // Ajuste o caminho conforme necessário

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
                <Link to="/quem" className="custom-button">
                  Quem sou eu?!
                  <br></br>
                  <span className="button-subtext">CLIQUE AQUI</span>
                </Link>
                <a
                  href="https://wa.me/+5514997701511?text=Olá%20Bruna!%20Gostaria%20de%20agendar%20um%20horário%20para%20meu%20cabelo.%20Poderia%20me%20informar%20as%20disponibilidades%20e%20valores%20por%20favor?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-button-foto"
                >
                  <img className="button-text" src={introImage} alt="Faça seu Cabelo" />
                  <span className="button-subtext">AGENDE AQUI</span>
                </a>


                <Link to="/linhas-tratamento" className="custom-button">
                  Linhas de Tratamento
                  <span className="button-subtext">CLIQUE AQUI</span>
                </Link>
                <Link to="/produtos" className="custom-button">
                  Produtos A Pronta Entrega
                  <br></br>
                  <span className="button-subtext">CLIQUE AQUI</span>
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
