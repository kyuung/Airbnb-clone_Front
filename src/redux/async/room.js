import { createAsyncThunk } from '@reduxjs/toolkit'
import { getRoomList } from '../../Shared/api/roomApi'
//import { history } from '../configureStore'

export const getRoomListDB = createAsyncThunk(
  'room/getList',
  async (data, thunkAPI) => {
    try {
      const params = 'page=1'
      const response = await getRoomList(params)
      console.log('response', response)
      if (response) {
        return response.data
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err)
    }
  }
)
