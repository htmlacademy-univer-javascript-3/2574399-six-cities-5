import React, { useState } from 'react';
import OfferCard from '../OfferCard/OfferCard';

type Offer = {
  id: string;
  title: string;
  price: number;
  rating: number;
  type: string;
  isPremium: boolean;
  isFavorite: boolean;
  images: string[];
};

type OffersListProps = {
  offers: Offer[];
};

const OffersList: React.FC<OffersListProps> = ({ offers }) => {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => {
    setActiveOfferId(id);
  };

  const handleMouseLeave = () => {
    setActiveOfferId(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.length > 0 ? (
        offers.map((offer) => (
          <div
            key={offer.id}
            onMouseEnter={() => handleMouseEnter(offer.id)}
            onMouseLeave={handleMouseLeave}
            className={offer.id === activeOfferId ? 'place-card active' : 'place-card'}
          >
            <OfferCard {...offer} />
          </div>
        ))
      ) : (
        <p>No offers available</p>
      )}
    </div>
  );
};

export default OffersList;
