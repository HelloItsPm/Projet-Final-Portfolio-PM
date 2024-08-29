import React from 'react';
import s from './style.module.scss';
import html from '../../assets/images/Softwares/HTML.png';
import css from '../../assets/images/Softwares/CSS.png';
import js from '../../assets/images/Softwares/JavaScript.png';
import wordpress from '../../assets/images/Softwares/WordPress.png';
import figma from '../../assets/images/Softwares/Figma.png';
import sass from '../../assets/images/Softwares/Sass.png';
import react from '../../assets/images/Softwares/React.png';
import github from '../../assets/images/Softwares/Github.png';
import dsmax from '../../assets/images/Softwares/3DsMax.png';
import maya from '../../assets/images/Softwares/Maya.png';
import blender from '../../assets/images/Softwares/Blender.png';
import zbrush from '../../assets/images/Softwares/Zbrush.png';
import dcoat from '../../assets/images/Softwares/3DCoat.png';
import vray from '../../assets/images/Softwares/Vray.png';
import photoshop from '../../assets/images/Softwares/Photoshop.png';
import aftereffect from '../../assets/images/Softwares/AfterEffect.png';
import designer from '../../assets/images/Softwares/Substance Designer.png';
import painter from '../../assets/images/Softwares/Substance Painter.png';
import excel from '../../assets/images/Softwares/Excel.png';
import word from '../../assets/images/Softwares/Word.png';
import googledocs from '../../assets/images/Softwares/Google Docs.png';
import googlesheets from '../../assets/images/Softwares/Google Sheets.png';
import googleslides from '../../assets/images/Softwares/Google Slides.png';
import vscode from '../../assets/images/Softwares/VSCode.png';
import powerpoint from '../../assets/images/Softwares/PowerPoint.png';
import photo from '../../assets/images/Profil.png';

const AboutMe = () => {
    return (
        <div className={s.container}>
            <div className={s.subContainerFirst}>
                <div>
                    <img src={photo} alt="photo de profil" className={s.subContainerImg}/>
                </div>
                <div className={s.subContainerInfos}>
                    <div className={s.subContainerInfosPlus}>
                        <p className={s.title}>Penem</p>
                        <p className={s.nameTitle}>GICQUEL Pierre-Marie</p>
                    </div>
                    <div className={s.subContainerInfosPlus}>
                        <p className={s.txt}>Développeur Créatif</p>
                        <p className={s.txt}>Artiste 3D</p>
                    </div>
                </div>
            </div>
            <div className={s.subContainerSecond}>
                <div className={s.subContainerGlobal}>
                    <p className={s.txtTitle}>Salut !</p>
                    <p className={s.txt}>
                    Je m'appelle Pierre-Marie, curieux et créatif de nature je me suis lancé dans une formation en développement Web suite à un RNCP niv 6 en Réalisation et Animation 3D. <br />
                    <br />
                    Imaginer, créer, construire seul ou en équipe est un vrai plaisir pour moi ! J'aime voir naître des projets et participer à leur évolution. <br />
                    Je combine mes autres compétences tel que le dessin, la 3D et l'animation pour les relier au design et l'intégration de site Web. <br />
                    <br />
                    En recherche d'expérience au sein d'une entreprise pour développer et parfaire mes compétences ainsi que de nouveaux challenges pour plus de savoir-faire. <br />
                    <br />
                    Pour le moment plus orienté sur du HTML, CSS, Sass CSS, JavaScript, React, WordPress PHP avec du Rive et Three.js en cours d'apprentissage. Cependant je reste ouvert aux nouvelles découvertes si besoin. <br />
                    <br />
                    Toujours là? Et bien autant présenter mon arsenal de logiciel actuel :
                    </p>
                </div>
                <div className={s.subContainerGlobal}>
                    <p className={s.txtTitle}>Logiciel Web :</p>
                    <div className={s.subContainerSoftware}>
                        <div className={s.softwareContainer}>
                            <img src={html} alt="logo HTML" className={s.logo}/>
                            <p className={s.softwareName}>HTML</p>
                            <p className={s.softwareLevel}>Assez bonne pratique</p>
                        </div>
                        <div className={s.softwareContainer}>
                            <img src={css} alt="logo CSS" className={s.logo}/>
                            <p className={s.softwareName}>CSS</p>
                            <p className={s.softwareLevel}>Assez bonne pratique</p>
                        </div>
                        <div className={s.softwareContainer}>
                            <img src={js} alt="logo JavaScript" className={s.logo}/>
                            <p className={s.softwareName}>JavaScript</p>
                            <p className={s.softwareLevel}>Pratique moyenne</p>
                        </div>
                        <div className={s.softwareContainer}>
                            <img src={wordpress} alt="logo WordPress" className={s.logo}/>
                            <p className={s.softwareName}>WordPress</p>
                            <p className={s.softwareLevel}>Pratique moyenne</p>
                        </div>
                        <div className={s.softwareContainer}>
                            <img src={figma} alt="logo Figma" className={s.logo} />
                            <p className={s.softwareName}>Figma</p>
                            <p className={s.softwareLevel}>Bonne pratique</p>
                        </div>
                        <div className={s.softwareContainer}>
                            <img src={vscode} alt="logo VSCode" className={s.logo} />
                            <p className={s.softwareName}>Virtual Studio Code</p>
                            <p className={s.softwareLevel}>Bonne pratique</p>
                        </div>
                        <div className={s.softwareContainer}>
                            <img src={sass} alt="logo Sass" className={s.logo} />
                            <p className={s.softwareName}>Sass</p>
                            <p className={s.softwareLevel}>Assez bonne pratique</p>
                        </div>
                        <div className={s.softwareContainer}>
                            <img src={react} alt="logo React" className={s.logo} />
                            <p className={s.softwareName}>React</p>
                            <p className={s.softwareLevel}>Assez bonne pratique</p>
                        </div>
                        <div className={s.softwareContainer}>
                            <img src={github} alt="logo Github" className={s.logo} />
                            <p className={s.softwareName}>Github</p>
                            <p className={s.softwareLevel}>Assez bonne pratique</p>
                        </div>
                    </div>
                </div>
                <div className={s.subContainerGlobal}>
                    <p className={s.txtTitle}>Logiciel 3D :</p>
                    <div className={s.subContainerSoftware}>
                        <div className={s.softwareContainer}>
                            <img src={dsmax} alt="logo 3DsMax" className={s.logo} />
                            <p className={s.softwareName}>3Bs Max</p>
                            <p className={s.softwareLevel}>Très bonne pratique</p>
                        </div>
                        <div className={s.softwareContainer}>
                            <img src={maya} alt="logo Maya" className={s.logo} />
                            <p className={s.softwareName}>Maya</p>
                            <p className={s.softwareLevel}>Bonne pratique</p>
                        </div>
                        <div className={s.softwareContainer}>
                            <img src={blender} alt="logo Blender" className={s.logo} />
                            <p className={s.softwareName}>Blender</p>
                            <p className={s.softwareLevel}>Pratique moyenne</p>
                        </div>
                        <div className={s.softwareContainer}>
                            <img src={zbrush} alt="logo Zbrush" className={s.logo} />
                            <p className={s.softwareName}>Zbrush</p>
                            <p className={s.softwareLevel}>Bonne Pratique</p>
                        </div>
                        <div className={s.softwareContainer}>
                            <img src={dcoat} alt="logo 3DCoat" className={s.logo} />
                            <p className={s.softwareName}>3D Coat</p>
                            <p className={s.softwareLevel}>Assez bonne pratique</p>
                        </div>
                        <div className={s.softwareContainer}>
                            <img src={vray} alt="logo Vray" className={s.logo} />
                            <p className={s.softwareName}>Vray</p>
                            <p className={s.softwareLevel}>Assez bonne pratique</p>
                        </div>
                        <div className={s.softwareContainer}>
                            <img src={photoshop} alt="logo Photoshop" className={s.logo} />
                            <p className={s.softwareName}>Photoshop</p>
                            <p className={s.softwareLevel}>Bonne Pratique</p>
                        </div>
                        <div className={s.softwareContainer}>
                            <img src={aftereffect} alt="logo After-Effect" className={s.logo} />
                            <p className={s.softwareName}>After Effect</p>
                            <p className={s.softwareLevel}>Assez bonne pratique</p>
                        </div>
                        <div className={s.softwareContainer}>
                            <img src={designer} alt="logo Substance Designer" className={s.logo} />
                            <p className={s.softwareName}>Designer</p>
                            <p className={s.softwareLevel}>Assez bonne pratique</p>
                        </div>
                        <div className={s.softwareContainer}>
                            <img src={painter} alt="logo Painter" className={s.logo} />
                            <p className={s.softwareName}>Painter</p>
                            <p className={s.softwareLevel}>Assez bonne pratique</p>
                        </div>
                    </div>
                </div>
                <div className={s.subContainerGlobal}>
                    <p className={s.txtTitle}>Logiciel Bureaucratie :</p>
                    <div className={s.subContainerSoftware}>
                        <div className={s.softwareContainer}>
                            <img src={excel} alt="logo Excel" className={s.logo} />
                            <p className={s.softwareName}>Excel</p>
                            <p className={s.softwareLevel}>Assez bonne pratique</p>
                        </div>
                        <div className={s.softwareContainer}>
                            <img src={word} alt="logo Word" className={s.logo} />
                            <p className={s.softwareName}>Word</p>
                            <p className={s.softwareLevel}>Assez bonne pratique</p>
                        </div>
                        <div className={s.softwareContainer}>
                            <img src={powerpoint} alt="logo PowerPoint" className={s.logo} />
                            <p className={s.softwareName}>Power Point</p>
                            <p className={s.softwareLevel}>Assez bonne pratique</p>
                        </div>
                        <div className={s.softwareContainer}>
                            <img src={googlesheets} alt="logo Google Sheets" className={s.logo} />
                            <p className={s.softwareName}>Google Sheets</p>
                            <p className={s.softwareLevel}>Assez bonne pratique</p>
                        </div>
                        <div className={s.softwareContainer}>
                            <img src={googleslides} alt="logo Google Slides" className={s.logo} />
                            <p className={s.softwareName}>Google Slides</p>
                            <p className={s.softwareLevel}>Assez bonne pratique</p>
                        </div>
                        <div className={s.softwareContainer}>
                            <img src={googledocs} alt="logo Google Docs" className={s.logo} />
                            <p className={s.softwareName}>Google Docs</p>
                            <p className={s.softwareLevel}>Assez bonne pratique</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ); 
};

export default AboutMe;