import React from 'react';
import { Comment } from '../../types/comment';
import Review from '../Review/Review';

function ReviewList({guestReviews}:{guestReviews:Comment[]}){
  return(
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{guestReviews.length}</span></h2>
      <ul className="reviews__list" data-testid="reviews-list">
        {guestReviews.slice(0,10).map((rev) =>
          (
            <Review key = {rev.id} guestReview={rev}/>
          ))}
      </ul>
    </>
  );
}

export default React.memo(ReviewList);
