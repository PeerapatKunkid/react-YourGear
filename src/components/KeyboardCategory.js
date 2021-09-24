import "./KeyboardCategory.css";
import $ from "jquery";
import axios from "axios";
import React, { useState, useEffect, Component, sort } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Footer from "./Footer";
function KeyboardCategory({cate,url}) {
  const [post,setPost] =useState ([
    {
      _id: "",
      key: "",
      name: "",
      category: "",
      advice: [],
      banana: [],
      mercular: [],
    },
  ])
  

  useEffect(() => {
    axios
      .get(`http://localhost:3001/${url}/1`)
      .then((response) => setPost(response.data));
  }, []);

  
  
  return (
    <div class="main-content-category">
      <header class="page-header">
        
        <div class="dropdown">
          <button class="dropbtn">TYPE</button>
          <div class="dropdown-content">
            <option value="low-high">Low - High</option>
            <option value="high-low">High - LOW</option>
          </div>
        </div>
      </header>
      <div class="grid">
        {/* ส่วนของ FILTER ด้านซ้าย */}
        <aside class="page-leftbar">
          <div class="content-filter-category">
            <p class="filter-header">Filter</p>
            <p class="brand-tag-filter">BRAND</p>

            <label class="filter-checkbox">
              Logitect
              {/* <input type="checkbox" checked="checked" /> */}
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="filter-checkbox">
              Zowie
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="filter-checkbox">
              Razer
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="filter-checkbox">
              Xtrfy
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="filter-checkbox">
              Steelseries
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="filter-checkbox">
              Hyperx
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="filter-checkbox">
              Oker
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="filter-checkbox">
              Nubwo
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <p class="price-tag-filter">PRICE</p>
            <tr border="1" class="filter-price">
              <td>
                <input type="text" id="fname" name="fname" />
              </td>
              <td class="to"> ~ </td>
              <td>
                <input type="text" id="fname" name="fname" />
              </td>
            </tr>
            <p class="filter-header-category">CATEGORY</p>
            <div class="linkcategory">
              <Link to="/category/mouse">
                <p>- Mouse</p>
              </Link>
              <Link to="/category/keyboard">
                <p>- Keyboard</p>
              </Link>
              <Link to="/category/headset">
                <p>- Headset</p>
              </Link>
              <Link to="/category/mousepad">
                <p>- Mousepad</p>
              </Link>
              <Link to="/category/microphone">
                <p>- Microphone</p>
              </Link>
            </div>
          </div>
        </aside>
        {/* ส่วนของ Maincontent Mouse */}
        
          <Route path="/category/mouse">
            <main class="page-main">
              <div class="content-data-category">
                <div class="grid-category-filter">
                  {post.map((post,index) => {
                   
                    return (
                      
                      <div class="item">
                        {console.log(post)}
                        <Link to={`/category/${cate}/${index}`}>
                        <div class="card-content">
                          <img
                            class="card-img"
                            src={
                              post.advice[0]
                                ? post.advice[0].data[0].image
                                : post.banana[0]
                                ? post.banana[0].data[0].image
                                : post.mercular[0]
                                ? post.mercular[0].data[0].image
                                : ""
                            }
                            height="250"
                            width="10"
                          ></img>
                          <p class="category-box">{post.name}</p>
                          <div class="container">
                            <table class="card-box">
                              <tr>
                                <td>
                                  <img
                                    class="img-recommend"
                                    src="https://notebookspec.com/laravel/public//images/component-shop-advice.jpg"
                                    width="110"
                                    height="40"
                                  />
                                </td>
                                <td>
                                  {post.advice[0]
                                    ? post.advice[0].data[0].price
                                    : "N/A"}
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    class="img-recommend"
                                    src="https://notebookspec.com/laravel/public//images/component-shop-jib.jpg"
                                    width="110"
                                    height="40"
                                  />
                                </td>
                                <td>
                                  {post.mercular[0]
                                    ? post.mercular[0].data[0].price
                                    : "N/A"}
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <img
                                    class="img-recommend"
                                    src="https://notebookspec.com/laravel/public//images/component-shop-banana.png"
                                    width="110"
                                    height="40"
                                  />
                                </td>

                                <td>
                                  {post.banana[0]
                                    ? post.banana[0].data[0].price
                                    : "N/A"}
                                </td>
                              </tr>
                            </table>
                          </div>
                        </div>
                        </Link>
                      </div>
                      
                    );
                  })}
                </div>
              </div>
            </main>
          </Route>
          {/* ปิดส่วนของ Maincontent Mouse */}
          {/* ส่วนของ Maincontent Keyboard */}
          {/* <Route path="/Category/keyboard">
            <main class="page-main">
              <div class="content-data-category">
                <div class="grid-category-filter">
                  {keyboard.map((item) => {
                    return (
                      <div class="item">
                        
                        <div class="card-content">
                          <img
                            class="card-img"
                            src={
                              item.advice[0]
                                ? item.advice[0].data[0].image
                                : item.banana[0]
                                ? item.banana[0].data[0].image
                                : item.mercular[0]
                                ? item.mercular[0].data[0].image
                                : ""
                            }
                            height="250"
                            width="10"
                          ></img>
                          <p class="category-box">{item.name}</p>
                          <div class="container">
                            <table class="card-box">
                              <tr>
                                <td>
                                  <img
                                    class="img-recommend"
                                    src="https://notebookspec.com/laravel/public//images/component-shop-advice.jpg"
                                    width="110"
                                    height="40"
                                  />
                                </td>
                                <td>
                                  {item.advice[0]
                                    ? item.advice[0].data[0].price
                                    : "N/A"}
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    class="img-recommend"
                                    src="https://notebookspec.com/laravel/public//images/component-shop-jib.jpg"
                                    width="110"
                                    height="40"
                                  />
                                </td>
                                <td>
                                  {item.mercular[0]
                                    ? item.mercular[0].data[0].price
                                    : "N/A"}
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <img
                                    class="img-recommend"
                                    src="https://notebookspec.com/laravel/public//images/component-shop-banana.png"
                                    width="110"
                                    height="40"
                                  />
                                </td>

                                <td>
                                  {item.banana[0]
                                    ? item.banana[0].data[0].price
                                    : "N/A"}
                                </td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </main>
          </Route> */}
          {/* ปิดส่วนของ Maincontent Keyboard */}
          {/* ส่วนของ Maincontent Headset*/}
          {/* <Route path="/Category/headset">
            <main class="page-main">
              <div class="content-data-category">
                <div class="grid-category-filter">
                  {keyboard.map((item) => {
                    return (
                      <div class="item">
                        <div class="card-content">
                          <img
                            class="card-img"
                            src={
                              item.advice[0]
                                ? item.advice[0].data[0].image
                                : item.banana[0]
                                ? item.banana[0].data[0].image
                                : item.mercular[0]
                                ? item.mercular[0].data[0].image
                                : ""
                            }
                            height="250"
                            width="10"
                          ></img>
                          <p class="category-box">{item.name}</p>
                          <div class="container">
                            <table class="card-box">
                              <tr>
                                <td>
                                  <img
                                    class="img-recommend"
                                    src="https://notebookspec.com/laravel/public//images/component-shop-advice.jpg"
                                    width="110"
                                    height="40"
                                  />
                                </td>
                                <td>
                                  {item.advice[0]
                                    ? item.advice[0].data[0].price
                                    : "N/A"}
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    class="img-recommend"
                                    src="https://notebookspec.com/laravel/public//images/component-shop-jib.jpg"
                                    width="110"
                                    height="40"
                                  />
                                </td>
                                <td>
                                  {item.mercular[0]
                                    ? item.mercular[0].data[0].price
                                    : "N/A"}
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <img
                                    class="img-recommend"
                                    src="https://notebookspec.com/laravel/public//images/component-shop-banana.png"
                                    width="110"
                                    height="40"
                                  />
                                </td>

                                <td>
                                  {item.banana[0]
                                    ? item.banana[0].data[0].price
                                    : "N/A"}
                                </td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </main> */}
          {/* </Route> */}
          {/* ปิดส่วนของ Maincontent Headset*/}
          {/* ส่วนของ Maincontent Mousepad*/}
          {/* <Route path="/Category/mousepad">
            <main class="page-main">
              <div class="content-data-category">
                <div class="grid-category-filter">
                  {keyboard.map((item) => {
                    return (
                      <div class="item">
                        <div class="card-content">
                          <img
                            class="card-img"
                            src={
                              item.advice[0]
                                ? item.advice[0].data[0].image
                                : item.banana[0]
                                ? item.banana[0].data[0].image
                                : item.mercular[0]
                                ? item.mercular[0].data[0].image
                                : ""
                            }
                            height="250"
                            width="10"
                          ></img>
                          <p class="category-box">{item.name}</p>
                          <div class="container">
                            <table class="card-box">
                              <tr>
                                <td>
                                  <img
                                    class="img-recommend"
                                    src="https://notebookspec.com/laravel/public//images/component-shop-advice.jpg"
                                    width="110"
                                    height="40"
                                  />
                                </td>
                                <td>
                                  {item.advice[0]
                                    ? item.advice[0].data[0].price
                                    : "N/A"}
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    class="img-recommend"
                                    src="https://notebookspec.com/laravel/public//images/component-shop-jib.jpg"
                                    width="110"
                                    height="40"
                                  />
                                </td>
                                <td>
                                  {item.mercular[0]
                                    ? item.mercular[0].data[0].price
                                    : "N/A"}
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <img
                                    class="img-recommend"
                                    src="https://notebookspec.com/laravel/public//images/component-shop-banana.png"
                                    width="110"
                                    height="40"
                                  />
                                </td>

                                <td>
                                  {item.banana[0]
                                    ? item.banana[0].data[0].price
                                    : "N/A"}
                                </td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </main> */}
          {/* </Route> */}
          {/* ปิดส่วนส่วนของ Maincontent Mousepad*/}
          {/* ส่วนของ Maincontent Microphone*/}
          {/* <Route path="/Category/microphone">
            <main class="page-main">
              <div class="content-data-category">
                <div class="grid-category-filter">
                  {keyboard.map((item) => {
                    return (
                      <div class="item">
                        <div class="card-content">
                          <img
                            class="card-img"
                            src={
                              item.advice[0]
                                ? item.advice[0].data[0].image
                                : item.banana[0]
                                ? item.banana[0].data[0].image
                                : item.mercular[0]
                                ? item.mercular[0].data[0].image
                                : ""
                            }
                            height="250"
                            width="10"
                          ></img>
                          <p class="category-box">{item.name}</p>
                          <div class="container">
                            <table class="card-box">
                              <tr>
                                <td>
                                  <img
                                    class="img-recommend"
                                    src="https://notebookspec.com/laravel/public//images/component-shop-advice.jpg"
                                    width="110"
                                    height="40"
                                  />
                                </td>
                                <td>
                                  {item.advice[0]
                                    ? item.advice[0].data[0].price
                                    : "N/A"}
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    class="img-recommend"
                                    src="https://notebookspec.com/laravel/public//images/component-shop-jib.jpg"
                                    width="110"
                                    height="40"
                                  />
                                </td>
                                <td>
                                  {item.mercular[0]
                                    ? item.mercular[0].data[0].price
                                    : "N/A"}
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <img
                                    class="img-recommend"
                                    src="https://notebookspec.com/laravel/public//images/component-shop-banana.png"
                                    width="110"
                                    height="40"
                                  />
                                </td>

                                <td>
                                  {item.banana[0]
                                    ? item.banana[0].data[0].price
                                    : "N/A"}
                                </td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </main>
          </Route> */}
        
        {/* ปิดส่วนของ Maincontent Microphone*/}
      </div>
    </div>
  );
}

export default KeyboardCategory;
