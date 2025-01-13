import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

type InitialState = {
  city: string;
  offers: Offer[];
  activeOffer: string | null; // Для подсветки маркеров
};

const initialState: InitialState = {
  city: 'Paris', // Город по умолчанию
  offers: [], // Список предложений по аренде
  activeOffer: null, // Активное предложение для подсветки на карте
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // Изменение текущего города
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    // Установка списка предложений
    setOffers: (state, action: PayloadAction<Offer[]>) => {
      state.offers = action.payload;
    },
    // Установка активного предложения для подсветки маркера
    setActiveOffer: (state, action: PayloadAction<string | null>) => {
      state.activeOffer = action.payload;
    },
  },
});

export const { changeCity, setOffers, setActiveOffer } = appSlice.actions;

export const selectCity = (state: { app: InitialState }) => state.app.city;
export const selectFilteredOffers = (state: { app: InitialState }) =>
  state.app.offers.filter((offer) => offer.city.name === state.app.city);
export const selectActiveOffer = (state: { app: InitialState }) => state.app.activeOffer;

export default appSlice.reducer;
