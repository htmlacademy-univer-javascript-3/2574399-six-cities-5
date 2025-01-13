import React from 'react';
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
  onOfferHover?: (id: string | null) => void; // Функция для обработки наведения
};

const OffersList: React.FC<OffersListProps> = ({ offers, onOfferHover }) => {
  const handleMouseEnter = (id: string) => {
    if (onOfferHover) {
      onOfferHover(id);
    }
  };

  const handleMouseLeave = () => {
    if (onOfferHover) {
      onOfferHover(null);
    }
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <div
          key={offer.id}
          onMouseEnter={() => handleMouseEnter(offer.id)}
          onMouseLeave={handleMouseLeave}
        >
          <OfferCard {...offer} />
        </div>
      ))}
    </div>
  );
};

export default OffersList;
