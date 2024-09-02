import React from 'react';
import s from './style.module.scss';
import thumbnailMemory from '../../assets/images/PortfolioWeb/Memory.png';
import thumbnailPokedex from '../../assets/images/PortfolioWeb/Pokedex.png';
import thumbnailPuzzle from '../../assets/images/PortfolioWeb/Puzzle.png';

const RectangleGrid = () => {
    const rectangles = [
        { url: 'https://helloitspm.github.io/MemoryCard/', text: 'Memory Card', backgroundImage: `url(${thumbnailMemory})` },
        { url: 'https://helloitspm.github.io/Pokedex/', text: 'Pokedex', backgroundImage: `url(${thumbnailPokedex})` },
        { url: 'https://helloitspm.github.io/Puzzle/', text: 'Puzzle', backgroundImage: `url(${thumbnailPuzzle})` },
        { url: 'https://www.youtube.com/', text: 'Rectangle 1', backgroundColor: '#6B5B95' },
        { url: 'https://www.youtube.com/', text: 'Rectangle 2', backgroundColor: '#88B04B' },
        { url: 'https://www.youtube.com/', text: 'Rectangle 3', backgroundColor: '#F7B7A3' },
    ];

    const handleClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className={s.container}>
            {rectangles.map((rect, index) => (
                <div
                    key={index}
                    className={s.rectangle}
                    style={{
                        backgroundColor: rect.backgroundColor,
                        backgroundImage: rect.backgroundImage, // Appliquer l'image si présente
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    onClick={() => handleClick(rect.url)}
                >
                    <span>{rect.text}</span> {/* Texte caché par défaut */}
                </div>
            ))}
        </div>
    );
    
};

export default RectangleGrid;
