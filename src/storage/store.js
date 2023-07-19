import { configureStore } from '@reduxjs/toolkit';
import trainSlice from './slices/trainSlice';
import searchSlice from './slices/searchSlice';

const store = configureStore({
  reducer: {
    trains: trainSlice,
    search: searchSlice,
  },
});

export default store;
