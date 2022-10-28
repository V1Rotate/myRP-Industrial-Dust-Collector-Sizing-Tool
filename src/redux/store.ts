import { configureStore } from '@reduxjs/toolkit';
import filter from './filter/slice';
import collectorItem from './collectorItem/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    collectorItem,
    filter,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
