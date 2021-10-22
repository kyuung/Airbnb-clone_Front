import { createAsyncThunk } from '@reduxjs/toolkit'
import { postLogin } from '../../Shared/api/userApi'

export const postUserLoginDB = createAsyncThunk(
  'user/login',
  async (data, thunkAPI) => {
    try {
      const params = data
      console.log('params', params)
      const response = await postLogin(params)
      console.log('res', response)
      if (response) {
        return response.data
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err)
    }
  }
)
