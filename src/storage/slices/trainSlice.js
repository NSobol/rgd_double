// initial state ----------------------------------------------------
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../utils/api';
import { isError, isLoading } from '../storeUtils';

const initialState = {
  trains: [],
  loading: false,
  total: 0,
  //DEV статичные данные для работы
  currentRoute: {
    available_seats: 80,
    available_seats_info: {
        second: 32,
        third: 48
    },
    duration: 134640,
    from: {
        city: {
            _id: "641037eb5c49ea004632ee6e",
            name: "москва"
        },
        datetime: 1689726807,
        railway_station_name: "Белорусский"
    },
    have_air_conditioning: true,
    have_first_class: false,
    have_fourth_class: false,
    have_second_class: true,
    have_third_class: true,
    have_wifi: true,
    is_express: false,
    min_price: 2061,
    price_info: {
        second: {
            bottom_price: 2307,
            top_price: 2061
        },
        third: {
            bottom_price: 4125,
            side_price: 2815,
            top_price: 4365
        }
    },
    to: {
        city: {
            name: "астрахань",
            _id: "641037eb5c49ea004632ee70"
        },
        datetime: 1689861447,
        railway_station_name: "Астрахань"
    },
    train: {
        name: "undefined - 63",
        _id: "641037f05c49ea004632f81f"
    },
    _id: "64103b2f5c49ea0046358ef8"
},
  searchParams: {},
  seats: [],
  filters: {
    have_first_class: false,
    have_second_class: false,
    have_third_class: false,
    have_fourth_class: false,
    have_wifi: false,
    have_air_conditioning: false,
  },
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

export const getSeats = createAsyncThunk(
  'seats',
  async function (routeId, { getState, fulfillWithValue, rejectWithValue }) {
    const {trains} = getState();
    let stringFilters = '?';
    for (let key in trains.filters) {
      if(trains.filters[key]) {
        stringFilters += key + '=' + trains.filters[key] + '&';
      }
    }
    try {
      const data = await api.getRouteSeats(routeId, stringFilters);
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
    setFilter(state, action) {
      state.filters[action.payload] = !state.filters[action.filter];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTrains.fulfilled, (state, action) => {
      state.trains = action.payload.items ?? [];
      state.total = action.payload.total;
    });

    builder.addCase(getSeats.fulfilled, (state, action) => {
      state.seats = action.payload.items ?? [];
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

export const { setCity, setDate, setFilter } = trains.actions;
export default trains.reducer;
