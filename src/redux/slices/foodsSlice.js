import axios from 'axios';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFoods = createAsyncThunk('foods/fetchFoodsStatus', async (params, thunkAPI) => {
  const { search, category, sortBy, order, currentPage } = params;
  const { data } = await axios.get(
    `https://62cc4d598042b16aa7cd0883.mockapi.io/food?${category}&page=${currentPage}&limit=10${search}&sortBy=${sortBy}&order=${order}`,
  );
  return data;
});

const initialState = {
  status: 'loading', //loading | success | error
  items: [],
  pageCount: 6,
};

const foodsSlice = createSlice({
  name: 'foods',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    setPageCounter(state, action) {
      state.pageCount = action.payload;
    },
  },
  extraReducers: {
    [fetchFoods.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchFoods.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchFoods.rejected]: (state, action) => {
      console.log(action, 'rejected');
      state.status = 'error';
      state.items = [];
    },
  },
});

export const selectFoodData = (state) => state.foods;

export const { setItems } = foodsSlice.actions;

export default foodsSlice.reducer;
