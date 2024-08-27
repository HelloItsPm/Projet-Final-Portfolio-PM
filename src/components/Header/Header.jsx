import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import BurgerMenu from '../MenuBurger/MenuBurger';
import s from './style.module.scss';
import cadre1 from '../../assets/images/Cadres/cadreHeaderBig.png';
import cadre2 from '../../assets/images/Cadres/cadreHeaderMedium.png';
import cadre3 from '../../assets/images/Cadres/cadreHeaderSmall.png';

const Header = ({ onSelectComponent }) => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        onSelectComponent('HomeMessage'); // Met à jour le composant sélectionné
        navigate('/'); // Navigue vers la page d'accueil
    };

    return (
        <header className={s.header}>
            <div className={s.container1}>
                <div className={s.cadre1}>
                    <img src={cadre1} alt="Cadre du Header" />
                </div>
                <div className={s.cadre2}>
                    <img src={cadre2} alt="Cadre du Header" />
                </div>
                <div className={s.cadre3}>
                    <img src={cadre3} alt="Cadre du Header" />
                </div>
            </div>
            <div className={s.logo} onClick={handleLogoClick}>
                <svg width="42" height="55" viewBox="0 0 42 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 28L21 3L25.8 9L31 15.5M1 28V3L15.88 21.6M1 28L21 53L36 34.25H26M1 28V40.5M31 15.5L41 3V53M31 15.5L21 28L15.88 21.6M1 53V40.5M1 40.5L15.88 21.6" stroke="#3DB08D" strokeWidth="2"/>
                </svg>
            </div>
            <div className={s.container2}>
                <div className={s.navBar}>
                    <NavBar onSelectComponent={onSelectComponent}/>
                </div>
                <div className={s.menuBurger}>
                    <BurgerMenu onSelectComponent={onSelectComponent}/> {/* Ajouter le menu burger */}
                </div>
                
            </div>
        </header>
    );
};

export default Header;