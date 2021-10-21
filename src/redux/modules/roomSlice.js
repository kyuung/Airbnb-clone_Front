import { createSlice } from '@reduxjs/toolkit'
import { getRoomListDB } from '../async/room'

/* init */
const initialState = {
  list: [],
  isFetching: false,
  errorMessage: null,
}

const roomSlice = createSlice({
  name: 'room',
  initialState: initialState,
  reducers: {
    setRoomListReducer: (state, { payload }) => {
      state.list = payload
    },
  },
  /* 외부 작업을 참조(e.g 비동기 처리) */
  extraReducers: {
    /* Fulfilled(이행) 비동기 처리 완료 */
    [getRoomListDB.fulfilled]: (state, { payload }) => {
      console.log('payload', payload)
      state.list = payload.rooms
      state.isFetching = false
    },
    /* Pending(대기) */
    [getRoomListDB.pending]: (state, { payload }) => {
      state.isFetching = true
    },
    /* Rejected(실패) */
    [getRoomListDB.rejected]: (state, { payload: errorMessage }) => {
      state.isFetching = false
      state.errorMessage = errorMessage
    },
  },
})

export const { roomAction } = roomSlice.actions

export default roomSlice
