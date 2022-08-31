import axios from 'axios';

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type FoodItem = {
  id: string;
  type: string;
  image: string; 
  title: string; 
  price: number;
  description: string;
  weight: number;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface FoodSliceState {
  items: FoodItem[];
  status: Status;
}

const initialState: FoodSliceState = {
  status: Status.LOADING,
  items: [],
};

export type SearchFoodsParams = {
  search: string, category: string, sortBy: string, order: string, currentPage: string,

}

export const fetchFoods = createAsyncThunk<FoodItem[], SearchFoodsParams>('foods/fetchFoodsStatus', 
async (params) => {
  const { search, category, sortBy, order, currentPage } = params;
  const { data } = await axios.get<FoodItem[]>(
    `https://62cc4d598042b16aa7cd0883.mockapi.io/food?${category}&page=${currentPage}&limit=10${search}&sortBy=${sortBy}&order=${order}`,
  );
  return data;
});

const foodsSlice = createSlice({
  name: 'foods',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<FoodItem[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
  builder.addCase(fetchFoods.pending, (state, action) => {
    state.status = Status.LOADING;
    state.items = [];
  });
  builder.addCase(fetchFoods.fulfilled, (state, action) => {
    state.items = action.payload;
    state.status = Status.SUCCESS;
  });
  builder.addCase(fetchFoods.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
  })
}
});

export const selectFoodData = (state: RootState) => state.foods;

export const { setItems } = foodsSlice.actions;

export default foodsSlice.reducer;
