import { createSlice } from '@reduxjs/toolkit'
import { postUserLoginDB } from '../async/user'

/* init */
const initialState = {
  isLogin: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    userReducer: (state, { payload }) => {
      state.isLogin = payload
    },
  },
  extraReducers: {
    [postUserLoginDB.fulfilled]: (state, { payload }) => {
      if (payload.result) {
        console.log(payload)
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

export const { userReducer } = userSlice.actions
export default userSlice
