import { useSelector } from "react-redux";
import React from 'react'
import { remove } from "../redux/compareDetailSlice";
import { useDispatch } from "react-redux";
export default function CompareDetail() {
  const compareDetail = useSelector((state) => state.compare);
  const dispatch = useDispatch();
  function clear() {
    dispatch(remove());
  }
  return (
    <div>
      <p>detail</p>
        {console.log("test"+compareDetail.headset)}
      <p>HEADSET : {compareDetail.headset.name}</p>
      <p>HEADSET : {compareDetail.headset.advice}</p>
      <p onClick={clear}>remove</p>

      
    </div>
  );
}

