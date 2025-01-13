import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CitiesList from '../CitiesList/CitiesList';
import OffersList from '../OffersList/OffersList';
import Map from '../Map/Map';
import Spinner from '../Spinner/Spinner';
import SortOptions from '../SortOptions/SortOptions';
import { fetchOffers } from '../../store/thunks/offers';
import { RootState } from '../../store';

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const { offers, city, isLoading, error } = useSelector((state: RootState) => state.app);
  const [currentSort, setCurrentSort] = useState('Popular');

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <p className="error">Failed to load offers: {error}</p>;
  }

  const filteredOffers = offers.filter((offer) => offer.city.name === city);
  const sortedOffers = [...filteredOffers].sort((a, b) => {
    switch (currentSort) {
      case 'Price: low to high':
        return a.price - b.price;
      case 'Price: high to low':
        return b.price - a.price;
      case 'Top rated first':
        return b.rating - a.rating;
      default:
        return 0; // Popular
    }
  });

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
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {sortedOffers.length} places to stay in {city}
              </b>
              <SortOptions currentSort={currentSort} onSortChange={setCurrentSort} />
              <OffersList offers={sortedOffers} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map center={[cityCenter.latitude, cityCenter.longitude]} zoom={cityCenter.zoom} markers={markers} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
