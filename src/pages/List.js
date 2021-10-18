import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreators as counterAction } from '../redux/modules/counter'

const List = () => {
  const dispatch = useDispatch()
  const Number = useSelector(state => state.counter.count)
  const btnClick = () => {
    dispatch(counterAction.increase(1))
  }
  React.useEffect(() => {})
  return (
    <>
      <h2>List 페이지</h2>
      <h2>{('number :', Number)}</h2>
      <button
        onClick={() => {
          btnClick()
        }}
      >
        버튼!
      </button>
    </>
  )
}

export default List
