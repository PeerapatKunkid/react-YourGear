import "./ContentRecommend.css";
import $ from "jquery";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import React, { useState, useEffect, Component, sort } from "react";
import { Link, Switch, Route, onChange } from "react-router-dom";

function ContentRecommend() {
  const [trends, setTrends] = useState("");
  const [productsMouse, setProductsMouse] = useState([]);
  const [productsKeyboard, setProductsKeyboard] = useState([]);
  const [productsMousepad, setProductsMousepad] = useState([]);
  const [productsHeadset, setProductsHeadset] = useState([]);
  const [productsMicrophone, setProductsMicrophone] = useState([]);

  useEffect(async () => {
    const res = await axios.get(`http://localhost:3001/trends`);
    const dataTrends = res.data;
    setTrends(dataTrends);
  }, []);

  useEffect(async () => {
    const res = await axios.get(`http://localhost:3001/products/Mouse/?page=2`);   
    const dataProduct = res.data.data;
    setProductsMouse(dataProduct);
  }, []);

  useEffect(async () => {
    const res = await axios.get(`http://localhost:3001/products/Keyboard/?page=1`);  
    const dataProduct = res.data.data;
    setProductsKeyboard(dataProduct);
  }, []);

  useEffect(async () => {
    const res = await axios.get(`http://localhost:3001/products/Mousepad/?page=3`);  
    const dataProduct = res.data.data;
    setProductsMousepad(dataProduct);
  }, []);

  useEffect(async () => {
    const res = await axios.get(`http://localhost:3001/products/Headset/?page=2`);  
    const dataProduct = res.data.data;
    setProductsHeadset(dataProduct);
  }, []);

  useEffect(async () => {
    const res = await axios.get(`http://localhost:3001/products/Microphone/?page=3`);  
    const dataProduct = res.data.data;
    setProductsMicrophone(dataProduct);
  }, []);

  
  console.log(trends)
  return (
    <div>
      <div class="recommend-content">
        {/* <h1 class="recommend-category">RECOMMEND FOR YOUR </h1> */}
        {/* <Slider {...settings}>
          <div>
            
            
            <div class="item">
              <div class="content-recommend">
                <img
                  class="category-img-rec"
                  src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2021/04/Glorious%20Model%20O%20Wireless%20Gaming%20Mouse.jpg"
                  width="250"
                  height="250"
                ></img>
                <p class="category-name">
                  Glorious Model O Wireless Gaming Mouse
                </p>
                <div class="container">
                  <table class="box">
                    <tr>
                      <td>
                        <img
                          class="img-recommend"
                          src="https://notebookspec.com/laravel/public//images/component-shop-advice.jpg"
                          width="110"
                          height="40"
                        />
                      </td>
                      <td class="td-price">3000</td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          class="img-recommend"
                          src="https://images-ext-1.discordapp.net/external/-JmTFDFD3ch5vTU4ckx074_IfWr6P09-q_EfGGj7fLM/https/www.mercular.com/img/careers/logo.jpg"
                          width="110"
                          height="40"
                        />
                      </td>
                      <td class="td-price">3000</td>
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
                        <td class="td-price">3000</td>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Slider> */}

<h1 className="header-category">TRENDS </h1>
        <div className="grid-category-rc">
          {productsMouse.map((item, index) => {
            if (index <= 4) {
              return (
                <div className="item">
                  <Link to={`/products/Mouse/${item.key}`}>
                    <div className="content">
                      <img
                        className="category-img"
                        src={
                          (item.advice[0] && item.advice[0].data[0].image) ||
                          (item.banana[0] && item.banana[0].data[0].image) ||
                          (item.mercular[0] && item.mercular[0].data[0].image)
                        }
                        width="250"
                        height="250"
                      ></img>
                      <p className="category-name">{item.name}</p>
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
                              {item.advice[0]
                                ? item.advice[0].data[0].price
                                : "N/A"}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                className="img-recommend"
                                src="https://images-ext-1.discordapp.net/external/-JmTFDFD3ch5vTU4ckx074_IfWr6P09-q_EfGGj7fLM/https/www.mercular.com/img/careers/logo.jpg"
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
                                className="img-recommend"
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
            }
          })}
        </div>

        <h1 className="header-category">MOUSE</h1>
        <div className="grid-category-rc">
          {productsMouse.map((item, index) => {
            if (index <= 4) {
              return (
                <div className="item">
                  <Link to={`/products/Mouse/${item.key}`}>
                    <div className="content">
                      <img
                        className="category-img"
                        src={
                          (item.advice[0] && item.advice[0].data[0].image) ||
                          (item.banana[0] && item.banana[0].data[0].image) ||
                          (item.mercular[0] && item.mercular[0].data[0].image)
                        }
                        width="250"
                        height="250"
                      ></img>
                      <p className="category-name">{item.name}</p>
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
                              {item.advice[0]
                                ? item.advice[0].data[0].price
                                : "N/A"}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                className="img-recommend"
                                src="https://images-ext-1.discordapp.net/external/-JmTFDFD3ch5vTU4ckx074_IfWr6P09-q_EfGGj7fLM/https/www.mercular.com/img/careers/logo.jpg"
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
                                className="img-recommend"
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
            }
          })}
        </div>

        <h1 className="header-category">KEYBOARD</h1>
        <div className="grid-category-rc">
          {productsKeyboard.map((item, index) => {
            if (index <= 4) {
              return (
                <div className="item">
                  <Link to={`/products/Keyboard/${item.key}`}>
                    <div className="content">
                      <img
                        className="category-img"
                        src={
                          (item.advice[0] && item.advice[0].data[0].image) ||
                          (item.banana[0] && item.banana[0].data[0].image) ||
                          (item.mercular[0] && item.mercular[0].data[0].image)
                        }
                        width="250"
                        height="250"
                      ></img>
                      <p className="category-name">{item.name}</p>
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
                              {item.advice[0]
                                ? item.advice[0].data[0].price
                                : "N/A"}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                className="img-recommend"
                                src="https://images-ext-1.discordapp.net/external/-JmTFDFD3ch5vTU4ckx074_IfWr6P09-q_EfGGj7fLM/https/www.mercular.com/img/careers/logo.jpg"
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
                                className="img-recommend"
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
            }
          })}
        </div>

        <h1 className="header-category">MOUSEPAD</h1>
        <div className="grid-category-rc">
          {productsMousepad.map((item, index) => {
            if (index <= 4) {
              return (
                <div className="item">
                  <Link to={`/products/Mousepad/${item.key}`}>
                    <div className="content">
                      <img
                        className="category-img"
                        src={
                          (item.advice[0] && item.advice[0].data[0].image) ||
                          (item.banana[0] && item.banana[0].data[0].image) ||
                          (item.mercular[0] && item.mercular[0].data[0].image)
                        }
                        width="250"
                        height="250"
                      ></img>
                      <p className="category-name">{item.name}</p>
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
                              {item.advice[0]
                                ? item.advice[0].data[0].price
                                : "N/A"}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                className="img-recommend"
                                src="https://images-ext-1.discordapp.net/external/-JmTFDFD3ch5vTU4ckx074_IfWr6P09-q_EfGGj7fLM/https/www.mercular.com/img/careers/logo.jpg"
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
                                className="img-recommend"
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
            }
          })}
        </div>

        <h1 className="header-category">HEADSET</h1>
        <div className="grid-category-rc">
          {productsHeadset.map((item, index) => {
            if (index <= 4) {
              return (
                <div className="item">
                  <Link to={`/products/Headset/${item.key}`}>
                    <div className="content">
                      <img
                        className="category-img"
                        src={
                          (item.advice[0] && item.advice[0].data[0].image) ||
                          (item.banana[0] && item.banana[0].data[0].image) ||
                          (item.mercular[0] && item.mercular[0].data[0].image)
                        }
                        width="250"
                        height="250"
                      ></img>
                      <p className="category-name">{item.name}</p>
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
                              {item.advice[0]
                                ? item.advice[0].data[0].price
                                : "N/A"}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                className="img-recommend"
                                src="https://images-ext-1.discordapp.net/external/-JmTFDFD3ch5vTU4ckx074_IfWr6P09-q_EfGGj7fLM/https/www.mercular.com/img/careers/logo.jpg"
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
                                className="img-recommend"
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
            }
          })}
        </div>

        <h1 className="header-category">MICROPHONE</h1>
        <div className="grid-category-rc">
          {productsMicrophone.map((item, index) => {
            if (index <= 4) {
              return (
                <div className="item">
                  <Link to={`/products/Microphone/${item.key}`}>
                    <div className="content">
                      <img
                        className="category-img"
                        src={
                          (item.advice[0] && item.advice[0].data[0].image) ||
                          (item.banana[0] && item.banana[0].data[0].image) ||
                          (item.mercular[0] && item.mercular[0].data[0].image)
                        }
                        width="250"
                        height="250"
                      ></img>
                      <p className="category-name">{item.name}</p>
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
                              {item.advice[0]
                                ? item.advice[0].data[0].price
                                : "N/A"}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                className="img-recommend"
                                src="https://images-ext-1.discordapp.net/external/-JmTFDFD3ch5vTU4ckx074_IfWr6P09-q_EfGGj7fLM/https/www.mercular.com/img/careers/logo.jpg"
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
                                className="img-recommend"
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
            }
          })}
        </div>



      </div>
    </div>
  );
}

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default ContentRecommend;
