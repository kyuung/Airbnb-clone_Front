import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRoomList } from '../../Shared/api/roomApi';
//import { history } from '../configureStore'

export const getRoomListDB = createAsyncThunk(
	'room/getList',
	async (data, thunkAPI) => {
		try {
			const response = await getRoomList();
			if (response) {
				return response;
			}
		} catch (err) {
			return thunkAPI.rejectWithValue(err);
		}
	}
);
