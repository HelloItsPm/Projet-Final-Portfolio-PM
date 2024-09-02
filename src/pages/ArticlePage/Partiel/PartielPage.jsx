import React, { useState } from 'react';
import partiel1 from '../../../assets/images/Portfolio3D/Partiel2022thumbnail.png';
import partiel2 from '../../../assets/images/Portfolio3D/Partiel2022.png';
import DsMax from '../../../assets/images/Softwares/3DsMax.png';
import Zbrush from '../../../assets/images/Softwares/Zbrush.png';
import Vray from '../../../assets/images/Softwares/Vray.png';
import Photoshop from '../../../assets/images/Softwares/Photoshop.png';
import Designer from '../../../assets/images/Softwares/Substance Designer.png';
import Painter from '../../../assets/images/Softwares/Substance Painter.png';
import s from './style.module.scss';
import Modal from '../../../components/Modal/Modal'; // Assurez-vous que le chemin est correct

const PartielPage = () => {
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
                <h1 className={s.title}>Partiel Isométrique</h1>
                <div className={s.line}></div>
            </div>
            <div className={s.containerInfos}>
                <div className={s.containerImg}>
                    <img src={partiel1} alt="Image d'un bureau de magicien" className={s.containerImgGeneral} onClick={() => openModal(partiel1)} />
                    <img src={partiel2} alt="Image d'un bureau de magicien'" className={s.containerImgGeneral} onClick={() => openModal(partiel2)} />
                </div>
                <div className={s.containerDescription}>
                    <p className={s.txt}>Partiel en thème isométrique</p>
                    <p className={s.txt}>Le partiel portait sur les pièces isométriques, un concept couramment utilisé dans le domaine de la 3D. L'objectif était de créer un environnement reflétant notre personnalité à travers la réalisation d'un projet. J'ai choisi de concevoir un bureau de magicien, légèrement en désordre, lumineux et coloré, avec plusieurs potions luminescentes.</p>
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

export default PartielPage;