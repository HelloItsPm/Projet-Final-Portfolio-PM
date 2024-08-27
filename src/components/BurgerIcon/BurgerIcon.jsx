import React from 'react';
import s from './style.module.scss';

const BurgerIcon = ({ isActive, toggleMenu }) => {
    return (
        <div className={`${s.burgerIcon} ${isActive ? s.active : ''}`} onClick={toggleMenu}>
            <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect className={`${s.bar} ${s.bar1}`} width="30" height="3" rx="1.5" fill="#fff" />
                <rect className={`${s.bar} ${s.bar2}`} y="10" width="30" height="3" rx="1.5" fill="#fff" />
                <rect className={`${s.bar} ${s.bar3}`} y="20" width="30" height="3" rx="1.5" fill="#fff" />
            </svg>
        </div>
    );
};

export default BurgerIcon;