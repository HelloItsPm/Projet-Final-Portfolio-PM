import React from 'react';
import NavBar from '../NavBar/NavBar'; // Importer NavBar
import s from './style.module.scss';

const Header = () => {
    return (
        <header className={s.header}>
            <NavBar />
        </header>
    );
};

export default Header;