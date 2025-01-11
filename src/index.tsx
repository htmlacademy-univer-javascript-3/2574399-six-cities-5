import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App/App';
import LoginPage from './components/LoginPage/LoginPage';
import FavoritesPage from './components/FavoritesPage/FavoritesPage';
import OfferPage from './components/OfferPage/OfferPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const offerCount = 312; // Данные для компонента главной страницы
const isAuthenticated = true; // Пользователь всегда не авторизован (для тестирования)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App offerCount={offerCount} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/favorites"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path="/offer/:id" element={<OfferPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
