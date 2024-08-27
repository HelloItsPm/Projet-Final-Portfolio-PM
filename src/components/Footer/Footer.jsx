import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.scss';
import cadre1 from '../../assets/images/Cadres/cadreFooterBig.png';
import cadre2 from '../../assets/images/Cadres/cadreFooterMedium.png';
import cadre3 from '../../assets/images/Cadres/cadreFooterSmall.png';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <Link to="/legalnotice" className={s.container}>Mentions Légales</Link>
            <div className={s.cadre1}>
                <img src={cadre1} alt="Cadre du Footer" />
            </div>
            <div className={s.cadre2}>
                <img src={cadre2} alt="Cadre du Footer" />
            </div>
            <div className={s.cadre3}>
                <img src={cadre3} alt="Cadre du Footer" />
            </div>
                
        </footer>
    );
};

export default Footer;