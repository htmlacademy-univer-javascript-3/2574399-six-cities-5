import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

type Offer = {
  id: string;
  title: string;
  price: number;
  // Остальные поля
};

export const fetchOffers = createAsyncThunk<Offer[], void, { extra: AxiosInstance }>(
  'offers/fetchOffers',
  async (_, { extra: api }) => {
    const response = await api.get<Offer[]>('/offers');
    return response.data;
  }
);
