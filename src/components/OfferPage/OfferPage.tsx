import React from 'react';
import { useParams } from 'react-router-dom';
import Map from '../Map/Map';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';

type Coordinates = [number, number];

const OfferPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const offers = useSelector((state: RootState) => state.app.offers);
  const offer = offers.find((item) => item.id === id);

  if (!offer) {
    return <p>Offer not found</p>;
  }

  const nearbyOffers = offers.slice(0, 3);
  const markers: Coordinates[] = nearbyOffers.map((item) => [item.location.latitude, item.location.longitude]);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.map((image) => (
                <div className="offer__image-wrapper" key={image}>
                  <img className="offer__image" src={image} alt="Place" />
                </div>
              ))}
            </div>
          </div>

          <div className="offer__container container">
            <div className="offer__wrapper">
              <h1 className="offer__name">{offer.title}</h1>
              <p>{offer.description}</p>
            </div>
          </div>

          <section className="offer__map map">
            <Map
              center={[offer.location.latitude, offer.location.longitude]}
              zoom={offer.location.zoom}
              markers={markers}
            />
          </section>
        </section>
      </main>
    </div>
  );
};

export default OfferPage;
