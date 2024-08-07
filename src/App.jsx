import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import LegalNotice from './pages/LegalNotice/LegalNotice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import s from './style.module.scss';

const App = () => {
    return (
        <div>
            <Header />
            <div className={s.outletContainer}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

const AppWrapper = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element = {<Home />}/>
                    <Route path="aboutme" element={<AboutMe />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="resume" element={<Resume />} />
                    <Route path="legalnotice" element={<LegalNotice />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppWrapper;