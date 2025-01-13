import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import OfferPage from '../OfferPage/OfferPage';

const App: React.FC = () => (
  <Routes>
    {/* Главная страница */}
    <Route path="/" element={<MainPage />} />
    {/* Страница конкретного предложения */}
    <Route path="/offer/:id" element={<OfferPage />} />
    {/* Страница 404 для несуществующих маршрутов */}
    <Route path="*" element={<div>404 - Page Not Found</div>} />
  </Routes>
);

export default App;
