import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./PageContent.css";
import axios from "axios";
import model from "./Model/Model_headset.json";
import { v4 as uuidv4 } from "uuid";
import { add } from "../redux/compareDetailSlice";
import { useDispatch } from "react-redux";
function PageContentHeadset({ type }) {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const [post, setPost] = useState(model);
  const [headset, setHeadset] = useState({
    title: "Mouse",
    pic: "/image/iconmouse.png",
    name: "",
    url: "",
    advice: "",
    banana: "",
    mercular: "",
    model: "",
    interface:"",
    type_of:"",
    frequency:"",
    impedance:"",
    microphone:"",
  });

  async function getPost(postId) {
    axios
      .get(`http://localhost:3001/products/${type}/?item=${postId}`)
      .then((response) => {
        setPost(response.data.data);
      });
  }

  useEffect(() => {
    getPost(postId);
  }, [postId]);
  console.log(post)
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
              setHeadset({...headset,
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
                advice: post.advice[0] ? post.advice[0].data[0].price : "N/A",
                mercular: post.mercular[0]
                  ? post.mercular[0].data[0].price
                  : "N/A",
                banana: post.banana[0] ? post.banana[0].data[0].price : "N/A",
                
                
              });
              dispatch(add({ headset: headset }));
            }}
            className="bt-compare"
          >
            Compare
          </button>
        </h1>

        {console.log(headset)}
        <Link to={"/compare/detail"}>test</Link>
        <h4>Specification</h4>

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
                          {item.spec.interface ? item.spec.interface : "N/A"}
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
                        <h2>{item.spec.type_of ? item.spec.type_of : "N/A"}</h2>
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
                          {item.spec.frequency ? item.spec.frequency : "N/A"}
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
                          {item.spec.impedance ? item.spec.impedance : "N/A"}
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
                          {item.spec.microphone ? item.spec.microphone : "N/A"}
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
