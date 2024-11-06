import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Produtos.css';

import produtosAPronta from './image/6.png';
import coluna1 from './image/venda/image.png';
import coluna2 from './image/venda/2.png';
import coluna3 from './image/venda/3.png';



function Produtos() {
    const navigate = useNavigate();

    return (
        <div className="produtos-container">
            <div className="back-icon" onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faArrowLeft} size="2x" />
                <br></br>

            </div>
            <br></br>
            <br></br>
            <img src={produtosAPronta} alt="Imagem Produtos à Pronta" className="imagem-principal" />
            <img src={coluna1} alt="Imagem Coluna 1" className="imagem-principal" />
            <br />
            <img src={coluna2} alt="Imagem Coluna 2" className="imagem-principal" />
            <br />
            <img src={coluna3} alt="Imagem Coluna 3" className="imagem-principal" />

            <a
                href="https://wa.me/+5514997701511?text=Olá%20Bruna!%20Quero%20adquirir%20meu%20produto%20à%20pronta%20entrega."
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
            >
                Quero adquirir meu produto à pronta entrega
            </a>

        </div>
    );
}

export default Produtos;
