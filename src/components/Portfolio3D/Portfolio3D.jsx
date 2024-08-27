import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './style.module.scss'; // Assure-toi que les styles sont bien importés

const pages = [
    { path: '/qamraynPage', text: 'Qamrayn', backgroundColor: '#E1CF65' },
    { path: '/articlePage', text: 'Page 2', backgroundColor: '#3DB08D' },
    { path: '/articlePage', text: 'Page 3', backgroundColor: '#FF6F61' },
    { path: '/articlePage', text: 'Page 4', backgroundColor: '#6B5B95' },
    { path: '/articlePage', text: 'Page 5', backgroundColor: '#88B04B' },
    { path: '/articlePage', text: 'Page 6', backgroundColor: '#F7B7A3' },
    { path: '/articlePage', text: 'Page 7', backgroundColor: '#FF9F00' },
    { path: '/articlePage', text: 'Page 8', backgroundColor: '#D4A5A5' },
    { path: '/articlePage', text: 'Page 9', backgroundColor: '#8A2BE2' },
    { path: '/articlePage', text: 'Page 10', backgroundColor: '#FF6347' },
];

const SquareGrid = () => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path); // Utilise le hook useNavigate pour rediriger vers la page
    };

    return (
        <div className={s.container}>
            {pages.map((page, index) => (
                <div
                    key={index}
                    className={s.square}
                    style={{ backgroundColor: page.backgroundColor }}
                    onClick={() => handleClick(page.path)}
                >
                    {page.text}
                </div>
            ))}
        </div>
    );
};

export default SquareGrid;