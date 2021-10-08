import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./PageContent.css";
import axios from "axios";
import model from "./Model/Model_keyboard.json";
import { v4 as uuidv4 } from "uuid";
function PageContentKeyboard({ type }) {
  const { postId } = useParams();
  const [post, setPost] = useState(model);

  async function getPost(postId) {
    axios.get(`http://localhost:3001/products/${type}/?item=${postId}`).then((response) => {
      setPost(response.data.data);
    });
  }
  
  useEffect(() => {
    getPost(postId);
    
  }, [postId]);
  {console.log(postId)}
  {console.log(post)}
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
                          <a href={item.href}>{item.price} </a> BATH
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
                          <a href={item.href}>{item.price} </a> BATH
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
                          <a href={item.href}>{item.price} </a> BATH
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
          <h1>DETAIL</h1>
          <h4>Specification</h4>
          
          
          {post.banana[0] &&
            post.banana[0].data.map((item) => {
              return (
                <div key={uuidv4()}>
                  <table className="table-detailspec" >
                    <tr>
                      <td>
                        <h2>INTERFACE</h2>
                      </td>
                      <td>
                        <h2>
                        <h2>{item.spec.interface ? item.spec.interface:"N/A"}</h2>
                        </h2>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>SWITCH</h2>
                      </td>
                      <td>
                        <h2>
                        <h2>{item.spec.switch ? item.spec.switch:"N/A"}</h2>
                        </h2>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>LAYOUT</h2>
                      </td>
                      <td>
                        <h2>
                        <h2>{item.spec.layout ? item.spec.layout:"N/A"}</h2>
                        </h2>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>DIMENSION</h2>
                      </td>
                      <td>
                        <h2>
                        <h2>{item.spec.dimension ? item.spec.dimension:"N/A"}</h2>
                        </h2>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>SUPPORT</h2>
                      </td>
                      <td>
                        <h2>
                        <h2>{item.spec.support ? item.spec.support:"N/A"}</h2>
                        </h2>
                      </td>
                    </tr>
                    
                  </table>
                </div>
              );
            })}
      
          </div>
    
    
    
    </div>
  );
}
export default PageContentKeyboard;
