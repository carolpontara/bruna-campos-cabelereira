// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Importar imagens diretamente
import imagem1 from './image/1.png';
import imagem2 from './image/2.png';
import imagem3 from './image/3.png';
import Produtos from './Produtos'; // Importar o novo componente Produtos

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Rota para o componente Produtos */}
          <Route path="/produtos" element={<Produtos />} />

          {/* Rota principal */}
          <Route path="/" element={
            <>
              {/* Imagem 1 */}
              <img
                src={imagem1}
                alt="Imagem 1"
                style={{ width: '100%', marginBottom: '20px' }}
              />

              {/* Imagem 2 */}
              <img
                src={imagem2}
                alt="Imagem 2"
                style={{ width: '100%', marginBottom: '20px' }}
              />

              <a
                href="https://wa.me/+5514997701511?text=Olá%20Bruna!%20Gostaria%20de%20agendar%20um%20horário%20para%20meu%20cabelo.%20Poderia%20me%20informar%20as%20disponibilidades%20e%20valores%20por%20favor?"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
              >
                Agende seu Horário
              </a>
              <br />
              {/* Imagem 3 */}
              <img
                src={imagem3}
                alt="Imagem 3"
                style={{ width: '100%', marginBottom: '20px' }}
              />
              {/* Botão para acessar Produtos */}
              <Link to="/produtos" className="whatsapp-button">
                Conheça Nossos Tratamentos
              </Link>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
