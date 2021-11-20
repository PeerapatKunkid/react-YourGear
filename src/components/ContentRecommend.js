import "./ContentRecommend.css";
import $ from "jquery";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import React, { useState, useEffect, Component, sort } from "react";
import { Link, Switch, Route, onChange } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function ContentRecommend() {
  const dispatch = useDispatch();
  const userGroup1 = useSelector((state) => state.user.group);
  async function infoGroup(){
    
    const userGroup = userGroup1.data;
     
    function cleanText(text) {
      return text
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/-/g, "")
      .replace(/\./g, "")
      .replace(/:\s*/g, "");
    }
   
    const cleanGroup = userGroup.map((group) => {
      return cleanText(group.name);
      
    });
    
    const cleanGames = gamelist.map((game) => {
      return cleanText(game);
    });
   
  
    function findType() {
      let typeCount = [];
      for (let i = 0; i < cleanGroup.length; i++) {
        for (let j = 0; j < cleanGames.length; j++) {
          let check = cleanGroup[i].search(cleanGames[j]);
          if (check >= 0) { 
            // console.log(cleanGames[j] + " > " + cleanGroup[i]);
            typeCount.push(cleanGames[j]);
          }
        }
      }
      let dup = [...new Set(typeCount)];
      
  
      return dup.length >= 2 ? "Gaming" : "Working";
    }
    const res = await axios.get(`http://localhost:3001/userType/?type=${findType()}`);  
    const usertype = res.data;
    setUsertype(usertype);
    
  }
  
  
  const [trends, setTrends] = useState([{
    _id: "",
    key: "",
    name: "",
    category: "",
    advice: [],
    banana: [],
    mercular: [],
  },]);
  
  const [productsMouse, setProductsMouse] = useState([]);
  const [productsKeyboard, setProductsKeyboard] = useState([]);
  const [productsMousepad, setProductsMousepad] = useState([]);
  const [productsHeadset, setProductsHeadset] = useState([]);
  const [productsMicrophone, setProductsMicrophone] = useState([]);
  const [gamelist, setGamelist] = useState([]);
  const [usertype,setUsertype] = useState([{
    _id: "",
    key: "",
    name: "",
    category: "",
    advice: [],
    banana: [],
    mercular: [],
    
  }]);
  const [count, setCount] = useState(0);
  useEffect(async () => {
    const res = await axios.get(`http://localhost:3001/games`);
    const gamelist = res.data;
    setGamelist(gamelist);
  }, []);

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

  

  
  
  useEffect(async () => {
    userGroup1 && infoGroup()
  }, []);
  
  const reccomend = 

  
  usertype.map((item, index) => {
            
    return (
      
      
      <div className="item">
        <Link to={`/products/${item.category}/${item.key}`}>
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
  
})
  
  
  return (
    <div>
      
      <div class="recommend-content">
      {userGroup1 && <h1 className="header-category-mp">RECCOMEND FOR YOU </h1>}
       {userGroup1 && <div className="grid-category-rc">{reccomend}</div>}
      
      
      
      
      

  <h1 className="header-category-mp">TRENDS </h1>
        <div className="grid-category-rc">
          {trends.map((item, index) => {
            if (index <= 4) {
              return (
                <div className="item">
                  <Link to={`/products/${item.category}/${item.key}`}>
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

        <h1 className="header-category-mp">MOUSE</h1>
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

        <h1 className="header-category-mp">KEYBOARD</h1>
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

        <h1 className="header-category-mp">MOUSEPAD</h1>
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

        <h1 className="header-category-mp">HEADSET</h1>
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

        <h1 className="header-category-mp">MICROPHONE</h1>
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

      <div className="blank">s</div>

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
