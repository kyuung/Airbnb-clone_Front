import { createSlice } from '@reduxjs/toolkit';
import { createReviewDB } from '../async/detailRoom';
import { deleteReviewDB } from '../async/review';

/* init */
const initialState = {
	review: {},
};

const reviewSlice = createSlice({
	name: 'createReview',
	initialState: initialState,
	reducers: {},

	extraReducers: {
		[createReviewDB.fulfilled]: (state, { payload }) => {
			// state.detailRoom.list.room.review =
			// 	state.detailRoom.list.room.review.push(payload.data);
			console.log('<<', payload.data);
			state.isFetching = false;
		},
		[createReviewDB.pending]: (state, { payload }) => {
			state.isFetching = true;
		},
		[createReviewDB.rejected]: (state, { payload: errorMessage }) => {
			state.isFetching = false;
			state.errorMessage = errorMessage;
		},
		[deleteReviewDB.fulfilled]: (state, { payload }) => {
			// state.detailRoom.list.room.review =
			// 	state.detailRoom.list.room.review.push(payload.data);
			console.log('<<<<', payload.data);
			state.isFetching = false;
		},
		[deleteReviewDB.pending]: (state, { payload }) => {
			state.isFetching = true;
		},
		[deleteReviewDB.rejected]: (state, { payload: errorMessage }) => {
			state.isFetching = false;
			state.errorMessage = errorMessage;
		},
	},
});

export const { createReview } = reviewSlice.actions;

export default reviewSlice;
