import { useSelector } from "react-redux";
import React from 'react'
import { remove } from "../redux/compareDetailSlice";
import { useDispatch } from "react-redux";
import "./CompareDetail.css";
import { createHashHistory } from 'history'
import { Link } from "react-router-dom";

export default function CompareDetail() {
  const compareDetail = useSelector((state) => state.compare);
  const history = createHashHistory()
  const dispatch = useDispatch();
  function clear() {
    dispatch(remove());
    // history.goBack()
  }
  return (
    <div class="content-compare">
      <h1 class="title-compare">COMPARE</h1>

      <table className="img-compare">
        <tr>
          <th width="400px" >
            
          </th>
          <th width="450px">
            
            <img  classname="img-compareshow" margin="auto" width="300px" hight="300px" src={compareDetail.items[1].pic}></img>
            
          </th>
          <th>
          <img classname="img-compareshow" margin="auto" width="300px" hight="300px" src={compareDetail.items[3].pic}></img>
          </th>
        </tr>

        <tr>
          <th></th>
          <th><div className="name-compare">{compareDetail.items[1].name }</div></th>
          <th><div className="name-compare">{compareDetail.items[3].name }</div></th>
        </tr>
        <tr>
          <th><div class="type-compare">INTERFACE</div></th>
          <th>{compareDetail.items[1].interface }</th>
          <th>{compareDetail.items[3].interface }</th>
        </tr>
        <tr>
          <th><div class="type-compare">TYPE OF</div></th>
          <th>{compareDetail.items[1].type_of }</th>
          <th>{compareDetail.items[3].type_of }</th>
        </tr>
        <tr>
          <th><div class="type-compare">FREQUENCY</div></th>
          <th>{compareDetail.items[1].frequency }</th>
          <th>{compareDetail.items[3].frequency }</th>
        </tr>
        <tr>
          <th><div class="type-compare">IMPENANCE</div></th>
          <th>{compareDetail.items[1].impedance }</th>
          <th>{compareDetail.items[3].impedance }</th>
        </tr>
        <tr>
          <th><div class="type-compare">MICROPHONE</div></th>
          <th>{compareDetail.items[1].microphone }</th>
          <th>{compareDetail.items[3].microphone }</th>
        </tr>
      </table>
        {/* {console.log(compareDetail)} */}
      
     
      <Link to="/products/Headset"><p onClick={clear} >remove</p></Link>
      
      
      
    </div>
  );
}

