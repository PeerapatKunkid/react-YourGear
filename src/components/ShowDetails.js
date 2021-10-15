import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/userSlice";

function ShowDetails() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.name);
  console.log(`from show details => ${user}`);

  function logout() {
    dispatch(remove());
  }

  return (
    <div>
      <h1>{user}</h1>
      <div onClick={logout}>{user ? "logout" : ""}</div>
    </div>
  );
}

export default ShowDetails;
