import React, { useState, useEffect } from 'react';
import HomeMessage from '../../components/HomeMessage/HomeMessage';
import Portfolio from '../../components/Portfolio/Portfolio';
import Resume from '../../components/Resume/Resume';
import AboutMe from '../../components/AboutMe/AboutMe';
import s from './style.module.scss';

function Home({ selectedComponent, setSelectedComponent }) {
    const [activeComponent, setActiveComponent] = useState(selectedComponent);

    useEffect(() => {
        setActiveComponent(selectedComponent);
    }, [selectedComponent]);

    const handleNavigateToPortfolio = () => {
        setActiveComponent('Portfolio');
        setSelectedComponent('Portfolio');
    };

    const renderComponent = () => {
        switch (activeComponent) {
            case 'HomeMessage':
                return <HomeMessage onNavigateToPortfolio={handleNavigateToPortfolio} />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Resume':
                return <Resume />;
            case 'AboutMe':
                return <AboutMe />;
            default:
                return <HomeMessage onNavigateToPortfolio={handleNavigateToPortfolio} />;
        }
    };

    return (
        <div className={s.container}>
            {renderComponent()}
        </div>
    );
}

export default Home;
