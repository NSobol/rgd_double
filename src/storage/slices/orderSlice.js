// initial state ----------------------------------------------------
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  "user": {
    "first_name": "Андрей",
    "last_name": "Каптурин",
    "patronymic": "Алексеевич",
    "phone": "89999999999",
    "email": "test@mail.ru",
    "payment_method": "cash"
  },
  "departure": {
    "route_direction_id": "64103b2f5c49ea0046358ef8",
    "seats": [
      {
        "coach_id": "641037ec5c49ea004632f165",
        "person_info": {
          "is_adult": true,
          "first_name": "Андрей",
          "last_name": "Каптурин",
          "patronymic": "Алексеевич",
          "gender": true,
          "birthday": "string",
          "document_type": "string",
          "document_data": "string"
        },
        "seat_number": 23,
        "is_child": false,
        "include_children_seat": true
      },
      {
        "coach_id": "641037ec5c49ea004632f165",
        "person_info": {
          "is_adult": false,
          "first_name": "Андрей",
          "last_name": "Каптурин",
          "patronymic": "Алексеевич",
          "gender": true,
          "birthday": "string",
          "document_type": "string",
          "document_data": "string"
        },
        "seat_number": 22,
        "is_child": true,
        "include_children_seat": false
      }
    ]
  },
  "arrival": {
    "route_direction_id": "64103b2f5c49ea0046358ef8",
    "seats": [
      {
        "coach_id": "641037ec5c49ea004632f165",
        "person_info": {
          "is_adult": true,
          "first_name": "Андрей",
          "last_name": "Каптурин",
          "patronymic": "Алексеевич",
          "gender": true,
          "birthday": "string",
          "document_type": "string",
          "document_data": "string"
        },
        "seat_number": 23,
        "is_child": false,
        "include_children_seat": true
      },
      {
        "coach_id": "641037ec5c49ea004632f165",
        "person_info": {
          "is_adult": false,
          "first_name": "Андрей",
          "last_name": "Каптурин",
          "patronymic": "Алексеевич",
          "gender": true,
          "birthday": "string",
          "document_type": "string",
          "document_data": "string"
        },
        "seat_number": 22,
        "is_child": true,
        "include_children_seat": false
      }
    ]
  }
};

const order = createSlice({
  name: 'order',
  initialState,
  reducers: {},
});

export default order.reducer;
