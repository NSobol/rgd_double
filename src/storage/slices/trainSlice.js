// initial state ----------------------------------------------------
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../utils/api';
import { isError, isLoading } from '../storeUtils';

const initialState = {
  trains: [],
  loading: false,
  total: 0,
  searchParams: {},
  filters: {
    have_first_class: false,
    have_second_class: false,
    have_third_class: false,
    have_fourth_class: false,
    have_wifi: false,
    have_air_conditioning: false,
  },
  currentRoute: {},
  departureCoach: [],
  departureCoachType: '',
  departureFilteredCoach: [],
  arrivalCoach: [],
  arrivalCoachType: '',
  arrivalFilteredCoach: [],
};

// actions ----------------------------------------------------
export const getTrains = createAsyncThunk(
  'trains',
  async function (_, { getState, fulfillWithValue, rejectWithValue }) {
    const { trains } = getState();
    let stringParams = '';
    for (let key in trains.searchParams) {
      stringParams += key + '=' + trains.searchParams[key] + '&';
    }
    for (let key in trains.filters) {
      if (trains.filters[key]) {
        stringParams += key + '=' + trains.filters[key] + '&';
      }
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
  async function (currentRoute, { fulfillWithValue, rejectWithValue }) {
    try {
      if (currentRoute.arrival) {
        const departureCoach = await api.getRouteSeats(currentRoute.departure._id);
        const arrivalCoach = await api.getRouteSeats(currentRoute.arrival._id);
        return fulfillWithValue({ departureCoach, arrivalCoach });
      }
      const departureCoach = await api.getRouteSeats(currentRoute.departure._id);
      return fulfillWithValue({ departureCoach });
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
      console.log(action);
      state.filters[action.payload] = !state.filters[action.payload];
    },
    selectRoute(state, action) {
      state.currentRoute = action.payload;
    },
    setCoachType(state, { payload }) {
      state[`${payload.direction}CoachType`] = payload.type;
      state[`${payload.direction}FilteredCoach`] = state[`${payload.direction}Coach`].filter(
        ({ coach }) => {
          return payload.type.includes(coach.class_type);
        }
      );
    },
    resetCoachType(state, action) {
      state.departureCoach = [];
      state.departureCoachType = '';
      state.departureFilteredCoach = [];
      state.arrivalCoach = [];
      state.arrivalCoachType = '';
      state.arrivalFilteredCoach = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTrains.fulfilled, (state, action) => {
      state.trains = action.payload.items ?? [];
      state.total = action.payload.total;
    });

    builder.addCase(getCoach.fulfilled, (state, action) => {
      state.departureCoach = action.payload.departureCoach;
      state.arrivalCoach = action.payload.arrivalCoach ?? [];
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

export const { setCity, setDate, setFilter, selectRoute, setCoachType, resetCoachType } = trains.actions;
export default trains.reducer;
