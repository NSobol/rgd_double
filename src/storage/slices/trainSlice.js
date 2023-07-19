// initial state ----------------------------------------------------
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../utils/api';
import { isError, isLoading } from '../storeUtils';

const initialState = {
  trains: [],
  loading: false,
  total: 0,
  currentTrain: {},
  search: {},
};

// actions ----------------------------------------------------
export const getTrains = createAsyncThunk(
  'trains',
  async function (url, { fulfillWithValue, getState, rejectWithValue }) {
    try {
      const data = await api.getAllRoutes(url);
      console.log(data);
      getState();
      return fulfillWithValue({ ...data });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const trains = createSlice({
  name: 'trains',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTrains.fulfilled, (state, action) => {
      state.trains = action.payload.items ?? [];
      state.total = action.payload.total;
    });

    builder.addMatcher(isError, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addMatcher(isLoading, (state) => {
      state.loading = true;
    });
  },
});

export default trains.reducer;
