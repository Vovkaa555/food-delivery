import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FoodItem, SearchFoodsParams } from "./types";

export const fetchFoods = createAsyncThunk<FoodItem[], SearchFoodsParams>('foods/fetchFoodsStatus', 
async (params) => {
  const { search, category, sortBy, order, currentPage } = params;
  const { data } = await axios.get<FoodItem[]>(
    `https://62cc4d598042b16aa7cd0883.mockapi.io/food?${category}&page=${currentPage}&limit=10${search}&sortBy=${sortBy}&order=${order}`,
  );
  return data;
});