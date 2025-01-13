import React from 'react';
import Review from '../Review/Review';

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

type ReviewsListProps = {
  reviews: Review[];
};

const ReviewsList: React.FC<ReviewsListProps> = ({ reviews }) => (
  <section className="reviews">
    <h2 className="reviews__title">
      Reviews · <span className="reviews__amount">{reviews.length}</span>
    </h2>
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </ul>
  </section>
);

export default ReviewsList;
