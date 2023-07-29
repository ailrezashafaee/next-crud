import { configureStore } from '@reduxjs/toolkit';
import postReducer from './features/post-slise';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const reducer = {
    posts : postReducer
};
export const store = configureStore({
    reducer : reducer,
    devTools:true
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;