// initial state ----------------------------------------------------
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../utils/api';
import { isError, isLoading } from '../storeUtils';

const initialState = {
  trains: [],
  loading: false,
  total: 0,
  currentRoute: {},
  searchParams: {},
  filters: {
    have_first_class: false,
    have_second_class: false,
    have_third_class: false,
    have_fourth_class: false,
    have_wifi: false,
    have_air_conditioning: false,
  },
  departureCoachType: '',
  departureCoach: [],
  arrivalCoachType: '',
  arrivalCoach: [],
};

// actions ----------------------------------------------------
export const getTrains = createAsyncThunk(
  'trains',
  async function (data, { getState, fulfillWithValue, rejectWithValue }) {
    const { trains } = getState();
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

export const getCoach = createAsyncThunk(
  'trainSlice/getCoach',
  async function ({ direction, routeId }, { getState, fulfillWithValue, rejectWithValue }) {
    const { trains } = getState();
    let stringFilters = '?';
    for (let key in trains.filters) {
      if (trains.filters[key]) {
        stringFilters += key + '=' + trains.filters[key] + '&';
      }
    }
    try {
      const data = await api.getRouteSeats(routeId, stringFilters);
      return fulfillWithValue({ data, direction });
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
    setFilter(state, action) {
      state.filters[action.payload] = !state.filters[action.filter];
    },
    selectRoute(state, action) {
      state.currentRoute = action.payload;
    },
    setCoachType(state, action) {
      state[`${action.payload.direction}CoachType`] = action.payload.type;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTrains.fulfilled, (state, action) => {
      state.trains = action.payload.items ?? [];
      state.total = action.payload.total;
    });

    builder.addCase(getCoach.fulfilled, (state, action) => {
      state[`${action.payload.direction}Coach`] = action.payload.data ?? [];
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

export const { setCity, setDate, setFilter, selectRoute, setCoachType } = trains.actions;
export default trains.reducer;
