import React from 'react';
import s from './style.module.scss'; // Assure-toi que les styles sont bien importés

const RectangleGrid = () => {
    // Définir les données des rectangles directement dans le composant
    const rectangles = [
        { url: 'https://helloitspm.github.io/MemoryCard/', text: 'Memory Card', backgroundColor: '#E1CF65' },
        { url: 'https://helloitspm.github.io/Pokedex/', text: 'Pokedex', backgroundColor: '#3DB08D' },
        { url: 'https://www.youtube.com/', text: 'Rectangle 3', backgroundColor: '#FF6F61' },
        { url: 'https://www.youtube.com/', text: 'Rectangle 4', backgroundColor: '#6B5B95' },
        { url: 'https://www.youtube.com/', text: 'Rectangle 5', backgroundColor: '#88B04B' },
        { url: 'https://www.youtube.com/', text: 'Rectangle 6', backgroundColor: '#F7B7A3' },
        { url: 'https://www.youtube.com/', text: 'Rectangle 7', backgroundColor: '#FF9F00' },
        { url: 'https://www.youtube.com/', text: 'Rectangle 8', backgroundColor: '#D4A5A5' },
        { url: 'https://www.youtube.com/', text: 'Rectangle 9', backgroundColor: '#2DA8A5' },
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
                    style={{ backgroundColor: rect.backgroundColor }}
                    onClick={() => handleClick(rect.url)}
                >
                    {rect.text}
                </div>
            ))}
        </div>
    );
};

export default RectangleGrid;
