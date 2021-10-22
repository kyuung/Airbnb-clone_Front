import { createSlice } from '@reduxjs/toolkit'
import { getRoomListDB } from '../async/room'

/* init */
const initialState = {
  /* 리스트 관리 */
  list: [],
  paging: { page: 0, totalPage: 15 },
  pageList: [],
  is_loading: false,
  /* 아이콘 focus 지정 */
  focusId: '',
  isFocus: false,
  /* 후속 처리 */
  isFetching: false,
  errorMessage: null,
}

const roomSlice = createSlice({
  name: 'room',
  initialState: initialState,
  reducers: {
    setFocusIdReducer: (state, { payload }) => {
      state.focusId = payload
    },
    setIsFocusReducer: (state, { payload }) => {
      state.isFocus = payload
    },
    setInitPagingReducer: (state, { payload }) => {
      state.list = []
      state.paging = { page: 0, totalpage: 15 }
    },
  },
  /* 외부 작업을 참조(e.g 비동기 처리) */
  extraReducers: {
    /* Fulfilled(이행) 비동기 처리 완료 */
    [getRoomListDB.fulfilled]: (state, { payload }) => {
      state.list = [...state.list, ...payload.rooms]
      state.pageList = payload.rooms
      state.paging = {
        page: state.paging.page + 1,
        totalPage: payload.totalPageCnt,
      }
      state.is_loading = false
      state.isFetching = false
    },
    /* Pending(대기) */
    [getRoomListDB.pending]: (state, { payload }) => {
      state.isFetching = true
      state.is_loading = true
    },
    /* Rejected(실패) */
    [getRoomListDB.rejected]: (state, { payload: errorMessage }) => {
      state.isFetching = false
      state.errorMessage = errorMessage
    },
  },
})

export const {
  setFocusIdReducer,
  setIsFocusReducer,
  setInitPagingReducer,
  roomAction,
} = roomSlice.actions

export default roomSlice
