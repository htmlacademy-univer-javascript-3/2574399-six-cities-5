import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => (
  <div className="page page--404">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
        </div>
      </div>
    </header>

    <main className="page__main page__main--404">
      <div className="container">
        <h1 className="page__title">404 Not Found</h1>
        <p className="page__description">The page you are looking for does not exist.</p>
        <Link className="page__link" to="/">
              Return to main page
        </Link>
      </div>
    </main>
  </div>
);

export default NotFoundPage;
