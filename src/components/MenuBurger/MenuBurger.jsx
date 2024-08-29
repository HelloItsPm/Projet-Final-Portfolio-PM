import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BurgerIcon from '../BurgerIcon/BurgerIcon';
import s from './style.module.scss';

const BurgerMenu = ({ onSelectComponent }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate(); // Initialisation de useNavigate

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavigation = (component, path) => {
        console.log('Navigation triggered:', component, path);
        if (path) {
            navigate(path); // Redirige vers une nouvelle route
        } else {
            onSelectComponent(component);
        }
        setIsOpen(false); // Ferme le menu après la navigation
        navigate('/'); // Redirige vers la page d'accueil
    };

    return (
        <div>
            {/* Bouton Burger */}
            <div className={s.burgerButton} onClick={toggleMenu}>
                <BurgerIcon isActive={isOpen} toggleMenu={toggleMenu} />
            </div>

            {/* Menu */}
            {isOpen && (
                <div className={s.menu}>
                    <div className={s.menuItem} onClick={() => handleNavigation('HomeMessage')}>
                        <svg width="46" height="39" viewBox="0 0 46 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.25715 38L19.6571 38L19.6571 29.36L26.0571 29.36L26.0571 38L36.4571 38L36.4571 22.16L42.8571 22.16L22.8571 2L2.85714 22.16L9.25715 22.16L9.25715 38Z" stroke="#3DB08D" strokeWidth="2"/>
                        </svg>
                        <p className={s.txt}>Accueil</p>
                    </div>
                    <div className={s.menuItem} onClick={() => handleNavigation('Portfolio')}>
                        <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6572 17.8L8.25718 19.4L7.34289 24.2L5.05718 36.2L1.85718 17L4.25718 15.4C4.57718 15.4 8.12384 15.4 9.85718 15.4M35.4572 20.2H39.4572L41.8572 21.8L38.6572 39.4L36.2572 41H5.78659L8.25718 38.6L10.6572 26M35.4572 20.2V9.00001H31.4572M35.4572 20.2H18.6572M18.6572 20.2V9.00001H31.4572M18.6572 20.2H14.6572M31.4572 9.00001V5.00001C31.4572 5.00001 29.9565 5.00001 27.4572 5.00001M27.4572 5.00001C23.3957 5.00001 14.6572 5.00001 14.6572 5.00001V20.2M27.4572 5.00001C27.4572 4.06275 27.4572 1 27.4572 1H10.6572V26M14.6572 20.2H13.8572L11.4572 21.8L10.6572 26" stroke="#3DB08D" strokeWidth="2"/>
                        </svg>
                        <p className={s.txt}>Portfolio</p>
                    </div>
                    <div className={s.menuItem} onClick={() => handleNavigation('Resume')}>
                        <svg width="35" height="42" viewBox="0 0 35 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.8572 12.6364L21.7596 1H4.25715L1.85715 3.4V38.4324L4.36945 41H31.3448L33.8572 38.4324V12.6364Z" stroke="#3DB08D" strokeWidth="2"/>
                        </svg>
                        <p className={s.txt}>CV</p>
                    </div>
                    <div className={s.menuItem} onClick={() => handleNavigation('AboutMe')}>
                        <svg width="38" height="43" viewBox="0 0 38 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.1429 33.4286L30.4286 27.7143C26.7884 27.2381 19.4064 26.2857 19 26.2857L7.57146 27.7143L1.85718 33.4286L4.71432 42H33.2858L36.1429 33.4286Z" stroke="#3DB08D" strokeWidth="2"/>
                                <path d="M19 2L10.4286 10.5714L19 19.1429L27.5715 10.5714L19 2Z" stroke="#3DB08D" strokeWidth="2"/>
                        </svg>
                        <p className={s.txt}>À propos</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BurgerMenu;