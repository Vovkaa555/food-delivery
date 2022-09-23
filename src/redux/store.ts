import { configureStore } from '@reduxjs/toolkit';
import filter from './filter/slice';
import cart from './cart/slice';
import foods from './foods/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: { filter, cart, foods },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
})
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()
