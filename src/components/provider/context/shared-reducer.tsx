import React from 'react';
import { DrawerProps } from 'antd';
import { APP_USER_REDUCER_TYPE } from 'constants/app-use-reducer';

export interface IUseReducerAction {
	type: string;
	payload: any;
}

export interface IContextVal {
	drawer: DrawerProps;
	loading: boolean;
}

export const appReducerState: IContextVal = {
	drawer: {},
	loading: false,
};

const reducer = (state: IContextVal, action: IUseReducerAction) => {
	switch (action.type) {
		case APP_USER_REDUCER_TYPE.isOpenDrawer:
			return { ...state, drawer: { ...state.drawer, open: action.payload } };
		case APP_USER_REDUCER_TYPE.setChildrenDrawer:
			return { ...state, drawer: { ...state.drawer, children: action.payload } };
		case APP_USER_REDUCER_TYPE.isLoading:
			return { ...state, loading: action.payload };
		default:
			return state;
	}
};

export default reducer;

export const setIsOpenDrawer = (payload: boolean) => ({
	type: APP_USER_REDUCER_TYPE.isOpenDrawer,
	payload,
});

export const setChildrenDrawer = (payload: React.ReactNode) => ({
	type: APP_USER_REDUCER_TYPE.setChildrenDrawer,
	payload,
});

export const setIsLoading = (payload: boolean) => ({
	type: APP_USER_REDUCER_TYPE.isLoading,
	payload,
});
