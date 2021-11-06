import React from "react";
import "./MyBuild.css";
import { Link, Switch, Route, onChange, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function Fav() {
  const [dataFav, setDataFav] = useState([
    {
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
            model: "",
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
            model: "",
          },
        },
      ],
    },
  ]);

  useEffect(async () => {
    const res = await axios.get(`http://localhost:3001/user/build/123`);
    setDataFav(res.data);
  }, []);

  console.log(dataFav);

  return (
    <div className="App">
      <p>Hello Fav</p>

      {/* {user.map((item) => {
            return (
                <div className="item" key={item.}>
                    <p>da</p>
                </div>
            )
        })} */}

      {/* {dataFav.build_set[0].microphone.name} */}

            {/* <div className="all-content-mb">
                <h2 className="title-1">Your Gear</h2>
                <div className="grid-mb">
                    <div className="item">
                        <div className="content-mb">
                            <img src={mouse.pic} height="60px" width="60px"/>
                            <p className="font-title">{mouse.name}</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="content-mb">
                            <img src={keyboard.pic} height="60px" width="60px"/>
                            <p className="font-title">{keyboard.name}</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="content-mb">
                            <img src={headset.pic} height="60px" width="60px"/>
                            <p className="font-title">{headset.name}</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="content-mb">
                            <img src={mousepad.pic} height="60px" width="60px"/>
                            <p className="font-title">{mousepad.name}</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="content-mb">
                            <img src={microphone.pic} height="60px" width="60px"/>
                            <p className="font-title">{microphone.name}</p>
                        </div>
                    </div>
                </div>
            </div> */}

      <h1>JSON</h1>
      {JSON.stringify(dataFav)}
    </div>
  );
}

export default Fav;
