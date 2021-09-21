import React from "react";
import { Link,Switch,Route} from "react-router-dom";
import "./AppCategory.css";

function AppCategory() {
  return (
    
    <div class="main-content">
      
      <h1 class="header-category">CATEGORY</h1>
      <div class="grid-category">
      <Link to="/PageCategory/mouse" >
        <div class="item">
          <div class="content">
            <img class="category-img" src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2020/10/SteelSeries-Rival-3-Wireless.jpg" width="250" height="250"></img>
            <p class="category-name">MOUSE</p>
          </div>
        </div>
        </Link>
        <Link to="/Category/keyboard" >
        <div class="item" >
          <div class="content">
          <img class="category-img" src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2021/05/Ducky/Ducky_One_2SF_Black_1.jpg" width="250" height="250"></img>
            <p class="category-name" >KEYBOARD</p>
          </div>
        </div>
        </Link>
        
        <Link to="/PageCategory/headset" >
        <div class="item">
          <div class="content">
          <img class="category-img" src="https://mercular.s3.ap-southeast-1.amazonaws.com/upload/products/2018/03/%E0%B8%AB%E0%B8%B9%E0%B8%9F%E0%B8%B1%E0%B8%87-beyerdynamic-MMX300-Headphone.jpg" width="250" height="250"></img>
            <p class="category-name" >HEADSET</p>
          </div>
        </div>
        </Link>
        
        <Link to="/PageCategory/mousepad" >
        <div class="item">
          <div class="content">
          <img class="category-img" src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2020/10/MM1000-1.jpg" width="250" height="250"></img>
            <p class="category-name" >MOUSEPAD</p>
          </div>
        </div>
        </Link>

        <Link to="/PageCategory/microphone" >
        <div class="item">
          <div class="content">
          <img class="category-img" src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2021/06/Product/presonus-pd-70-tube-microphone-black-01.jpg" width="250" height="250"></img>
            <p class="category-name" >MICROPHONE</p>
          </div>
        </div>
        </Link>
      </div>
      
    </div>
  );
}
export default AppCategory;
