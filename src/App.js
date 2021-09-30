import React, { useState, useEffect, Component } from "react";
import "./App.css";
import AppBanner from "./components/AppBanner";
import AppCategory from "./components/AppCategory";
import ContentRecommend from "./components/ContentRecommend";
import KeyboardCategory from "./components/KeyboardCategory";
import Footer from "./components/Footer";
import Slider from "react-slick";
import PageHome from "./Page/PageHome";
import { Route, Switch, Link } from "react-router-dom";
import PageContentMouse from "./components/PageContentMouse";
import PageContentKeyboard from "./components/PageContentKeyboard";
import PageContentHeadset from "./components/PageContentHeadset";
import PageContentMousepad from "./components/PageContentMousepad";
import PageContentMicrophone from "./components/PageContentMicrophone";
function App() {
  return (
    <div className="App">
      <AppBanner />

      <Switch>
        <Route path="/" exact>
          <AppCategory />
          <ContentRecommend />
        </Route>

        <Route path="/category/mouse/:postId">
          <PageContentMouse type="allMouse" />
        </Route>
        <Route path="/category/mouse" exact>
          <KeyboardCategory cate="mouse" url="allMouse" />
        </Route>
        
        <Route path="/category/keyboard/:postId">
          <PageContentKeyboard type="allKeyboard" />
        </Route>
        <Route path="/category/keyboard" exact>
          <KeyboardCategory cate="keyboard" url="allKeyboard" />
        </Route>
      
        <Route path="/category/headset/:postId">
          <PageContentHeadset type="allHeadset" />
        </Route>
        <Route path="/category/headset" exact>
          <KeyboardCategory cate="headset" url="allHeadset" />
        </Route>

        <Route path="/category/microphone/:postId">
          <PageContentMicrophone type="allMicrophone" />
        </Route>
        <Route path="/category/microphone" exact>
          <KeyboardCategory cate="microphone" url="allMicrophone" />
        </Route>

        <Route path="/category/mousepad/:postId">
          <PageContentMousepad type="allMousepad" />
        </Route>
        <Route path="/category/mousepad" exact>
          <KeyboardCategory cate="mousepad" url="allMousepad" />
        </Route>
      
      
      
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
