import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseCount } from '../redux/modules/counter'

const Test = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.count)

  const CountUp = () => {
    dispatch(increaseCount())
  }
  return (
    <>
      <h2>Test페이지</h2>
      <h2>{counter}</h2>
      <button onClick={CountUp}>버튼클릭</button>
    </>
  )
}

export default Test
