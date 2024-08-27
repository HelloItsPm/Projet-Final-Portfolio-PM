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

    const renderComponent = () => {
        switch (activeComponent) {
            case 'HomeMessage':
                return <HomeMessage />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Resume':
                return <Resume />;
            case 'AboutMe':
                return <AboutMe />;
            default:
                return <HomeMessage />;
        }
    };

    return (
        <div className={s.container}>
            {renderComponent()}
        </div>
    );
}

export default Home;