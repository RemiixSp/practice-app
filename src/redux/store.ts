import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import todosReducer from './todo';
import dog from './dog';
import facts from './facts';
import ipFinder from './ipFinder';
import weather from './weather';
import bored from './bored';
import authorization from './authorization';

export const store = configureStore({
  reducer: {
    todo: todosReducer,
    dog,
    facts,
    ipFinder,
    weather,
    bored,
    authorization,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
