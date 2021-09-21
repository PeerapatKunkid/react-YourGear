import "./KeyboardCategory.css";
import $ from "jquery";
import axios from "axios";
import React, { useState, useEffect, Component, sort } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Footer from "./Footer";
function KeyboardCategory() {
  const [keyboard, setKeyboard] = useState([]);
  const [mouse, setMouse] = useState([]);
  // const [headset, setHeadset] = useState([]);
  // const [mousepad, setMousepad] = useState([]);
  // const [microphone, setMicophone] = useState([]);

  useEffect(async () => {
    await getAllKeyboard();
    await getAllMouse();
    // await getAllHeadset();
    // await getAllMousepad();
    // await getAllMicrophone();
  }, []);

  async function getAllKeyboard() {
    const res = await axios.get("http://localhost:3001/allKeyboard/1");
    const data = res.data;
    setKeyboard(data);
  }
  async function getAllMouse() {
    const res = await axios.get("http://localhost:3001/allMouse/1");
    const data = res.data;
    setMouse(data);
  }
  // async function getAllHeadset() {
  //   const res = await axios.get("http://localhost:3001/allHeadset/1");
  //   const data = res.data;
  //   setHeadset(data);

  // }
  // async function getAllMousepad() {
  //   const res = await axios.get("http://localhost:3001/allMousepad/1");
  //   const data = res.data;
  //   setMousepad(data);

  // }
  // async function getAllMicrophone() {
  //   const res = await axios.get("http://localhost:3001/allMicrophone/1");
  //   const data = res.data;
  //   setMicrophone(data);

  // }
  // console.log(mouse[0])
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
              <Link to="/Category/mouse">
                <p>- Mouse</p>
              </Link>
              <Link to="/Category/keyboard">
                <p>- Keyboard</p>
              </Link>
              <Link to="/Category/headset">
                <p>- Headset</p>
              </Link>
              <Link to="/Category/mousepad">
                <p>- Mousepad</p>
              </Link>
              <Link to="/Category/microphone">
                <p>- Microphone</p>
              </Link>
            </div>
          </div>
        </aside>
        {/* ส่วนของ Maincontent Mouse */}
        <Switch>
          <Route path="/Category/mouse">
            <main class="page-main">
              <div class="content-data-category">
                <div class="grid-category-filter">
                  {mouse.map((item,index) => {
                    return (
                      
                      <div class="item">
                        {console.log(index)}
                        <Link to={`/Category-mouse/${index}`}>
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
          <Route path="/Category/keyboard">
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
          </Route>
          {/* ปิดส่วนของ Maincontent Keyboard */}
          {/* ส่วนของ Maincontent Headset*/}
          <Route path="/Category/headset">
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
          </Route>
          {/* ปิดส่วนของ Maincontent Headset*/}
          {/* ส่วนของ Maincontent Mousepad*/}
          <Route path="/Category/mousepad">
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
          </Route>
          {/* ปิดส่วนส่วนของ Maincontent Mousepad*/}
          {/* ส่วนของ Maincontent Microphone*/}
          <Route path="/Category/microphone">
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
          </Route>
        </Switch>
        {/* ปิดส่วนของ Maincontent Microphone*/}
      </div>
    </div>
  );
}

export default KeyboardCategory;
