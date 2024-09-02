import React from 'react';
import { useNavigate } from 'react-router-dom';
import qamraynthumbnail from '../../assets/images/Portfolio3D/Qamraynthumbnail.png';
import Chessthumnail from '../../assets/images/Portfolio3D/Chessthumnail.png';
import Odettethumbnail from '../../assets/images/Portfolio3D/Odettethumbnail.png';
import Fall_Guysthumbnail from '../../assets/images/Portfolio3D/Fall_Guysthumbnail.png';
import Partiel2022thumbnail from '../../assets/images/Portfolio3D/Partiel2022thumbnail.png';

import s from './style.module.scss';

const pages = [
    { path: '/qamraynPage', text: 'Qamrayn', backgroundImage: `url(${qamraynthumbnail})` },
    { path: '/chessPage', text: 'Chess', backgroundImage: `url(${Chessthumnail})` },
    { path: '/odettePage', text: 'Odette', backgroundImage: `url(${Odettethumbnail})` },
    { path: '/fallGuysPage', text: 'FallGuys', backgroundImage: `url(${Fall_Guysthumbnail})` },
    { path: '/partielPage', text: 'Partiel', backgroundImage: `url(${Partiel2022thumbnail})` },
    { path: '/articlePage', text: 'Page Exemple', backgroundColor: '#F7B7A3' },
];

const SquareGrid = () => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    };

    return (
        <div className={s.container}>
            {pages.map((page, index) => (
                <div
                    key={index}
                    className={s.square}
                    style={{
                        backgroundColor: page.backgroundColor,
                        backgroundImage: page.backgroundImage ? page.backgroundImage : 'none',
                        backgroundSize: 'cover', // Assurez-vous que l'image couvre tout le carré
                        backgroundPosition: 'center', // Centrez l'image
                    }}
                    onClick={() => handleClick(page.path)}
                >
                    <div className={s.text}>{page.text}</div>
                </div>
            ))}
        </div>
    );
};

export default SquareGrid;

