import React from 'react';
import MainPage from '../MainPage/MainPage';

type Offer = {
  id: string;
  title: string;
  price: number;
  rating: number;
  type: string;
  isPremium: boolean;
  isFavorite: boolean;
  images: string[];
  description: string;
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  host: {
    name: string;
    isPro: boolean;
    avatarUrl: string;
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
};

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

type AppProps = {
  offerCount: number;
  offers: Offer[];
  reviews: Review[];
};

const App: React.FC<AppProps> = ({ offerCount, offers, reviews }) => (
  <div className="app">
    <MainPage offerCount={offerCount} offers={offers} reviews={reviews} />
  </div>
);

export default App;
