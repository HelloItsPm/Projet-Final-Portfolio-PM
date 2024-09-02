import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home/Home';
import LegalNotice from './pages/LegalNotice/LegalNotice';
import ArticlePage from './pages/ArticlePage/Base/ArticlePage';
import QamraynPage from './pages/ArticlePage/Qamrayn/QamraynPage';
import PartielPage from './pages/ArticlePage/Partiel/PartielPage';
import OdettePage from './pages/ArticlePage/Odette/OdettePage';
import FallGuysPage from './pages/ArticlePage/FallGuys/FallGuysPage';
import ChessPage from './pages/ArticlePage/Chess/ChessPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import s from './style.module.scss';

const App = ({ selectedComponent, setSelectedComponent }) => {
    return (
        <div className={s.mainContainer}>
            <Header onSelectComponent={setSelectedComponent} />
            <div className={s.outletContainer}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

const AppWrapper = () => {
    const [selectedComponent, setSelectedComponent] = useState('HomeMessage');

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App selectedComponent={selectedComponent} setSelectedComponent={setSelectedComponent} />}>
                    <Route index element={<Home selectedComponent={selectedComponent} setSelectedComponent={setSelectedComponent} />} />
                    <Route path="articlePage" element={<ArticlePage />} />
                    <Route path="qamraynPage" element={<QamraynPage />} />
                    <Route path="chessPage" element={<ChessPage />} />
                    <Route path="fallGuysPage" element={<FallGuysPage />} />
                    <Route path="odettePage" element={<OdettePage />} />
                    <Route path="partielPage" element={<PartielPage />} />
                    <Route path="legalnotice" element={<LegalNotice />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppWrapper;
