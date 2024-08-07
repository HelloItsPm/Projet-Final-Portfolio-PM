import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.scss';

const NavBar = () => {
    return (
        <div className={s.container}>
            <div className={s.itemNavBar}>
                <Link to='/resume'>Curriculum Vitae</Link>
            </div>
            <div className={s.itemNavBar}>
            <Link to='/portfolio'>Portfolio</Link>
            </div>
            <div className={s.itemNavBar}>
            <Link to='/aboutme'>À propos</Link>
            </div>
        </div>
    );
};

export default NavBar