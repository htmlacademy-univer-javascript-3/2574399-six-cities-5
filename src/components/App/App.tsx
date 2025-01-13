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


type AppProps = {
  offerCount: number;
  offers: Offer[];
};

const App: React.FC<AppProps> = ({ offerCount, offers }) => (
  <div className="app">
    <MainPage offerCount={offerCount} offers={offers} />
  </div>
);

export default App;
