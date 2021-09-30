import "./KeyboardCategory.css";

import axios from "axios";
import React, { useState, useEffect, Component, sort } from "react";
import { Link, Switch, Route } from "react-router-dom";

function KeyboardCategory({ cate, url }) {
  const [post, setPost] = useState([
    {
      _id: "",
      key: "",
      name: "",
      category: "",
      advice: [],
      banana: [],
      mercular: [],
    },
  ]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/${url}/1`)
      .then((response) => setPost(response.data));
  }, []);

  return (
    <div className="main-content-category">
      <header className="page-header">
        <div className="dropdown">
          <button className="dropbtn">TYPE</button>
          <div className="dropdown-content">
            <option value="low-high">Low - High</option>
            <option value="high-low">High - LOW</option>
          </div>
        </div>
      </header>
      <div className="grid">
        {/* ส่วนของ FILTER ด้านซ้าย */}
        <aside className="page-leftbar">
          <div className="content-filter-category">
            <p className="filter-header">Filter</p>
            <p className="brand-tag-filter">BRAND</p>

            <label className="filter-checkbox">
              Logitect
              {/* <input type="checkbox" checked="checked" /> */}
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="filter-checkbox">
              Zowie
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="filter-checkbox">
              Razer
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="filter-checkbox">
              Xtrfy
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="filter-checkbox">
              Steelseries
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="filter-checkbox">
              Hyperx
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="filter-checkbox">
              Oker
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="filter-checkbox">
              Nubwo
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <p className="price-tag-filter">PRICE</p>
            <tr border="1" className="filter-price">
              <td>
                <input type="text" id="fname" name="fname" />
              </td>
              <td className="to"> ~ </td>
              <td>
                <input type="text" id="fname" name="fname" />
              </td>
            </tr>
            <p className="filter-header-category">CATEGORY</p>
            <div className="linkcategory">
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
          <main className="page-main">
            <div className="content-data-category">
              <div className="grid-category-filter">
                {post.map((post, index) => {
                  return (
                    <div className="item" key={post._id}>
                      {console.log(post)}
                      <Link to={`/category/${cate}/${index}`}>
                        <div className="card-content">
                          <img
                            className="card-img"
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
                          <p className="category-box">{post.name}</p>
                          <div className="container">
                            <table className="card-box">
                              <tr>
                                <td>
                                  <img
                                    className="img-recommend"
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
                                    className="img-recommend"
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
                                    className="img-recommend"
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
        <Route path="/category/keyboard">
          <main className="page-main">
            <div className="content-data-category">
              <div className="grid-category-filter">
                {post.map((post, index) => {
                  return (
                    <div className="item" key={post._id}>
                      {console.log(post)}
                      <Link to={`/category/${cate}/${index}`}>
                        <div className="card-content">
                          <img
                            className="card-img"
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
                          <p className="category-box">{post.name}</p>
                          <div className="container">
                            <table className="card-box">
                              <tr>
                                <td>
                                  <img
                                    className="img-recommend"
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
                                    className="img-recommend"
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
                                    className="img-recommend"
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
        {/* ปิดส่วนของ Maincontent Keyboard */}
        {/* ส่วนของ Maincontent Headset*/}
        <Route path="/category/headset">
          <main className="page-main">
            <div className="content-data-category">
              <div className="grid-category-filter">
                {post.map((post, index) => {
                  return (
                    <div className="item" key={post._id}>
                      {console.log(post)}
                      <Link to={`/category/${cate}/${index}`}>
                        <div className="card-content">
                          <img
                            className="card-img"
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
                          <p className="category-box">{post.name}</p>
                          <div className="container">
                            <table className="card-box">
                              <tr>
                                <td>
                                  <img
                                    className="img-recommend"
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
                                    className="img-recommend"
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
                                    className="img-recommend"
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
        {/* ปิดส่วนของ Maincontent Headset*/}
        {/* ส่วนของ Maincontent Mousepad*/}
        <Route path="/category/mousepad">
          <main className="page-main">
            <div className="content-data-category">
              <div className="grid-category-filter">
                {post.map((post, index) => {
                  return (
                    <div className="item" key={post._id}>
                      {console.log(post)}
                      <Link to={`/category/${cate}/${index}`}>
                        <div className="card-content">
                          <img
                            className="card-img"
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
                          <p className="category-box">{post.name}</p>
                          <div className="container">
                            <table className="card-box">
                              <tr>
                                <td>
                                  <img
                                    className="img-recommend"
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
                                    className="img-recommend"
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
                                    className="img-recommend"
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
        {/* ปิดส่วนส่วนของ Maincontent Mousepad*/}
        {/* ส่วนของ Maincontent Microphone*/}
        <Route path="/category/microphone">
          <main className="page-main">
            <div className="content-data-category">
              <div className="grid-category-filter">
                {post.map((post, index) => {
                  return (
                    <div className="item" key={post._id}>
                      {console.log(post)}
                      <Link to={`/category/${cate}/${index}`}>
                        <div className="card-content">
                          <img
                            className="card-img"
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
                          <p className="category-box">{post.name}</p>
                          <div className="container">
                            <table className="card-box">
                              <tr>
                                <td>
                                  <img
                                    className="img-recommend"
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
                                    className="img-recommend"
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
                                    className="img-recommend"
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

        {/* ปิดส่วนของ Maincontent Microphone*/}
      </div>
    </div>
  );
}

export default KeyboardCategory;
