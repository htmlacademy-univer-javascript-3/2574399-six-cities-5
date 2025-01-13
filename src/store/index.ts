import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducer';

const store = configureStore({
  reducer: {
    app: appReducer, // Редьюсер приложения
  },
});

export type RootState = ReturnType<typeof store.getState>; // Тип состояния
export type AppDispatch = typeof store.dispatch; // Тип диспатча

export default store;
