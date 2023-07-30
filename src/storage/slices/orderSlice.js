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
    route_direction_id: '64103b2f5c49ea0046358ef8',
    seats: [
      {
        coach_id: '641037ec5c49ea004632f165',
        person_info: {
          is_adult: true,
          first_name: 'Андрей',
          last_name: 'Каптурин',
          patronymic: 'Алексеевич',
          gender: true,
          birthday: 'string',
          document_type: 'string',
          document_data: 'string',
        },
        seat_number: 23,
        is_child: false,
        include_children_seat: true,
      },
      {
        coach_id: '641037ec5c49ea004632f165',
        person_info: {
          is_adult: false,
          first_name: 'Андрей',
          last_name: 'Каптурин',
          patronymic: 'Алексеевич',
          gender: true,
          birthday: 'string',
          document_type: 'string',
          document_data: 'string',
        },
        seat_number: 22,
        is_child: true,
        include_children_seat: false,
      },
    ],
  },
  arrival: {
    route_direction_id: '64103b2f5c49ea0046358ef8',
    seats: [
      {
        coach_id: '641037ec5c49ea004632f165',
        person_info: {
          is_adult: true,
          first_name: 'Андрей',
          last_name: 'Каптурин',
          patronymic: 'Алексеевич',
          gender: true,
          birthday: 'string',
          document_type: 'string',
          document_data: 'string',
        },
        seat_number: 23,
        is_child: false,
        include_children_seat: true,
      },
      {
        coach_id: '641037ec5c49ea004632f165',
        person_info: {
          is_adult: false,
          first_name: 'Андрей',
          last_name: 'Каптурин',
          patronymic: 'Алексеевич',
          gender: true,
          birthday: 'string',
          document_type: 'string',
          document_data: 'string',
        },
        seat_number: 22,
        is_child: true,
        include_children_seat: false,
      },
    ],
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
  },
});

export const { setUser, setOrderNumber } = order.actions;
export default order.reducer;
