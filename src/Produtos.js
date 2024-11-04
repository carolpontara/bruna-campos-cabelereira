// src/Produtos.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importar FontAwesomeIcon
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Importar ícone de seta para a esquerda
import './Produtos.css'; // Importar o CSS para este componente

import imagemPrincipal from './image/4.png'; // Imagem principal
import imagemAgenda from './image/5.png'; // Outra imagem principal
import produtosAPronta from './image/6.png'
import coluna1 from './image/venda/image.png'
import coluna2 from './image/venda/2.png'
import coluna3 from './image/venda/3.png'

import imagem1 from './image/carrousel/8.png'; // Imagem do carrossel
import imagem2 from './image/carrousel/7.png'; // Imagem do carrossel
import imagem3 from './image/carrousel/6.png'; // Imagem do carrossel
import imagem4 from './image/carrousel/2.png'; // Imagem do carrossel
import imagem5 from './image/carrousel/3.png'; // Imagem do carrossel
import imagem7 from './image/carrousel/4.png'; // Imagem do carrossel
import image8 from './image/crono/1.png'; // Imagem do segundo carrossel
import image9 from './image/crono/2.png'; // Imagem do segundo carrossel
import image10 from './image/crono/3.png'; // Imagem do segundo carrossel
import image11 from './image/crono/4.png'

const imagensCarrossel = [
    imagem7,
    imagem2,
    imagem3,
    imagem1,
    imagem4,
    imagem5,
];

const imagensCrono = [
    image8,
    image9,
    image10,
    image11
];

function Produtos() {
    const navigate = useNavigate(); // Inicializar o useNavigate
    const [currentIndexCarrossel1, setCurrentIndexCarrossel1] = useState(0);
    const [currentIndexCarrossel2, setCurrentIndexCarrossel2] = useState(0);

    // Efeito para o primeiro carrossel
    useEffect(() => {
        const interval1 = setInterval(() => {
            setCurrentIndexCarrossel1((prevIndex) => (prevIndex + 1) % imagensCarrossel.length);
        }, 3000); // Troca de imagem a cada 3 segundos para o primeiro carrossel

        return () => clearInterval(interval1); // Limpar o intervalo ao desmontar o componente
    }, []);

    // Efeito para o segundo carrossel
    useEffect(() => {
        const interval2 = setInterval(() => {
            setCurrentIndexCarrossel2((prevIndex) => (prevIndex + 1) % imagensCrono.length);
        }, 3000); // Troca de imagem a cada 3 segundos para o segundo carrossel

        return () => clearInterval(interval2); // Limpar o intervalo ao desmontar o componente
    }, []);

    return (
        <div className="produtos-container">
            {/* Ícone de Voltar ao lado da imagem principal */}
            <div className="back-icon" onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faArrowLeft} size="2x" />
            </div>

            {/* Imagem Principal */}
            <img
                src={imagemPrincipal}
                alt="Imagem Principal"
                className="imagem-principal"
            />

            {/* Primeiro Carrossel de Imagens */}
            <div className="carousel">
                <img
                    src={imagensCarrossel[currentIndexCarrossel1]}
                    alt={`Carrossel 1 - Imagem ${currentIndexCarrossel1 + 1}`}
                    className="carousel-image"
                />
            </div>

            <br />
            <br></br>
            {/* Segunda Imagem Principal */}
            <img
                src={imagemAgenda}
                alt="Imagem Agenda"
                className="imagem-principal"
            />

            {/* Segundo Carrossel de Imagens */}
            <div className="carousel">
                <img
                    src={imagensCrono[currentIndexCarrossel2]}
                    alt={`Carrossel 2 - Imagem ${currentIndexCarrossel2 + 1}`}
                    className="carousel-image"
                />
            </div>
            <img
                src={produtosAPronta}
                alt="Imagem Agenda"
                className="imagem-principal"
            />
            <img
                src={coluna1}
                alt="Imagem Agenda"
                className="imagem-principal"
            />
            <br></br>
            <img
                src={coluna2}
                alt="Imagem Agenda"
                className="imagem-principal"
            />
            <br></br>
            <img
                src={coluna3}
                alt="Imagem Agenda"
                className="imagem-principal"
            />
            <a
                href="https://wa.me/+5514997701511?text=Olá%20Bruna!%20Gostaria%20de%20agendar%20um%20horário%20para%20meu%20cabelo.%20Poderia%20me%20informar%20as%20disponibilidades%20e%20valores%20por%20favor?"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
            >
                Adquira seu Tratamento
            </a>
        </div>
    );
}

export default Produtos;
