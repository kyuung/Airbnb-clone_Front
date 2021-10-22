import { createAsyncThunk } from '@reduxjs/toolkit'
import { getRoomList } from '../../Shared/api/roomApi'
//import { history } from '../configureStore'

export const getRoomListDB = createAsyncThunk(
  'room/getList',
  async (data, thunkAPI) => {
    try {
      const params = data
      const response = await getRoomList(params)
      if (response) {
        return response.data
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err)
    }
  }
)
