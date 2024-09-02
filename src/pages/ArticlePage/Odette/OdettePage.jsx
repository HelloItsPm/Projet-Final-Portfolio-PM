import React, { useState } from 'react';
import odette1 from '../../../assets/images/Portfolio3D/Odettethumbnail.png';
import odette2 from '../../../assets/images/Portfolio3D/Odette1.png';
import odette3 from '../../../assets/images/Portfolio3D/OdetteWireframe.jpg';
import DsMax from '../../../assets/images/Softwares/3DsMax.png';
import Zbrush from '../../../assets/images/Softwares/Zbrush.png';
import Vray from '../../../assets/images/Softwares/Vray.png';
import Photoshop from '../../../assets/images/Softwares/Photoshop.png';
import Designer from '../../../assets/images/Softwares/Substance Designer.png';
import Painter from '../../../assets/images/Softwares/Substance Painter.png';
import s from './style.module.scss';
import Modal from '../../../components/Modal/Modal'; // Assurez-vous que le chemin est correct

const OdettePage = () => {
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
                <h1 className={s.title}>Odette</h1>
                <div className={s.line}></div>
            </div>
            <div className={s.containerInfos}>
                <div className={s.containerImg}>
                    <img src={odette1} alt="Image d'Odette'" className={s.containerImgGeneral} onClick={() => openModal(odette1)} />
                    <img src={odette2} alt="Image d'Odette'" className={s.containerImgGeneral} onClick={() => openModal(odette2)} />
                    <img src={odette3} alt="Wireframe d'Odette" className={s.containerImgGeneral} onClick={() => openModal(odette3)} />
                </div>
                <div className={s.containerDescription}>
                    <p className={s.txt}>Odette la RH</p>
                    <p className={s.txt}>Le thème de l'exercice était de créer un monstre inspiré du film Monstres et Cie de Disney-Pixar. Pour cela, j'ai choisi de concevoir Odette, la cousine de Germaine, travaillant dans le département des ressources humaines.</p>
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

export default OdettePage;
