// initial state ----------------------------------------------------
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../utils/api';
import { isError, isLoading } from '../storeUtils';

const initialState = {
  trains: [],
  loading: false,
  total: 0,
  searchParams: {
    from_city_id: '',
    from_city_name: '',
    to_city_id: '',
    to_city_name: '',
    date_start: '',
    date_start_arrival: '',
    date_end: '',
    date_end_arrival: '',
    have_first_class: false,
    have_second_class: false,
    have_third_class: false,
    have_fourth_class: false,
    have_wifi: false,
    have_air_conditioning: false,
    have_express: false,
    price_from: 300,
    price_to: 7000,
    start_departure_hour_from: 0,
    start_departure_hour_to: 24,
    start_arrival_hour_from: 0,
    start_arrival_hour_to: 24,
    end_departure_hour_from: 0,
    end_departure_hour_to: 24,
    end_arrival_hour_from: 0, // - Час прибытия назад от (работает при установленном параметре date_end)
    end_arrival_hour_to: 24, // - Час прибытия назад до (работает при установленном параметре date_end)
    limit: 5,
    offset: 0,
    sort: 'date',
  },
  currentRoute: {},
  departureCoaches: [],
  departureCoachType: '',
  departureFilteredCoaches: [],
  departureSelectedCoaches: [],
  departure: {
    route_direction_id: '',
    seats: [],
  },
  arrivalCoaches: [],
  arrivalCoachType: '',
  arrivalFilteredCoaches: [],
  arrivalSelectedCoaches: [],
  arrival: {
    route_direction_id: '',
    seats: [],
  },
};

// actions ----------------------------------------------------
export const getTrains = createAsyncThunk(
  'trains',
  async function (_, { getState, fulfillWithValue, rejectWithValue }) {
    const { trains } = getState();
    let stringParams = '';
    for (let key in trains.searchParams) {
      if (trains.searchParams[key]) {
        stringParams += key + '=' + trains.searchParams[key] + '&';
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
        const departureCoaches = await api.getRouteSeats(currentRoute.departure._id);
        const arrivalCoaches = await api.getRouteSeats(currentRoute.arrival._id);
        return fulfillWithValue({ departureCoaches, arrivalCoaches });
      }
      const departureCoaches = await api.getRouteSeats(currentRoute.departure._id);
      return fulfillWithValue({ departureCoaches });
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
    setFilter(state, { payload }) {
      state.searchParams[payload.filter] = payload.value;
    },
    selectRoute(state, action) {
      state.currentRoute = action.payload;
    },
    setCoachType(state, { payload }) {
      state[`${payload.direction}SelectedCoaches`] = [];
      state[`${payload.direction}CoachType`] = payload.type;
      state[`${payload.direction}FilteredCoaches`] = state[`${payload.direction}Coaches`].filter(
        ({ coach }) => {
          return payload.type.includes(coach.class_type);
        }
      );
    },
    setSelectedCoaches(state, { payload }) {
      if (
        state[`${payload.direction}SelectedCoaches`].find(
          (el) => el?.coach?._id === payload.coach.coach._id
        )
      ) {
        state[`${payload.direction}SelectedCoaches`] = state[`${payload.direction}SelectedCoaches`].filter((el) => el?.coach?._id !== payload.coach.coach._id);
      } else {
        state[`${payload.direction}SelectedCoaches`] = [...state[`${payload.direction}SelectedCoaches`], payload.coach];
      }
    },
    setSelectedSeat(state, {payload}) {
      if (state[payload.direction].seats.find(seat => seat.coach_id === payload.seat.coach_id && seat.seat_number === payload.seat.seat_number)) {
        state[payload.direction].seats = state[payload.direction].seats.filter(seat => seat.seat_number !== payload.seat.seat_number || seat.coach_id !== payload.seat.coach_id)
      } else {
        state[payload.direction].seats.push(payload.seat)
      }
    },
    resetSelectedSeats(state, {payload}){
      state[payload.direction].seats = state[payload.direction].seats.filter(seat => seat.coach_id !== payload.coach_id)
    },
    resetCoachType(state, action) {
      state.departureCoaches = [];
      state.departureCoachType = '';
      state.departureFilteredCoaches = [];
      state.arrivalCoaches = [];
      state.arrivalCoachType = '';
      state.arrivalFilteredCoaches = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTrains.fulfilled, (state, action) => {
      state.trains = action.payload.items ?? [];
      state.total = action.payload.total_count;
    });

    builder.addCase(getCoach.fulfilled, (state, action) => {
      state.departureCoaches = action.payload.departureCoaches;
      state.arrivalCoaches = action.payload.arrivalCoaches ?? [];
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

export const {
  setCity,
  setDate,
  setFilter,
  selectRoute,
  setCoachType,
  resetCoachType,
  setSelectedCoaches,
  setSelectedSeat,
  resetSelectedSeats,
} = trains.actions;
export default trains.reducer;
