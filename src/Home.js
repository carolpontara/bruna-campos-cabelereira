import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Home.css';

// Importar imagens diretamente
import imagem1 from './image/1.png';
import imagem2 from './image/2.png';
import imagem3 from './image/3.png';
import Produtos from './Produtos'; // Importar o novo componente Produtos

function Home() {
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

             
              <br />
              {/* Imagem 3 */}
              <img
                src={imagem3}
                alt="Imagem 3"
                style={{ width: '100%', marginBottom: '20px' }}
              />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default Home;
