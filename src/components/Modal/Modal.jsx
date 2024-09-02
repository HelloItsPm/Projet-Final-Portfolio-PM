// components/Modal.js
import React from 'react';
import s from './style.module.scss'; // Assurez-vous d'avoir ce fichier SCSS

const Modal = ({ isOpen, onClose, imageSrc }) => {
    if (!isOpen) return null;

    return (
        <div className={s.modalOverlay} onClick={onClose}>
            <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
                <img src={imageSrc} alt="Agrandissement" className={s.modalImage} />
                <button onClick={onClose} className={s.closeButton}>×</button>
            </div>
        </div>
    );
};

export default Modal;
