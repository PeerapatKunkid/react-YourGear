import React, { useState, useEffect, Component } from "react";
import "./App.css";
import AppBanner from "./components/AppBanner";
import AppCategory from "./components/AppCategory";
import ContentRecommend from "./components/ContentRecommend";
import KeyboardCategory from "./components/KeyboardCategory";
import Footer from "./components/Footer";
import Slider from "react-slick";
import PageHome from "./Page/PageHome";
import { Route, Switch } from "react-router";
import PageContent from "./components/PageContent";


function App() {
  return (
    <div className="App">

       <AppBanner />
      <Switch>
        <Route path="/" exact>
          <PageHome />
        </Route>
        <Route path="/Category">
          <KeyboardCategory/>
        </Route>
        <Route path="/Content/:index">
          <PageContent/>
        </Route>
      </Switch>
      <Footer/>
      
    </div>
  );
}

export default App;
