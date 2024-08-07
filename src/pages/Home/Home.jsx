import React from 'react';
import HomeMessage from '../../components/HomeMessage/HomeMessage'
import s from './style.module.scss';

const Home  = () => {
    return(
        <div className={s.container}>
            <HomeMessage />
        </div>
    );
};

export default Home;