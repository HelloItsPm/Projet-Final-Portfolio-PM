import React from 'react';
import s from './style.module.scss';

const HomeMessage = () => {
    return (
        <div className={s.container}>
            <p className={s.title}>Hey !</p>
            <div className={s.subContainer}>
                <div className={s.line}></div>
                <p className={s.txt}>
                    Je m'appel Pierre-Marie ou Penem, je suis un développeur Front-end 
                    junior et artiste 3D basé dans la région rennaise, en Bretagne, France.
                    Pour le moment, je développe mes site web en HTML, CSS, React,
                    JavaScript ou encore WordPress PHP mais je reste ouvert aux autres
                    possibilités.<br />
                    <br />
                    Je suis passionné par l'animation, le dessin et la 3D, c'est pourquoi je
                    me forme sur Three.js et Rive.
                    Pour plus d'information, n'hésitez pas à aller sur ma page portfolio ou 
                    encore À propos !
                </p>
            </div>
        </div>
    );
};

export default HomeMessage;