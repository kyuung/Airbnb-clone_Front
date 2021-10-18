import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'
import { takeEvery, call, put, all, delay } from 'redux-saga/effects'

/* Action Type */
const INCREASE = 'INCREASE'

const increase = createAction(INCREASE, num => num)

/* init */
const initialState = {
  count: 0,
}

/* TODO saga*/
export function* callFB(action) {
  yield delay(1000)
  console.log('호출안했는디')
  const num = action.num
  yield put({
    type: INCREASE,
    num: num,
  })
}

export function* counterSaga() {
  console.log('counterSaga')
  yield takeEvery(INCREASE, callFB)
}

export default handleActions(
  {
    [INCREASE]: (PrevState, action) => {
      console.log('increase', action.payload)
      const newCount = PrevState.count + action.payload
      return { ...PrevState, count: newCount }
    },
  },
  initialState
)

const actionCreators = {
  increase,
}

export { actionCreators }
