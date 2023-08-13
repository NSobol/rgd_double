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
    setSeatsInfo(state, {payload}){
      state.departure.route_direction_id = payload.currentRoute.departure._id
      state.departure.seats = payload.departure.seats
      if (payload.currentRoute.arrival) {
        state.arrival.route_direction_id = payload.currentRoute.arrival._id
        state.arrival.seats = payload.arrival.seats
      }
    },
  },
});

export const { setUser, setOrderNumber, setSeatsInfo } = order.actions;
export default order.reducer;
