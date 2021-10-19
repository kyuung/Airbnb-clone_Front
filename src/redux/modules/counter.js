import { createSlice } from '@reduxjs/toolkit'

/* init */
const initialState = {
  count: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increaseCount: state => {
      state.count = state.count + 1
    },
  },
})

export const { increaseCount, discount } = counterSlice.actions

export default counterSlice
