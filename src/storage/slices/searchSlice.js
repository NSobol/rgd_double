// initial state ----------------------------------------------------
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  from_city_name: '',
  to_city_name: '',
  date_start: '',
  date_end: '',
  from_city_id: '641037eb5c49ea004632eee3',
  to_city_id: '641037eb5c49ea004632ee6e',
};

const search = createSlice({
  name: 'search',
  initialState,
  reducers: {},
});




export default search.reducer;
