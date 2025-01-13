import React from 'react';
import { useParams } from 'react-router-dom';
import ReviewList from '../ReviewsList/ReviewsList';
import CommentForm from '../CommentForm/CommentForm';
import Map from '../Map/Map';
import OffersList from '../OffersList/OffersList'; // Подключаем существующий компонент
import offers from '../../mocks/offers';
import reviewsMock from '../../mocks/reviews';

const OfferPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const offer = offers.find((item) => item.id === id);

  if (!offer) {
    return <h2>Offer not found</h2>;
  }

  const nearbyOffers = offers.filter((item) => item.id !== id).slice(0, 3);
  const filteredReviews = reviewsMock.filter((review) => review.offerId === id);

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
                  <img className="offer__image" src={image} alt="Offer" />
                </div>
              ))}
            </div>
          </div>

          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>

              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${offer.rating * 20}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>

              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{offer.type}</li>
                <li className="offer__feature offer__feature--bedrooms">{offer.bedrooms} Bedrooms</li>
                <li className="offer__feature offer__feature--adults">Max {offer.maxAdults} adults</li>
              </ul>

              <div className="offer__price">
                <b className="offer__price-value">€{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>

              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((good) => (
                    <li className="offer__inside-item" key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={offer.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host"
                    />
                  </div>
                  <span className="offer__user-name">{offer.host.name}</span>
                  {offer.host.isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p>{offer.description}</p>
                </div>
              </div>
            </div>
          </div>

          <section className="offer__reviews reviews">
            <h2 className="reviews__title">
              Reviews · <span className="reviews__amount">{filteredReviews.length}</span>
            </h2>
            <ReviewList reviews={filteredReviews} />
            <CommentForm />
          </section>
        </section>

        <section className="offer__map map">
          <Map
            center={[offer.city.location.latitude, offer.city.location.longitude]}
            zoom={offer.city.location.zoom}
            markers={nearbyOffers.map((item) => [item.location.latitude, item.location.longitude])}
          />
        </section>

        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <OffersList offers={nearbyOffers} /> {/* Используем OffersList */}
        </section>
      </main>
    </div>
  );
};

export default OfferPage;
