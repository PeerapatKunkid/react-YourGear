import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/userSlice";
import "./AppBanner.css";
function ShowDetails() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.name);
  console.log(`from show details => ${user}`);

  function logout() {
    dispatch(remove());
  }
  
  return (
    <div>
      <span><table>
          <tr>
        <td><div className="lgfb">{user}</div></td>
        
        <td><div className="lgfb" onClick={logout}>{user ? "Logout" : ""}</div></td> 
        </tr>
        </table>
      </span>
    </div>
  );
}

export default ShowDetails;
