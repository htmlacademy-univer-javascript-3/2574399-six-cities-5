import React from 'react';
import OffersList from '../OffersList/OffersList';
import Map from '../Map/Map';

type Offer = {
  id: string;
  title: string;
  price: number;
  rating: number;
  type: string;
  isPremium: boolean;
  isFavorite: boolean;
  images: string[];
  description: string;
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  host: {
    name: string;
    isPro: boolean;
    avatarUrl: string;
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
};

type Review = {
  id: string;
  offerId: string;
  user: {
    id: string;
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  rating: number;
  comment: string;
  date: string;
};

type MainPageProps = {
  offerCount: number;
  offers: Offer[];
  reviews: Review[]; // Добавлено reviews
};

const MainPage: React.FC<MainPageProps> = ({ offerCount, offers, reviews }) => {
  const amsterdamOffers = offers.filter((offer) => offer.city.name === 'Amsterdam');
  const cityCenter = amsterdamOffers[0]?.city.location || { latitude: 52.38333, longitude: 4.9, zoom: 12 };
  const markers = amsterdamOffers.map((offer) => [offer.location.latitude, offer.location.longitude]);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active" href="#">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offerCount} places to stay in Amsterdam</b>
              <OffersList offers={amsterdamOffers} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  center={[cityCenter.latitude, cityCenter.longitude]}
                  zoom={cityCenter.zoom}
                  markers={markers}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
