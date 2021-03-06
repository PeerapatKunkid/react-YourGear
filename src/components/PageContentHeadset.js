import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./PageContent.css";
import axios from "axios";
import model from "./Model/Model_headset.json";
import { v4 as uuidv4 } from "uuid";
import { add, remove } from "../redux/compareDetailSlice";
import { useDispatch } from "react-redux";
function PageContentHeadset({ type }) {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const [post, setPost] = useState(model);
  const [headset, setHeadset] = useState("");
  const [spec,setSpec] = useState("");
  {
    console.log(post);
  }
  async function getPost(postId) {
    axios
      .get(`http://localhost:3001/products/${type}/?item=${postId}`)
      .then((response) => {
        setPost(response.data.data);
        setSpec(response.data.spec);
      });
  }

  useEffect(() => {
    getPost(postId);
  }, [postId]);

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
                          <a href={item.href} target="_blank">
                            {item.price}{" "}
                          </a>{" "}
                          THB
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
                          <a href={item.href} target="_blank">
                            {item.price}{" "}
                          </a>{" "}
                          BATH
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
                          <a href={item.href} target="_blank">
                            {item.price}{" "}
                          </a>{" "}
                          BATH
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
        <h1>
          DETAIL
          <button
            onClick={(e) => {
              setHeadset({
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
                  type_of: spec.type_of
                    ? spec.type_of
                    : "N/A",
                  frequency: spec.frequency
                    ? spec.frequency
                    : "N/A",
                  impedance: spec.impedance
                    ? spec.impedance
                    : "N/A",
                  microphone: spec.microphone
                    ? spec.microphone
                    : "N/A",
                },
              });
              dispatch(add({ items: headset }));
            }}
            className="bt-compare"
          >
            Compare
          </button>
        </h1>
        {console.log(post)}
        {console.log(headset)}
        
        
        <h4>Specification</h4>
        {console.log(post)}
        {post.banana[0] &&
          post.banana[0].data.map((item) => {
            return (
              <div key={uuidv4()}>
                <table className="table-detailspec">
                  <tr>
                    <td>
                      <h2>INTERFACE</h2>
                    </td>
                    <td>
                      <h2>
                        <h2>
                          {spec.interface ? spec.interface : "N/A"}
                        </h2>
                      </h2>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2>TYPE OF</h2>
                    </td>
                    <td>
                      <h2>
                        <h2>{spec.type_of ? spec.type_of : "N/A"}</h2>
                      </h2>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2>FREQUENCY</h2>
                    </td>
                    <td>
                      <h2>
                        <h2>
                          {spec.frequency ? spec.frequency : "N/A"}
                        </h2>
                      </h2>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2>IMPEDANCE</h2>
                    </td>
                    <td>
                      <h2>
                        <h2>
                          {spec.impedance ? spec.impedance : "N/A"}
                        </h2>
                      </h2>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2>MICROPHONE</h2>
                    </td>
                    <td>
                      <h2>
                        <h2>
                          {spec.microphone ? spec.microphone : "N/A"}
                        </h2>
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
export default PageContentHeadset;
