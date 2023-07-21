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
    have_first_class: false,
    have_second_class: false,
    have_third_class: false,
    have_fourth_class: false,
    have_wifi: false,
    have_air_conditioning: false,
    is_express: false,
    min_price: 2965,
    available_seats: 66,
    available_seats_info: {
        first: 18,
        third: 48
    },
    departure: {
        _id: "641038ea5c49ea004633be61",
        have_first_class: true,
        have_second_class: false,
        have_third_class: true,
        have_fourth_class: false,
        have_wifi: false,
        have_air_conditioning: true,
        is_express: false,
        min_price: 2965,
        // в секуднах
        // duration: 216720,
        duration: 213120,
        available_seats: 66,
        available_seats_info: {
            first: 18,
            third: 48
        },
        train: {
            _id: "641037f05c49ea004632f875",
            name: "Тройка - 16"
        },
        from: {
            railway_station_name: "Курский",
            city: {
                _id: "641037eb5c49ea004632ee6e",
                name: "москва"
            },
            datetime: 1689913186
        },
        to: {
            railway_station_name: "Адлер",
            city: {
                _id: "641037eb5c49ea004632ee72",
                name: "адлер"
            },
            datetime: 1690126306
        },
        price_info: {
            first: {
                price: 4860,
                top_price: 3550,
                bottom_price: 4255
            },
            third: {
                top_price: 4480,
                bottom_price: 2965,
                side_price: 4045
            }
        }
    }
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
