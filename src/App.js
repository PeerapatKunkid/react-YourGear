import React, { useState, useEffect, Component } from "react";
import "./App.css";
import AppBanner from "./components/AppBanner";
import AppCategory from "./components/AppCategory";
import ContentRecommend from "./components/ContentRecommend";
import KeyboardCategory from "./components/KeyboardCategory";
import Footer from "./components/Footer";
import { Route, Switch, Link } from "react-router-dom";
import PageContentMouse from "./components/PageContentMouse";
import PageContentKeyboard from "./components/PageContentKeyboard";
import PageContentHeadset from "./components/PageContentHeadset";
import PageContentMousepad from "./components/PageContentMousepad";
import PageContentMicrophone from "./components/PageContentMicrophone";
import PageSearch from "./components/PageSearch";
import CompareDetail from "./components/CompareDetail";

function App() {
  return (
    <div className="App">
      <AppBanner />
      
      <Switch>
        <Route path="/" exact>
          <AppCategory />
          
          <ContentRecommend />
          
        </Route>

         
        
        <Route path="/compare/detail">
          <CompareDetail/>
        </Route>

        
        <Route path="/products/Mouse/:postId">
          <PageContentMouse type="Mouse" />
        </Route>
        <Route path="/products/Mouse" exact>
          <KeyboardCategory cate="Mouse" url="Mouse" />
        </Route>
        
        <Route path="/products/Keyboard/:postId">
          <PageContentKeyboard type="Keyboard" />
        </Route>
        <Route path="/products/Keyboard/" exact>
          <KeyboardCategory cate="Keyboard" url="Keyboard" />
        </Route>

        
        <Route path="/products/Headset/:postId">
          <PageContentHeadset type="Headset" />
        </Route>
        <Route path="/products/Headset" exact>
          <KeyboardCategory cate="Headset" url="Headset" />
        </Route>

        <Route path="/products/Microphone/:postId">
          <PageContentMicrophone type="Microphone" />
        </Route>
        <Route path="/products/Microphone" exact>
          <KeyboardCategory cate="Microphone" url="Microphone" />
        </Route>

        <Route path="/products/Mousepad/:postId">
          <PageContentMousepad type="Mousepad" />
        </Route>
        <Route path="/products/Mousepad" exact>
          <KeyboardCategory cate="Mousepad" url="Mousepad" />
        </Route>
      
      
        <Route path="/products/search" exact>
          <PageSearch />
        </Route>
      
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
