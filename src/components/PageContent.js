import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./PageContent.css";
import axios from "axios";
import model from "./compareModel.json";
import { v4 as uuidv4 } from "uuid";

function PageContent({type}) {
  const { postId } = useParams();
  const [post,setPost] = useState(model);
  
  
  

  async function getPost(postId) {
    axios.get(`http://localhost:3001/${type}/1/${postId}`).then((response) => {
      setPost(response.data);
    });
  }
 

  useEffect(() => {
    getPost(postId);
  }, [postId]);

  return (
    <div class="content-show">
      <h1>{post.name}</h1>

     
      <div class="content-show-in">
        <img src={
                              post.advice[0]
                                ? post.advice[0].data[0].image
                                : post.banana[0]
                                ? post.banana[0].data[0].image
                                : post.mercular[0]
                                ? post.mercular[0].data[0].image
                                : ""
                            } height="450" width="450" ></img>
      </div>

      <div>
      <div className="container">
        
      </div>
      <div className="alert alert-warning text-primary">
        

        {post.advice[0] && <h3 className="container ">Advice</h3>}
        {post.advice[0] &&
          post.advice[0].data.map((item) => {
            return (
              <div key={uuidv4()}>
                <p>
                  {item.name} ฿
                  <span>
                    <a href={item.href}>{item.price}</a>
                  </span>
                </p>
              </div>
            );
          })}

        {post.banana[0] && <h3 className="container ">Banana</h3>}
        {post.banana[0] &&
          post.banana[0].data.map((item) => {
            return (
              <div key={uuidv4()}>
                <p>
                  {item.name} ฿
                  <span>
                    <a href={item.href}>{item.price}</a>
                  </span>
                </p>
              </div>
            );
          })}

        {post.mercular[0] && <h3 className="container ">Mercular</h3>}
        {post.mercular[0] &&
          post.mercular[0].data.map((item) => {
            return (
              <div key={uuidv4()}>
                <p>
                  {item.name} ฿
                  <span>
                    <a href={item.href}>{item.price}</a>
                  </span>
                </p>
              </div>
            );
          })}
      </div>
    </div>
    </div>
  );
}
export default PageContent;
