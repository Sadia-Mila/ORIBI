import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import  {increment}  from '/src/components/slices/counterSlice'



const Demo = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()


  return (
    <>
        <h2>{count}</h2>
        <button onClick={() => dispatch(increment())}>Click</button>
    </>
  )
}

export default Demo