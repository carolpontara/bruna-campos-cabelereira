import React from 'react';
import './Quem.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Produtos.css';
// Importar as imagens
import imagem1 from './image/intro1.png';
import imagem2 from './image/intro2.png';

function Quem() {
    const navigate = useNavigate();

    return (
        <div className="quem-container">
            <br></br>

            <div className="back-icon" onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faArrowLeft} size="2x" />
            </div>
            <br></br>
            <img
                src={imagem1}
                alt="Imagem 1"
                className="quem-image"
            />

            {/* Imagem 2 */}
            <img
                src={imagem2}
                alt="Imagem 2"
                className="quem-image"
            />

            <a
                href="https://wa.me/+5514997701511?text=Olá%20Bruna!%20Gostaria%20de%20agendar%20um%20horário%20para%20meu%20cabelo.%20Poderia%20me%20informar%20as%20disponibilidades%20e%20valores%20por%20favor?"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
            >
                Agende seu Horário
            </a>

        </div>
    );
}

export default Quem;
