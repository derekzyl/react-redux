import React from "react";
import { useDispatch, useSelector } from "react-redux";
import{ buyCake} from '../redux'

function HooksCakeContainer() {
  const numOfCake = useSelector(state => state.cake.numOfCake);
  const dispatch = useDispatch()
  return (
    <div>
      <h1>numOfCake - {numOfCake}</h1>
      <button onClick={()=>dispatch(buyCake())} >buyCake</button>
    </div>
  );
}

export default HooksCakeContainer;
