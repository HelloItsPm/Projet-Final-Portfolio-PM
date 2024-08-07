import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.scss';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <Link to="/legalnotice">Legal Notice</Link>
        </footer>
    );
};

export default Footer;