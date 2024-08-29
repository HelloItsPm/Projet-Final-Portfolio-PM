import React from 'react';
import exemple from '../../../assets/images/Exemple/Exemple.png';
import exempleLog from '../../../assets/images/Exemple/ExempleLogiciel.png';
import s from './style.module.scss';

const ArticlePage = () => {
    return (
        <div className={s.containerMain}>
            <div className={s.containerTitle}>
                <h1  className={s.title}>Nom du projet</h1>
                <div className={s.line}></div>

            </div>
            <div className={s.containerInfos}>
                <div className={s.containerImg}>
                    <img src={exemple} alt="rectangle gris" className={s.containerImgGeneral}/>
                    <img src={exemple} alt="rectangle gris" className={s.containerImgGeneral}/>
                    <img src={exemple} alt="rectangle gris" className={s.containerImgGeneral}/>
                    <img src={exemple} alt="rectangle gris" className={s.containerImgGeneral}/>
                    <img src={exemple} alt="rectangle gris" className={s.containerImgGeneral}/>
                </div>
                <div className={s.containerDescription}>
                    <p className={s.txt}>Description du Projet</p>
                    <p className={s.txt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
                    <div className={s.containerSoftware}>
                        <img src={exempleLog} alt="exemple de logiciel" className={s.containerSoftwareGeneral}/>
                        <img src={exempleLog} alt="exemple de logiciel" className={s.containerSoftwareGeneral}/>
                        <img src={exempleLog} alt="exemple de logiciel" className={s.containerSoftwareGeneral}/>
                        <img src={exempleLog} alt="exemple de logiciel" className={s.containerSoftwareGeneral}/>
                        
                    </div>
                
                </div>
            </div>
        </div>
    );
};

export default ArticlePage;