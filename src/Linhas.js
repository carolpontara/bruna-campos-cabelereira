import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Produtos.css';

import imagemPrincipal from './image/4.png';
import imagemAgenda from './image/5.png';

import imagem1 from './image/carrousel/8.png';
import imagem2 from './image/carrousel/7.png';
import imagem3 from './image/carrousel/6.png';
import imagem4 from './image/carrousel/2.png';
import imagem5 from './image/carrousel/3.png';
import imagem7 from './image/carrousel/4.png';
import image8 from './image/crono/1.png';
import image9 from './image/crono/2.png';
import image10 from './image/crono/3.png';

const imagensCarrossel = [imagem7, imagem2, imagem3, imagem1, imagem4, imagem5];
const imagensCrono = [image8, image9, image10];

function Linhas() {
    const navigate = useNavigate();
    const [currentIndexCarrossel1, setCurrentIndexCarrossel1] = useState(0);
    const [currentIndexCarrossel2, setCurrentIndexCarrossel2] = useState(0);

    const handleNext = (setCurrentIndex, imagesLength) => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesLength);
    };

    const handlePrev = (setCurrentIndex, imagesLength) => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imagesLength) % imagesLength);
    };

    return (
        <div className="produtos-container">
            <div className="back-icon" onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faArrowLeft} size="2x" />
            </div>
            <br></br>
            <br></br>
            <img src={imagemPrincipal} alt="Imagem Principal" className="imagem-principal" />

            {/* Primeiro Carrossel */}
            <div className="carousel">
                <span className="carousel-button left" onClick={() => handlePrev(setCurrentIndexCarrossel1, imagensCarrossel.length)}>
                    &lt;
                </span>
                <img
                    src={imagensCarrossel[currentIndexCarrossel1]}
                    alt={`Carrossel 1 - Imagem ${currentIndexCarrossel1 + 1}`}
                    className="carousel-image"
                />
                <span className="carousel-button right" onClick={() => handleNext(setCurrentIndexCarrossel1, imagensCarrossel.length)}>
                    &gt;
                </span>
            </div>
            <a
                href="https://wa.me/+5514997701511?text=Olá%20Bruna!%20Gostaria%20de%20agendar%20um%20horário%20para%20meu%20cabelo.%20Poderia%20me%20informar%20as%20disponibilidades%20e%20valores%20por%20favor?"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
            >
                Faça seu Tratamento
            </a>
            <br />
            <br />

            <img src={imagemAgenda} alt="Imagem Agenda" className="imagem-principal" />

            {/* Segundo Carrossel */}
            <div className="carousel">
                <span className="carousel-button left" onClick={() => handlePrev(setCurrentIndexCarrossel2, imagensCrono.length)}>
                    &lt;
                </span>
                <img
                    src={imagensCrono[currentIndexCarrossel2]}
                    alt={`Carrossel 2 - Imagem ${currentIndexCarrossel2 + 1}`}
                    className="carousel-image"
                />
                <span className="carousel-button right" onClick={() => handleNext(setCurrentIndexCarrossel2, imagensCrono.length)}>
                    &gt;
                </span>
            </div>

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

export default Linhas;
