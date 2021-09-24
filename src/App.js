import React, { useState, useEffect, Component } from "react";
import "./App.css";
import AppBanner from "./components/AppBanner";
import AppCategory from "./components/AppCategory";
import ContentRecommend from "./components/ContentRecommend";
import KeyboardCategory from "./components/KeyboardCategory";
import Footer from "./components/Footer";
import Slider from "react-slick";
import PageHome from "./Page/PageHome";
import { Route, Switch,Link } from "react-router-dom";
import PageContent from "./components/PageContent";

function App() {
  return (
    <div className="App">
      <AppBanner />
      
      
      
      <Switch>
        <Route path="/" exact>
        <AppCategory/>
        <ContentRecommend/>
        </Route>

        
        
        
        <Route path="/category/mouse/:postId">
          <PageContent type="allMouse" />
        </Route>
        <Route path="/category/mouse" exact>
          <KeyboardCategory cate="mouse" url="allMouse" />
        </Route>

        {/* <Route path="/category/keyboard/:postId">
          <PageContent type="allKeyboard" />
        </Route>
        <Route path="/category/keyboard" exact>
          <KeyboardCategory cate="keyboard" url="allKeyboard" />
        </Route> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
