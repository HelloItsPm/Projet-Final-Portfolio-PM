import React, { useState } from 'react';
import chess1 from '../../../assets/images/Portfolio3D/Chessthumnail.png';
import chess2 from '../../../assets/images/Portfolio3D/Chess1.png';
import chess3 from '../../../assets/images/Portfolio3D/Chess2.png';
import DsMax from '../../../assets/images/Softwares/3DsMax.png';
import Zbrush from '../../../assets/images/Softwares/Zbrush.png';
import Vray from '../../../assets/images/Softwares/Vray.png';
import Photoshop from '../../../assets/images/Softwares/Photoshop.png';
import Designer from '../../../assets/images/Softwares/Substance Designer.png';
import Painter from '../../../assets/images/Softwares/Substance Painter.png';
import s from './style.module.scss';
import Modal from '../../../components/Modal/Modal'; // Assurez-vous que le chemin est correct

const ChessPage = () => {
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
                <h1 className={s.title}>Echiquier</h1>
                <div className={s.line}></div>
            </div>
            <div className={s.containerInfos}>
                <div className={s.containerImg}>
                    <img src={chess1} alt="Image de l'échiquier" className={s.containerImgGeneral} onClick={() => openModal(chess1)} />
                    <img src={chess2} alt="Image de l'échiquier" className={s.containerImgGeneral} onClick={() => openModal(chess2)} />
                    <img src={chess3} alt="Image de l'échiquier" className={s.containerImgGeneral} onClick={() => openModal(chess3)} />
                </div>
                <div className={s.containerDescription}>
                    <p className={s.txt}>Echiquier réalisé en partiel</p>
                    <p className={s.txt}>Le thème du partiel était de créer un échiquier en seulement deux jours. J'ai donc choisi d'explorer un concept basé sur une rivalité classique, celle du jour et de la nuit, pour donner plus de profondeur à mon projet.</p>
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

export default ChessPage;
