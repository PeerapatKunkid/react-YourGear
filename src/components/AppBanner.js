import React from "react";

import "./AppBanner.css";
import $ from "jquery";
import { Link } from "react-router-dom";
import { useState } from "react";
import ShowDetails from "./ShowDetails";
import SignInFacebook from "./SignInFacebook";
import { store } from "../redux/store";
import { useSelector } from "react-redux";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { add, remove } from "../redux/searchSlice";

function AppBanner(props) {
  
  const [searchText, setSearchText] = useState("");
  const user = useSelector((state) => state.user.name);
  const dispatch = useDispatch();
  function handleChange(event) {
    this.setState({value: event.target.value});
  }

  return (
    <div>
      <nav className="nav">
        <div className="container">
          <div className="logo">
            <Link to="/home">
              <img
                className="logo-img"
                src="/image/Logo.png"
                width="45"
                height="45"
              />
            </Link>
          </div>

          <div id="mainListDiv" className="main_list">
            <ul className="navlinks">
              <li>
                <Link to="/compare/detail">Compare</Link>
              </li>
              <li>
                <Link to="/BuildSomething">Build your gear</Link>
              </li>
              
              <li>
                <Link to="/Favorite">Favorite</Link>
              </li>
              <li>
                <div className="lgfb">{user ? <ShowDetails /> : <Login />}</div>
              </li>
            </ul>
          </div>
          <span className="navTrigger">
            <i></i>

            <i></i>
            <i></i>
          </span>
        </div>
      </nav>

      <div className="home">
        <div className="app-search-in-box">
          <div className="app-search">
            <p>What do you want to find ?</p>
            <input
              className="app-search-input"
              type="text"
              placeholder="SEARCH "
              onChange = {(e) => {dispatch(add({text :e.target.value}))}}
              
            ></input>
            {/* dispatch(add({ items: headset })); */}
            <Link to="/products/search">
              <img src="/image/search.png" width="25px" height="25px" />
            </Link>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}

$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $(".nav").addClass("affix");
    console.log("OK");
  } else {
    $(".nav").removeClass("affix");
  }
});

$(".navTrigger").click(function () {
  $(this).toggleClass("active");
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});

export default AppBanner;
