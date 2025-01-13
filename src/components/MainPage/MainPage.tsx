import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CitiesList from '../CitiesList/CitiesList';
import OffersList from '../OffersList/OffersList';
import Map from '../Map/Map';
import SortOptions from '../SortOptions/SortOptions';
import { selectFilteredOffers, selectCity } from '../../store/reducer';

type SortOption = 'Popular' | 'Price: low to high' | 'Price: high to low' | 'Top rated first';

const MainPage: React.FC = () => {
  const [currentSort, setCurrentSort] = useState<SortOption>('Popular');
  const [activeOffer, setActiveOffer] = useState<string | null>(null); // Добавлено состояние для активного предложения

  const offers = useSelector(selectFilteredOffers); // Получение предложений по выбранному городу
  const city = useSelector(selectCity); // Текущий выбранный город

  // Сортировка предложений в зависимости от выбранного варианта
  const sortedOffers = [...offers].sort((a, b) => {
    switch (currentSort) {
      case 'Price: low to high':
        return a.price - b.price;
      case 'Price: high to low':
        return b.price - a.price;
      case 'Top rated first':
        return b.rating - a.rating;
      default:
        return 0; // Popular (исходный порядок)
    }
  });

  // Центр города для отображения карты
  const cityCenter = sortedOffers[0]?.city.location || { latitude: 52.38333, longitude: 4.9, zoom: 12 };
  const markers = sortedOffers.map((offer) => [offer.location.latitude, offer.location.longitude]);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active" href="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList /> {/* Список городов */}
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {sortedOffers.length} places to stay in {city}
              </b>
              <SortOptions currentSort={currentSort} onSortChange={setCurrentSort} /> {/* Варианты сортировки */}
              <OffersList offers={sortedOffers} onOfferHover={setActiveOffer} /> {/* Список предложений */}
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  center={[cityCenter.latitude, cityCenter.longitude]}
                  zoom={cityCenter.zoom}
                  markers={markers}
                  activeMarker={
                    activeOffer
                      ? markers.find((marker, index) => sortedOffers[index].id === activeOffer)
                      : null
                  }
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
