
import './App.css';
import AppBanner from './components/AppBanner';
import AppCategory from './components/AppCategory';
import ContentRecommend from './components/ContentRecommend';
import KeyboardCategory from './components/KeyboardCategory';
import React, { Component } from "react";
import Slider from "react-slick";


function App() {
  return (
    <div className="App">
      <AppBanner/>
      {/* <AppCategory/>
      <ContentRecommend/>  */}
      <KeyboardCategory/>


    </div>
  );
}

export default App;

