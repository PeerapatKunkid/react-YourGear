import React from "react";
import { useParams,Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./PageContent.css";
import axios from "axios";
import model from "./Model/Model_mouse.json";
import { v4 as uuidv4 } from "uuid";
import { add,remove } from "../redux/compareDetailSlice";
import { useDispatch } from "react-redux";
function PageContentMouse({ type }) {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const [post, setPost] = useState(model);
  const [mouse,setMouse] = useState("");
  const [spec,setSpec] = useState("");
  function clear() {
    dispatch(remove());
    // history.goBack()
  }


  async function getPost(postId) {
    axios.get(`http://localhost:3001/products/${type}/?item=${postId}`).then((response) => {
      setPost(response.data.data);
      setSpec(response.data.spec);
    });
  }

  useEffect(() => {
    getPost(postId);
    
  }, [postId]);
  // {console.log(postId)}
  {console.log(spec)}
  return (
    <div class="content-show">
      <h1>{post.name}</h1>

      <div class="content-show-in">
        <img
          src={
            post.advice[0]
              ? post.advice[0].data[0].image
              : post.banana[0]
              ? post.banana[0].data[0].image
              : post.mercular[0]
              ? post.mercular[0].data[0].image
              : ""
          }
          height="450"
          width="450"
        ></img>
      </div>
        {console.log(post)}
      <div>
        <div className="content-price-store">
          <h1>WHERE TO GET</h1>
          {post.advice[0] && <h3 className="container ">Advice</h3>}
          {post.advice[0] &&
            post.advice[0].data.map((item) => {
              return (
                <div key={uuidv4()}>
                  <table className="table-storelist">
                    <tr>
                      <td>
                        <h2>{item.name}</h2>
                      </td>
                      <td>
                        <h2>
                        <a href={item.href} target="_blank">{item.price} </a> THB
                        </h2>
                      </td>
                    </tr>
                  </table>
                </div>
              );
            })}

          {post.banana[0] && <h3 className="container ">Banana</h3>}
          {post.banana[0] &&
            post.banana[0].data.map((item) => {
              return (
                <div key={uuidv4()}>
                  <table className="table-storelist">
                    <tr>
                      <td>
                        <h2>{item.name}</h2>
                      </td>
                      <td>
                        <h2>
                          <a href={item.href}target="_blank">{item.price} </a> BATH
                        </h2>
                      </td>
                    </tr>
                  </table>
                </div>
              );
            })}

          {post.mercular[0] && <h3 className="container ">Mercular</h3>}
          {post.mercular[0] &&
            post.mercular[0].data.map((item) => {
              return (
                <div key={uuidv4()}>
                  <table className="table-storelist">
                    <tr>
                      <td>
                        <h2>{item.name}</h2>
                      </td>
                      <td>
                        <h2>
                          <a href={item.href}target="_blank">{item.price} </a> BATH
                        </h2>
                      </td>
                    </tr>
                  </table>
                </div>
              );
            })}
        </div>
      </div>


      
      <div className="content-price-store">
      <h1>DETAIL<button
            onClick={(e) => {
              setMouse({
                title: post.name,
                pic: post.advice[0]
                  ? post.advice[0].data[0].image
                  : post.banana[0]
                  ? post.banana[0].data[0].image
                  : post.mercular[0]
                  ? post.mercular[0].data[0].image
                  : "",
                name: post.name,
                url: post.advice[0]
                  ? post.advice[0].data[0].image
                  : post.banana[0]
                  ? post.banana[0].data[0].image
                  : post.mercular[0]
                  ? post.mercular[0].data[0].image
                  : "",
                spec: {
                  interface: spec.interface
                    ? spec.interface
                    : "N/A",
                  sensor: spec.sensor
                    ? spec.sensor
                    : "N/A",
                  macro:spec.macro
                    ? spec.macro
                    : "N/A",
                    dpi: spec.dpi
                    ? spec.dpi
                    : "N/A",
                    switch: spec.switch
                    ? spec.switch
                    : "N/A",
                  
                },
              });
              dispatch(add({ items: mouse }));
            }}
            className="bt-compare"
          >
            Compare
          </button></h1>
          <h4>Specification</h4>
          
          
          
                <div key={uuidv4()}>
                  <table className="table-detailspec" >
                    <tr>
                      <td>
                        <h2>INTERFACE</h2>
                      </td>
                      <td>
                        <h2>
                        <h2>{spec.interface ? spec.interface:"N/A"}</h2>
                        </h2>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>SENSOR</h2>
                      </td>
                      <td>
                        <h2>
                        <h2>{spec.sensor ? spec.sensor:"N/A"}</h2>
                        </h2>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>MACRO</h2>
                      </td>
                      <td>
                        <h2>
                        <h2>{spec.macro ? spec.macro:"N/A"}</h2>
                        </h2>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>DPI</h2>
                      </td>
                      <td>
                        <h2>
                        <h2>{spec.dpi ? spec.dpi:"N/A"}</h2>
                        </h2>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>SWITCH</h2>
                      </td>
                      <td>
                        <h2>
                        <h2>{spec.switch_type ? spec.switch_type:"N/A"}</h2>
                        </h2>
                      </td>
                    </tr>
                    
                  </table>
                </div>
              
            
      
          </div>
    
    
    
    </div>
  );
}
export default PageContentMouse;
