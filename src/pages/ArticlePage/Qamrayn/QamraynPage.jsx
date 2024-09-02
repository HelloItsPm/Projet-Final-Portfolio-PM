import React from 'react';
import qamrayn1 from '../../../assets/images/Portfolio3D/Qamraynthumbnail.png';
import qamrayn2 from '../../../assets/images/Portfolio3D/Qamrayn1.png';
import qamrayn3 from '../../../assets/images/Portfolio3D/Qamrayn2.png';
import qamrayn4 from '../../../assets/images/Portfolio3D/Qamrayn3.png';
import qamrayn5 from '../../../assets/images/Portfolio3D/Qamrayn4.png';
import qamrayn6 from '../../../assets/images/Portfolio3D/Qamrayn5.jpg';
import DsMax from '../../../assets/images/Softwares/3DsMax.png';
import Zbrush from '../../../assets/images/Softwares/Zbrush.png';
import Maya from '../../../assets/images/Softwares/Maya.png';
import Vray from '../../../assets/images/Softwares/Vray.png';
import Photoshop from '../../../assets/images/Softwares/Photoshop.png';
import Designer from '../../../assets/images/Softwares/Substance Designer.png';
import Painter from '../../../assets/images/Softwares/Substance Painter.png';
import AfterEffect from '../../../assets/images/Softwares/AfterEffect.png';
import s from './style.module.scss';

const QamraynPage = () => {
    return (
        <div className={s.containerMain}>
            <div className={s.containerTitle}>
                <h1  className={s.title}>Qamrayn</h1>
                <div className={s.line}></div>

            </div>
            <div className={s.containerInfos}>
                <div className={s.containerImg}>
                    <img src={qamrayn1} alt="Titre du film" className={s.containerImgGeneral}/>
                    <img src={qamrayn2} alt="Extrait du film" className={s.containerImgGeneral}/>
                    <img src={qamrayn3} alt="Extrait du film" className={s.containerImgGeneral}/>
                    <img src={qamrayn4} alt="Extrait du film" className={s.containerImgGeneral}/>
                    <img src={qamrayn5} alt="Extrait du film" className={s.containerImgGeneral}/>
                    <img src={qamrayn6} alt="Image de Rana" className={s.containerImgGeneral}/>
                    <div className={s.space}>
                        <div className={s.space}></div>
                        <a href="https://www.youtube.com/watch?v=w7LT-tsGulw" target="_blank" className={s.lien}>
                            Vidéo YouTube
                        </a>
                        <div className={s.space}></div>
                    </div>
                    
                </div>
                <div className={s.containerDescription}>
                    <p className={s.txt}>Film de fin d'année détude</p>
                    <p className={s.txt}>Ce film, qui puise son inspiration dans la culture maghrébine et le mythe de Narcisse, nous plonge dans l'univers fascinant d'Asma, une jeune femme qui explore un monde parallèle à travers le miroir.</p>
                    <div className={s.containerSoftware}>
                        <img src={DsMax} alt="Logiciel 3DsMax" className={s.containerSoftwareGeneral}/>
                        <img src={Maya} alt="Logiciel Maya" className={s.containerSoftwareGeneral}/>
                        <img src={Zbrush} alt="Logiciel Zbrush" className={s.containerSoftwareGeneral}/>
                        <img src={Photoshop} alt="Logiciel Photoshop" className={s.containerSoftwareGeneral}/>
                        <img src={Vray} alt="Logiciel Vray" className={s.containerSoftwareGeneral}/>
                        <img src={Designer} alt="Logiciel Designer" className={s.containerSoftwareGeneral}/>
                        <img src={Painter} alt="Logiciel Painter" className={s.containerSoftwareGeneral}/>
                        <img src={AfterEffect} alt="Logiciel AfterEffect" className={s.containerSoftwareGeneral}/>

                    </div>
                
                </div>
            </div>
        </div>
    );
};

export default QamraynPage;
