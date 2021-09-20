

import React, { useState, useEffect, Component, sort } from "react";
import AppBanner from "../components/AppBanner";
import AppCategory from "../components/AppCategory";
import ContentRecommend from "../components/ContentRecommend";
import Footer from "../components/Footer";

function PageHome(){
    return (
        <div>
            
            <AppCategory/>
            <ContentRecommend/>
            <Footer/>
        </div>
    )
}

export default PageHome;