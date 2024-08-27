import React from 'react';
import Tete from '../../assets/images/Tete.png';
import Corps from '../../assets/images/Corps.png';
import s from './style.module.scss';

const Resume = () => {
    return (
        <div className={s.container}>
            <img src={Tete} alt="Tete du CV" />
            <img src={Corps} alt="Corps du CV" />
        </div>
    );
};

export default Resume;