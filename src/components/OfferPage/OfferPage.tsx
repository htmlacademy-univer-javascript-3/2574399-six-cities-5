import React from 'react';
import ReviewList from '../ReviewsList/ReviewsList';
import CommentForm from '../CommentForm/CommentForm';

type User = {
  id: string;
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

type Review = {
  id: string;
  offerId: string;
  user: User;
  rating: number;
  comment: string;
  date: string;
};

type OfferPageProps = {
  reviews: Review[];
};

const OfferPage: React.FC<OfferPageProps> = ({ reviews }) => (
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
            <div className="offer__image-wrapper">
              <img className="offer__image" src="img/room.jpg" alt="Photo studio" />
            </div>
            <div className="offer__image-wrapper">
              <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio" />
            </div>
          </div>
        </div>

        <div className="offer__container container">
          <div className="offer__wrapper">
            <div className="offer__name-wrapper">
              <h1 className="offer__name">Beautiful & luxurious studio at great location</h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>

            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{ width: '80%' }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">4.8</span>
            </div>

            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">Entire place</li>
              <li className="offer__feature offer__feature--bedrooms">3 Bedrooms</li>
              <li className="offer__feature offer__feature--adults">Max 4 adults</li>
            </ul>

            <div className="offer__price">
              <b className="offer__price-value">€120</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>

            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                <li className="offer__inside-item">Wi-Fi</li>
                <li className="offer__inside-item">Washing machine</li>
                <li className="offer__inside-item">Towels</li>
                <li className="offer__inside-item">Heating</li>
              </ul>
            </div>

            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper user__avatar-wrapper">
                  <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host" />
                </div>
                <span className="offer__user-name">Angelina</span>
                <span className="offer__user-status">Pro</span>
              </div>
              <div className="offer__description">
                <p>A quiet cozy and picturesque studio with a unique atmosphere. The studio is perfect for traveling couples.</p>
              </div>
            </div>
          </div>
        </div>

        <section className="offer__reviews reviews">
          <h2 className="reviews__title">
            Reviews · <span className="reviews__amount">{reviews.length}</span>
          </h2>
          <ReviewList reviews={reviews} />
          <CommentForm />
        </section>
      </section>

      <section className="offer__map map"></section>
    </main>
  </div>
);

export default OfferPage;
