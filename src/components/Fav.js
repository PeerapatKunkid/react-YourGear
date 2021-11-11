import React from "react";
import "./Fav.css";
import { Link, Switch, Route, onChange, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import MyBuildUser from "./MyBuildUser";

function Fav() {
  const [dataFav, setDataFav] = useState({
    _id: "",
    user_id: "",
    build_set: [
      {
        id: "",
        userId: "",
        mouse: {
          title: "Mouse",
          pic: "/image/iconmouse.png",
          name: "",
          url: "",
          advice: "",
          mercular: "",
          banana: "",
        },
        keyboard: {
          title: "Keyboard",
          pic: "/image/iconkeyboard.png",
          name: "",
          url: "",
          advice: "",
          banana: "",
          mercular: "",
          model: "",
        },
        headset: {
          title: "Headset",
          pic: "/image/iconheadset.png",
          name: "",
          url: "",
          advice: "",
          banana: "",
          mercular: "",
          model: "",
        },
        mousepad: {
          title: "Mousepad",
          pic: "/image/iconmousepad.png",
          name: "",
          url: "",
          advice: "",
          banana: "",
          mercular: "",
          model: "",
        },
        microphone: {
          title: "Microphone",
          pic: "/image/iconmicrophone.png",
          name: "",
          url: "",
          advice: "",
          mercular: "",
          banana: "",
        },
      },
    ],
  });

  useEffect(async () => {
    const res = await axios.get(`http://localhost:3001/user/build/123`);
    setDataFav(res.data);
  }, [dataFav]);

  return (
    <div className="App-fav">
      <div className="all-content-fav">
        <h2 className="title-fav">My Favorite</h2>
        {dataFav.build_set &&
          dataFav.build_set.map((item, index) => {
            return (
              <div className="content-map">
                <div className="grid-fav">
                  <div className="item">
                    <div className="content-fav">
                      <img
                        src={item.mouse.url || "/image/iconmouse.png"}
                        height="60px"
                        width="60px"
                      />
                      <p className="font-title">{item.mouse.name || "Mouse"}</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="content-fav">
                      <img
                        src={item.keyboard.url || "/image/iconkeyboard.png"}
                        height="60px"
                        width="60px"
                      />
                      <p className="font-title">
                        {item.keyboard.name || "Keyboard"}
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="content-fav">
                      <img
                        src={item.headset.url || "/image/iconheadset.png"}
                        height="60px"
                        width="60px"
                      />
                      <p className="font-title">
                        {item.headset.name || "Headset"}
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="content-fav">
                      <img
                        src={item.mousepad.url || "/image/iconmousepad.png"}
                        height="60px"
                        width="60px"
                      />
                      <p className="font-title">
                        {item.mousepad.name || "Mousepad"}
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="content-fav">
                      <img
                        src={item.microphone.url || "/image/iconmicrophone.png"}
                        height="60px"
                        width="60px"
                      />
                      <p className="font-title">
                        {item.microphone.name || "Microphone"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="MyBuildUser">
                  <MyBuildUser
                    mouse={{
                      name: item.mouse.name,
                      advice: item.mouse.advice,
                      banana: item.mouse.banana,
                      mercular: item.mouse.mercular,
                    }}
                    keyboard={{
                      name: item.keyboard.name,
                      advice: item.keyboard.advice,
                      banana: item.keyboard.banana,
                      mercular: item.keyboard.mercular,
                    }}
                    headset={{
                      name: item.headset.name,
                      advice: item.headset.advice,
                      banana: item.headset.banana,
                      mercular: item.headset.mercular,
                    }}
                    mousepad={{
                      name: item.mousepad.name,
                      advice: item.mousepad.advice,
                      banana: item.mousepad.banana,
                      mercular: item.mousepad.mercular,
                    }}
                    microphone={{
                      name: item.microphone.name,
                      advice: item.microphone.advice,
                      banana: item.microphone.banana,
                      mercular: item.microphone.mercular,
                    }}
                    id={item.id}
                    user_id={item.userId}
                  />
                </div>
              </div>
            );
          })}
      </div>

      {/* <h1>JSON</h1>
      {JSON.stringify(dataFav)} */}
    </div>
  );
}

export default Fav;
