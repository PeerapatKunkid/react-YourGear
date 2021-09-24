import React from "react";
import "./AppBanner.css";
import $ from "jquery";
function AppBanner() {

  return (
    <div>
      <nav className="nav">
        <div className="container">
          <div className="logo">
            <img className="logo-img" src="image/Logo.png" width="65" height="65"/>
          </div>
          <div id="mainListDiv" className="main_list">
            <ul className="navlinks">
              
              <li>
                <a href="#">Build your gear</a>
              </li>
              <li>
                <a href="#">Login
                </a>
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
      
      <section className="home"></section>
      
      <div>
        
        </div>
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
