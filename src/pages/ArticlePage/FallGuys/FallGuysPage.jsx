import React, { useState } from 'react';
import fallguys1 from '../../../assets/images/Portfolio3D/Fall_Guysthumbnail.png';
import fallguys2 from '../../../assets/images/Portfolio3D/Fall_Guys1.png';
import fallguys3 from '../../../assets/images/Portfolio3D/FallGWireFrame.png';
import DsMax from '../../../assets/images/Softwares/3DsMax.png';
import Zbrush from '../../../assets/images/Softwares/Zbrush.png';
import Vray from '../../../assets/images/Softwares/Vray.png';
import Photoshop from '../../../assets/images/Softwares/Photoshop.png';
import Designer from '../../../assets/images/Softwares/Substance Designer.png';
import Painter from '../../../assets/images/Softwares/Substance Painter.png';
import s from './style.module.scss';
import Modal from '../../../components/Modal/Modal'; // Assurez-vous que le chemin est correct

const FallGuysPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImageSrc, setModalImageSrc] = useState('');

    const openModal = (src) => {
        setModalImageSrc(src);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalImageSrc('');
    };

    return (
        <div className={s.containerMain}>
            <div className={s.containerTitle}>
                <h1 className={s.title}>FallGuy</h1>
                <div className={s.line}></div>
            </div>
            <div className={s.containerInfos}>
                <div className={s.containerImg}>
                    <img src={fallguys1} alt="Image d'un Fallguy Mushu" className={s.containerImgGeneral} onClick={() => openModal(fallguys1)} />
                    <img src={fallguys2} alt="Image d'un Fallguy Mushu'" className={s.containerImgGeneral} onClick={() => openModal(fallguys2)} />
                    <img src={fallguys3} alt="Wireframe d'un Fallguy Mushu" className={s.containerImgGeneral} onClick={() => openModal(fallguys3)} />
                </div>
                <div className={s.containerDescription}>
                    <p className={s.txt}>FallGuy skin Mushu</p>
                    <p className={s.txt}>L'exercice portait sur le jeu vidéo Fall Guys. L'objectif était de prendre un personnage de la pop culture et de le transformer en skin pour un Fall Guy. Pour ce défi, j'ai choisi le fabuleux, merveilleux et fantastique Mushu.</p>
                    <div className={s.containerSoftware}>
                        <img src={DsMax} alt="Logiciel 3DsMax" className={s.containerSoftwareGeneral} />
                        <img src={Zbrush} alt="Logiciel Zbrush" className={s.containerSoftwareGeneral} />
                        <img src={Photoshop} alt="Logiciel Photoshop" className={s.containerSoftwareGeneral} />
                        <img src={Vray} alt="Logiciel Vray" className={s.containerSoftwareGeneral} />
                        <img src={Designer} alt="Logiciel Designer" className={s.containerSoftwareGeneral} />
                        <img src={Painter} alt="Logiciel Painter" className={s.containerSoftwareGeneral} />
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={modalImageSrc} />
        </div>
    );
};

export default FallGuysPage;