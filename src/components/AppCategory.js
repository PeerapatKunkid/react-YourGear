import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import "./AppCategory.css";
import KeyboardCategory from "./KeyboardCategory";
import PageContent from "./PageContentMouse";
function AppCategory() {
  return (
    <div className="main-content">
      <h1 className="header-category">CATEGORY</h1>
      <div className="grid-category">
        <Link to="/category/mouse">
          <div className="item">
            <div className="content">
              <img
                className="category-img"
                src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2020/10/SteelSeries-Rival-3-Wireless.jpg"
                width="250"
                height="250"
              ></img>
              <p className="category-name">MOUSE</p>
            </div>
          </div>
        </Link>
        <Link to="/category/keyboard">
          <div className="item">
            <div className="content">
              <img
                className="category-img"
                src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2021/05/Ducky/Ducky_One_2SF_Black_1.jpg"
                width="250"
                height="250"
              ></img>
              <p className="category-name">KEYBOARD</p>
            </div>
          </div>
        </Link>

        <Link to="/Category/headset">
          <div className="item">
            <div className="content">
              <img
                className="category-img"
                src="https://mercular.s3.ap-southeast-1.amazonaws.com/upload/products/2018/03/%E0%B8%AB%E0%B8%B9%E0%B8%9F%E0%B8%B1%E0%B8%87-beyerdynamic-MMX300-Headphone.jpg"
                width="250"
                height="250"
              ></img>
              <p className="category-name">HEADSET</p>
            </div>
          </div>
        </Link>

        <Link to="/category/mousepad">
          <div className="item">
            <div className="content">
              <img
                className="category-img"
                src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2020/10/MM1000-1.jpg"
                width="250"
                height="250"
              ></img>
              <p className="category-name">MOUSEPAD</p>
            </div>
          </div>
        </Link>

        <Link to="/category/microphone">
          <div className="item">
            <div className="content">
              <img
                className="category-img"
                src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2021/06/Product/presonus-pd-70-tube-microphone-black-01.jpg"
                width="250"
                height="250"
              ></img>
              <p className="category-name">MICROPHONE</p>
            </div>
          </div>
        </Link>
        
        
        
      </div>
    </div>
  );
}
export default AppCategory;
