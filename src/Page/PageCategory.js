
import React, { useState, useEffect, Component, sort } from "react";
import App from "../App";
import AppBanner from "../components/AppBanner";
import AppCategory from "../components/AppCategory";
import ContentRecommend from "../components/ContentRecommend";
import Footer from "../components/Footer";
import KeyboardCategory from "../components/KeyboardCategory";

function PageCategory (){
    return (
        <div>
        <AppBanner/>
        <KeyboardCategory/>
        
        </div>
    )
}

export default PageCategory