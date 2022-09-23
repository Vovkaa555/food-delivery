import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchFoods } from './asyncActions';
import { FoodItem, FoodSliceState, SearchFoodsParams, Status } from './types';

const initialState: FoodSliceState = {
  status: Status.LOADING,
  items: [],
};

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

export const { setItems } = foodsSlice.actions;

export default foodsSlice.reducer;
