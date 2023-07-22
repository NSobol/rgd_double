import { configureStore } from '@reduxjs/toolkit';
import trainSlice from './slices/trainSlice';
import orderSlice from './slices/orderSlice';

const store = configureStore({
  reducer: {
    trains: trainSlice,
    order: orderSlice,
  },
});

export default store;
