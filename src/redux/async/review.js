import { createAsyncThunk } from '@reduxjs/toolkit';
import { createReview, deleteReview } from '../../Shared/api/reviewApi';

export const createReviewDB = createAsyncThunk(
	'review/createReview',
	async (data, thunkAPI) => {
		try {
			const response = await createReview(data);
			if (response) {
				return response;
			}
		} catch (err) {
			return thunkAPI.rejectWithValue('<<', err);
		}
	}
);

export const deleteReviewDB = createAsyncThunk(
	'review/deleteReview',
	async (data, thunkAPI) => {
		try {
			const response = await deleteReview(data);
			if (response) {
				return response;
			}
		} catch (err) {
			return thunkAPI.rejectWithValue('<<', err);
		}
	}
);
