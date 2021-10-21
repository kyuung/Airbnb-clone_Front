import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDetailRoomList } from '../../Shared/api/roomApi';

export const getDetailRoomListDB = createAsyncThunk(
	'detailRoom/getDetail',
	async (data, thunkAPI) => {
		try {
			const response = await getDetailRoomList();
			if (response) {
				return response;
			}
		} catch (err) {
			return thunkAPI.rejectWithValue(err);
		}
	}
);
