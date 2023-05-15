/* eslint-disable object-curly-newline */
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import todosReducer from './todo';
import dog from './dog';
import facts from './facts';
import ipFinder from './ipFinder';
import weather from './weather';

export const store = configureStore({
  reducer: { todo: todosReducer, dog, facts, ipFinder, weather },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
