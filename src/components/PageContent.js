import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./PageContent.css";
import axios from "axios";

function PageContent() {
  const { index } = useParams();

  const [mouse, setMouse] = useState([]);

  async function getAllMouses() {
    const res = await axios.get(`http://localhost:3001/allMouse/1/${index}`);
    const data = await res.data;
    
    setMouse(data);
  }

  useEffect(async() => {
    await getAllMouses();
  }, []);

  
  return (
    <div class="content-show">
      <h1>{mouse.name}</h1>
      
      {/* {console.log(mouse.category)} */}
      <div class="content-show-in">
          {mouse &&
          
              <div>
                  <img src={mouse ? mouse.banana[0].data[0].image:""} width="400" height="400"></img>
              </div>
           }
        
        
      </div>

      <h3>TEST TEST TEST </h3>
      <h3>TTTTTTT</h3>
    </div>
  );
}
export default PageContent;
