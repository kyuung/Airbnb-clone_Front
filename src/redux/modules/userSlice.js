import { createSlice } from '@reduxjs/toolkit'
import { postUserLoginDB } from '../async/user'

/* init */
const initialState = {
  isLogin: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [postUserLoginDB.fulfilled]: (state, { payload }) => {
      if (payload.result) {
        state.isLogin = true
        localStorage.setItem('token', payload.token)
        window.alert('로그인을 완료하였습니다.')
      }
      console.log(payload)
    },
    [postUserLoginDB.pending]: (state, { payload }) => {
      state.isFetching = true
    },
    /* Rejected(실패) */
    [postUserLoginDB.rejected]: (state, { payload: errorMessage }) => {
      state.isFetching = false
      state.errorMessage = errorMessage
    },
  },
})

export default userSlice
