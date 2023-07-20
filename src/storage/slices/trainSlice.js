// initial state ----------------------------------------------------
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../utils/api';
import { isError, isLoading } from '../storeUtils';

const initialState = {
  trains: [],
  loading: false,
  total: 0,
  currentTrain: {},
  searchParams: {},
};

// actions ----------------------------------------------------
export const getTrains = createAsyncThunk(
  'trains',
  async function (data, { getState, fulfillWithValue, rejectWithValue }) {
    const {trains} = getState();
    let stringParams = '';
    for (let key in trains.searchParams) {
      stringParams += key + '=' + trains.searchParams[key] + '&';
    }
    try {
      const data = await api.getAllRoutes(stringParams);
      return fulfillWithValue({ ...data });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const trains = createSlice({
  name: 'trains',
  initialState,
  reducers: {
    setCity(state, action) {
      state.searchParams[`${action.payload.name}_id`] = action.payload.city._id;
      state.searchParams[`${action.payload.name}_name`] = action.payload.city.name;
    },
    setDate(state, action) {
      state.searchParams[action.payload.name] = action.payload.value;
    },
  },
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

export const { setCity, setDate } = trains.actions;
export default trains.reducer;
