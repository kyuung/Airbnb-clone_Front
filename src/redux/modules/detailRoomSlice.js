import { createSlice } from '@reduxjs/toolkit';
import { getDetailRoomListDB } from '../async/detailRoom';

/* init */
const initialState = {
	list: [],
	isFetching: false,
	errorMessage: null,
};

const detailRoomSlice = createSlice({
	name: 'detailRoom',
	initialState: initialState,
	reducers: {
		setDetailRoomReducer: (state, { payload }) => {
			state.list = payload;
		},
	},

	extraReducers: {
		[getDetailRoomListDB.fulfilled]: (state, { payload }) => {
			state.list = payload.data;
			state.isFetching = false;
		},
		[getDetailRoomListDB.pending]: (state, { payload }) => {
			state.isFetching = true;
		},
		[getDetailRoomListDB.rejected]: (state, { payload: errorMessage }) => {
			state.isFetching = false;
			state.errorMessage = errorMessage;
		},
	},
});

export const { detailRoomAction } = detailRoomSlice.actions;

export default detailRoomSlice;
