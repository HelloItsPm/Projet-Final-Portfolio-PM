import React, { useState } from 'react';
import PortfolioWeb from '../PortfolioWeb/PortfolioWeb';
import Portfolio3D from '../Portfolio3D/Portfolio3D';
import s from './style.module.scss'; // Assure-toi que le style est bien importé

const Portfolio = () => {
    const [selectedPortfolio, setSelectedPortfolio] = useState('web');

    const handleSelect = (portfolioType) => {
        setSelectedPortfolio(portfolioType);
    };

    return (
        <div className={s.portfolioContainer}>
            <div className={s.selectContainer}>
                <div className={s.navButtons}>
                    <div
                        className={selectedPortfolio === 'web' ? s.selectedButton : s.button}
                        onClick={() => handleSelect('web')}
                    >
                        Portfolio Web
                    </div>
                </div>
                <div className={s.line}></div>
                <div className={s.navButtons}>
                    <div
                        className={selectedPortfolio === '3D' ? s.selectedButton : s.button}
                        onClick={() => handleSelect('3D')}
                    >
                        Portfolio 3D
                    </div>
                </div>
            </div>
            
            <div className={s.portfolioDisplay}>
                {selectedPortfolio === 'web' && <PortfolioWeb />}
                {selectedPortfolio === '3D' && <Portfolio3D />}
            </div>
        </div>
    );
};

export default Portfolio;
