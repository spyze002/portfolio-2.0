'use client'

import { useDispatch, useSelector } from "react-redux";
import { increment } from "./state/counter/counterSlice";
import { RootState } from "./state/store";



const page = () => {

  const count = useSelector ((state: RootState) => state.counter.value)
  const dispatch = useDispatch();
  return (
    <div>
      Number: { count }
      <br />
      <button onClick={()=> dispatch(increment())}> add value</button>
    </div>
  )
}

export default page