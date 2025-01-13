import React from 'react';

type ReviewProps = {
  review: {
    id: string;
    user: {
      name: string;
      avatarUrl: string;
      isPro: boolean;
    };
    rating: number;
    comment: string;
    date: string;
  };
};

const Review: React.FC<ReviewProps> = ({ review }) => (
  <li className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img
          className="reviews__avatar user__avatar"
          src={review.user.avatarUrl}
          width="54"
          height="54"
          alt={review.user.name}
        />
      </div>
      <span className="reviews__user-name">{review.user.name}</span>
      {review.user.isPro && <span className="reviews__user-status">Pro</span>}
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{ width: `${review.rating * 20}%` }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">{review.comment}</p>
      <time className="reviews__time" dateTime={new Date(review.date).toISOString()}>
        {new Date(review.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </time>
    </div>
  </li>
);

export default Review;
