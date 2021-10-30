import "./ContentRecommend.css";
import $ from "jquery";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import React, { useState, useEffect, Component, sort } from "react";

function ContentRecommend() {
  const [trends, setTrends] = useState("");
  useEffect(async () => {
    const res = await axios.get(
      `http://localhost:3001/trends`
    );
    
    const dataTrends = res.data;
    

    setTrends(dataTrends);
   
  }, []);
  console.log(trends)
 
  // http://localhost:3001/products/Mouse/?item=gpro
  // const [trendsItem, setTrendsItem] = useState("");
  
  
  return (
    <div>
      <div class="recommend-content">
        <h1 class="recommend-category">RECOMMEND FOR YOUR </h1>
        <Slider {...settings}>
          <div>
            {/* Card 1  */}
            <div class="item">
              <div class="content-recommend">
                <img
                  class="category-img-rec"
                  src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2021/04/Glorious%20Model%20O%20Wireless%20Gaming%20Mouse.jpg"
                  width="250"
                  height="250"
                ></img>
                <p class="category-name">Glorious Model O Wireless Gaming Mouse</p>
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
                          src="https://notebookspec.com/laravel/public//images/component-shop-jib.jpg"
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
          {/* Card 2  */}
          <div>
            <div class="item">
              <div class="content-recommend">
                <img
                  class="category-img-rec"
                  src="https://mercular.s3.ap-southeast-1.amazonaws.com/upload/products/2018/03/%E0%B8%AB%E0%B8%B9%E0%B8%9F%E0%B8%B1%E0%B8%87-beyerdynamic-MMX300-Headphone.jpg"
                  width="250"
                  height="250"
                ></img>
                <p class="category-name">HyperX Cloud Alpha S Headphone</p>
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
                          src="https://notebookspec.com/laravel/public//images/component-shop-jib.jpg"
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
          <div>
            {/* Card 3  */}
            <div class="item">
              <div class="content-recommend">
                <img
                  class="category-img-rec"
                  src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2020/10/SteelSeries-Rival-3-Wireless.jpg"
                  width="250"
                  height="250"
                ></img>
                <p class="category-name">PEERAPAT KUNKID PEERAPAT PEERAPAT</p>
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
                          src="https://notebookspec.com/laravel/public//images/component-shop-jib.jpg"
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
          <div>
            {/* Card 4  */}
            <div class="item">
              <div class="content-recommend">
                <img
                  class="category-img-rec"
                  src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2020/10/SteelSeries-Rival-3-Wireless.jpg"
                  width="250"
                  height="250"
                ></img>
                <p class="category-name">PEERAPAT KUNKID PEERAPAT PEERAPAT</p>
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
                          src="https://notebookspec.com/laravel/public//images/component-shop-jib.jpg"
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
          <div>
            {/* Card 5 */}
            <div class="item">
              <div class="content-recommend">
                <img
                  class="category-img-rec"
                  src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2020/10/SteelSeries-Rival-3-Wireless.jpg"
                  width="250"
                  height="250"
                ></img>
                <p class="category-name">PEERAPAT KUNKID PEERAPAT PEERAPAT</p>
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
                          src="https://notebookspec.com/laravel/public//images/component-shop-jib.jpg"
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
          {/* Card 6  */}
          <div>
            <div class="item">
              <div class="content-recommend">
                <img
                  class="category-img-rec"
                  src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2020/10/SteelSeries-Rival-3-Wireless.jpg"
                  width="250"
                  height="250"
                ></img>
                <p class="category-name">PEERAPAT KUNKID PEERAPAT PEERAPAT</p>
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
                          src="https://notebookspec.com/laravel/public//images/component-shop-jib.jpg"
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
          {/* Card 7  */}
          <div>
            <div class="item">
              <div class="content-recommend">
                <img
                  class="category-img-rec"
                  src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2020/10/SteelSeries-Rival-3-Wireless.jpg"
                  width="250"
                  height="250"
                ></img>
                <p class="category-name">PEERAPAT KUNKID PEERAPAT PEERAPAT</p>
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
                          src="https://notebookspec.com/laravel/public//images/component-shop-jib.jpg"
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
          {/* Card 8  */}
          <div>
            <div class="item">
              <div class="content-recommend">
                <img
                  class="category-img-rec"
                  src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2020/10/SteelSeries-Rival-3-Wireless.jpg"
                  width="250"
                  height="250"
                ></img>
                <p class="category-name">PEERAPAT KUNKID PEERAPAT PEERAPAT</p>
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
                          src="https://notebookspec.com/laravel/public//images/component-shop-jib.jpg"
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
          {/* Card 9  */}
          <div>
            <div class="item">
              <div class="content-recommend">
                <img
                  class="category-img-rec"
                  src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2020/10/SteelSeries-Rival-3-Wireless.jpg"
                  width="250"
                  height="250"
                ></img>
                <p class="category-name">PEERAPAT KUNKID PEERAPAT PEERAPAT</p>
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
                          src="https://notebookspec.com/laravel/public//images/component-shop-jib.jpg"
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
          {/* Card 10  */}
          <div>
            <div class="item">
              <div class="content-recommend">
                <img
                  class="category-img-rec"
                  src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2020/10/SteelSeries-Rival-3-Wireless.jpg"
                  width="250"
                  height="250"
                ></img>
                <p class="category-name">PEERAPAT KUNKID PEERAPAT PEERAPAT</p>
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
                          src="https://notebookspec.com/laravel/public//images/component-shop-jib.jpg"
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
        </Slider>
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
