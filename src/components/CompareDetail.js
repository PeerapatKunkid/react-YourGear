import { useSelector } from "react-redux";

import React, { useState, useEffect, Component, sort } from "react";
import { remove } from "../redux/compareDetailSlice";
import { useDispatch } from "react-redux";
import "./CompareDetail.css";
import { createHashHistory } from 'history'
import { Link } from "react-router-dom";

export default function CompareDetail() {
  const compareDetail = useSelector((state) => state.compare);
  const history = createHashHistory()
  const dispatch = useDispatch();
  const [detail , setDetail] = useState("")
  const speclist = Object.keys(compareDetail.items[1].spec)
  function clear() {
    dispatch(remove());
    // history.goBack()
  }
  return (
    <div class="content-compare">
      <h1 class="title-compare">COMPARE</h1>
      <div className="compare-clear"><Link to="/products/Headset"><p onClick={clear} >CLEAR</p></Link></div>
      
      <table className="img-compare">
        <tr>
          <th width="400px" >
            
          </th>
          <th width="450px">
          <a href={compareDetail.items[1].url} target="_blank">
                        
                          
            <img  classname="img-compareshow" margin="auto" width="300px" hight="300px" src={compareDetail.items[1].pic ? compareDetail.items[1].pic:"N/A"}></img>
            </a>
          </th>
          <th>
          <img classname="img-compareshow" margin="auto" width="300px" hight="300px" src={compareDetail.items[3].pic ? compareDetail.items[3].pic:"N/A"}></img>
          </th>
        </tr>

        <tr>
          <th></th>
          <th><div className="name-compare">{compareDetail.items[1].name ? compareDetail.items[1].name : "N/A"}</div></th>
          <th><div className="name-compare">{compareDetail.items[3].name ? compareDetail.items[3].name : "N/A"}</div></th>
        </tr>
        </table>
        {speclist.map((items)=>{
          return (
            <div >
              <table className="spec-compare">
              <tr>
          <th width="400px" >
            
          </th>
          <th width="450px">
          <a href={compareDetail.items[1].url} target="_blank">
                        
                          
            <img  classname="img-compareshow" width="0px" hight="300px" src={compareDetail.items[1].pic ? compareDetail.items[1].pic:"N/A"}></img>
            </a>
          </th>
          <th>
          <img classname="img-compareshow"  width="0px" hight="300px" src={compareDetail.items[3].pic ? compareDetail.items[3].pic:"N/A"}></img>
          </th>
        </tr>
              <tr>
          <th><div class="type-compare">{items}</div></th>
         
          <th >{compareDetail.items[1].spec[items] ? compareDetail.items[1].spec[items] : "N/A"}</th>
          <th >{compareDetail.items[3].spec[items] ? compareDetail.items[3].spec[items] : "N/A"}</th>
        </tr>
        </table>
            </div>
          )
        })}
        
      
        
     <div className="empty">s</div>
      
      
      
      
    </div>
  );
}

