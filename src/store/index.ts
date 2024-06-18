import {
	PayloadAction,
	ThunkAction,
	ThunkDispatch,
	configureStore,
} from '@reduxjs/toolkit';
import createReducer from './root-slice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const preloadedState = {};

const store = configureStore({
	reducer: createReducer(),
	preloadedState,
});

export type StoreState = ReturnType<typeof store.getState>;
export type ReduxState = ReturnType<typeof createReducer>;
export type StoreDispatch = typeof store.dispatch;
export type TypeDispatch = ThunkDispatch<ReduxState, any, PayloadAction>;
export type TypeThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	ReduxState,
	unknown,
	PayloadAction
>;

export const useAppDispatch = () => useDispatch<TypeDispatch>();
export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector

export default store;
