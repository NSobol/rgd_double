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
    setSelectedSeat(state, {payload}) {
      if (state[payload.direction].seats.find(seat => seat.coach_id === payload.seat.coach_id && seat.seat_number === payload.seat.seat_number)) {
        state[payload.direction].seats = state[payload.direction].seats.filter(seat => seat.seat_number !== payload.seat.seat_number || seat.coach_id !== payload.seat.coach_id)
      } else {
        state[payload.direction].seats.push(payload.seat)
      }
    },
    setRouteDirectionId(state, {payload}){
      state.departure.route_direction_id = payload.departure._id
      if (payload.arrival) {
        state.arrival.route_direction_id = payload.arrival._id
      }
    },
    resetSelectedSeats(state, {payload}){
      state[payload.direction].seats = state[payload.direction].seats.filter(seat => seat.coach_id !== payload.coach_id)
    }
  },
});

export const { setUser, setOrderNumber, setRouteDirectionId, setSelectedSeat, resetSelectedSeats } = order.actions;
export default order.reducer;
