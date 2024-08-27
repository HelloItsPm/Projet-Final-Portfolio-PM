import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './style.module.scss';

const NavBar = ({ onSelectComponent }) => {
    const navigate = useNavigate();

    const handleNavigation = (component) => {
        onSelectComponent(component); // Met à jour le composant sélectionné
        navigate('/'); // Redirige vers la page d'accueil
    };

    return (
        <div className={s.container}>
            <div className={s.itemNavBar} onClick={() => handleNavigation('Portfolio')}>
                Portfolio
            </div>
            <div className={s.itemNavBar} onClick={() => handleNavigation('Resume')}>
                CV
            </div>
            <div className={s.itemNavBar} onClick={() => handleNavigation('AboutMe')}>
                À propos
            </div>
        </div>
    );
};

export default NavBar;
