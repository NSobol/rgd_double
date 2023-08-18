// initial state ----------------------------------------------------
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  order_number: '',
  order_sum: 0,
  user: {
    first_name: '',
    last_name: '',
    patronymic: '',
    phone: '',
    email: '',
    payment_method: '',
  },
  departure: {
    route_direction_id: '',
    seats: [],
  },
  arrival: {
    route_direction_id: '',
    seats: [],
  },
};

const order = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setOrderNumber(state, action) {
      state.order_number = action.payload;
    },
    setOrderPrice(state, action) {
      state.order_sum = action.payload;
    },
    setSeatsInfo(state, { payload }) {
      state.departure.route_direction_id = payload.currentRoute.departure._id;
      state.departure.seats = payload.departureSeats;
      if (payload.currentRoute.arrival) {
        state.arrival.route_direction_id = payload.currentRoute.arrival._id;
        state.arrival.seats = payload.arrivalSeats;
      }
    },
    setPersonInfo(state, { payload }) {
      state.departure.seats[payload.i].person_info = { ...payload.data };
    },
  },
});

export const { setUser, setOrderNumber, setOrderPrice, setSeatsInfo, setPersonInfo } =
  order.actions;
export default order.reducer;
