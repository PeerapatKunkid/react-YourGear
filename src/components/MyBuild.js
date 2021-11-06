import React from "react";


import { Link, Switch, Route, onChange, useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

function MyBuild(){

    const buildDetail = useSelector((state) => state.buildDetail);
    console.log(buildDetail)
    function fav(){
        axios.post("http://localhost:3001/user/build", { build: buildDetail});
    }

    const { product5 } = useParams();

    const [mouse, setMouse] = useState({
        name : buildDetail.mouse.name || "Mouse",
        pic : buildDetail.mouse.url || "/image/iconmouse.png"
    });
    const [keyboard, setKeyboard] = useState({
        name : buildDetail.keyboard.name ||"Keyboard",
        pic : buildDetail.keyboard.url ||"/image/iconkeyboard.png"
    });
    const [headset, setHeadset] = useState({
        name : buildDetail.headset.name ||"Headset",
        pic : buildDetail.headset.url ||"/image/iconheadset.png"
    });
    const [mousepad, setMousepad] = useState({
        name : buildDetail.mousepad.name ||"Mousepad",
        pic : buildDetail.mousepad.url ||"/image/iconmousepad.png"
    });
    const [microphone, setMicrophone] = useState({
        name : buildDetail.microphone.name ||"Microphone",
        pic : buildDetail.microphone.url ||"/image/iconmicrophone.png"
    });

    const [products, setProducts] = useState([
      {
          
            _id: "",
            key: "",
            name: "",
            category: "",
            advice: [],
            banana: [],
            mercular: [],
         
      },
    ]);

    let mouseAdvice = 0;
    let keyboardAdvice = 0;
    let headsetAdvice = 0;
    let mousepadAdvice = 0;
    let microphoneAdvice = 0;
    if(buildDetail.mouse.advice == "N/A" || buildDetail.mouse.advice == ""){
        mouseAdvice = 0;
    }else{
        mouseAdvice = parseInt(buildDetail.mouse.advice);
    }
    if(buildDetail.keyboard.advice == "N/A" || buildDetail.keyboard.advice == ""){
        keyboardAdvice = 0;
    }else{
        keyboardAdvice = parseInt(buildDetail.keyboard.advice);
    }
    if(buildDetail.headset.advice == "N/A" || buildDetail.headset.advice == ""){
        headsetAdvice = 0;
    }else{
        headsetAdvice = parseInt(buildDetail.headset.advice);
    }
    if(buildDetail.mousepad.advice == "N/A" || buildDetail.mousepad.advice == ""){
        mousepadAdvice = 0;
    }else{
        mousepadAdvice = parseInt(buildDetail.mousepad.advice);
    }
    if(buildDetail.microphone.advice == "N/A" || buildDetail.microphone.advice == ""){
        microphoneAdvice = 0;
    }else{
        microphoneAdvice = parseInt(buildDetail.microphone.advice);
    }
    const sumAdvice = mouseAdvice + keyboardAdvice + headsetAdvice + mousepadAdvice + microphoneAdvice;

    let mouseBanana = 0;
    let keyboardBanana = 0;
    let headsetBanana = 0;
    let mousepadBanana = 0;
    let microphoneBanana = 0;
    if(buildDetail.mouse.banana == "N/A" || buildDetail.mouse.banana == ""){
        mouseBanana = 0;
    }else{
        mouseBanana = parseInt(buildDetail.mouse.banana);
    }
    if(buildDetail.keyboard.banana == "N/A" || buildDetail.keyboard.banana == ""){
        keyboardBanana = 0;
    }else{
        keyboardBanana = parseInt(buildDetail.keyboard.banana);
    }
    if(buildDetail.headset.banana == "N/A" || buildDetail.headset.banana ==""){
        headsetBanana = 0;
    }else{
        headsetBanana = parseInt(buildDetail.headset.banana);
    }
    if(buildDetail.mousepad.banana == "N/A" || buildDetail.mousepad.banana == ""){
        mousepadBanana = 0;
    }else{
        mousepadBanana = parseInt(buildDetail.mousepad.banana);
    }
    if(buildDetail.microphone.banana == "N/A" || buildDetail.microphone.banana == ""){
        microphoneBanana = 0;
    }else{
        microphoneBanana = parseInt(buildDetail.microphone.banana);
    }
    const sumBanana = mouseBanana + keyboardBanana + headsetBanana + mousepadBanana + microphoneBanana;

    let mouseMercular = 0;
    let keyboardMercular = 0;
    let headsetMercular = 0;
    let mousepadMercular = 0;
    let microphoneMercular = 0;
    if(buildDetail.mouse.mercular == "N/A" || buildDetail.mouse.mercular ==""){
        mouseMercular = 0;
    }else{
        mouseMercular = parseInt(buildDetail.mouse.mercular);
    }
    if(buildDetail.keyboard.mercular == "N/A" || buildDetail.keyboard.mercular ==""){
        keyboardMercular = 0;
    }else{
        keyboardMercular = parseInt(buildDetail.keyboard.mercular);
    }
    if(buildDetail.headset.mercular == "N/A" || buildDetail.headset.mercular ==""){
        headsetMercular = 0;
    }else{
        headsetMercular = parseInt(buildDetail.headset.mercular);
    }
    if(buildDetail.mousepad.mercular == "N/A" || buildDetail.mousepad.mercular ==""){
        mousepadMercular = 0;
    }else{
        mousepadMercular = parseInt(buildDetail.mousepad.mercular);
    }
    if(buildDetail.microphone.mercular == "N/A" || buildDetail.microphone.mercular ==""){
        microphoneMercular = 0;
    }else{
        microphoneMercular = parseInt(buildDetail.microphone.mercular);
    }
    const sumMercular = mouseMercular + keyboardMercular + headsetMercular + mousepadMercular + microphoneMercular;

    return(
        <div className="App">
            <div className="all-content-mb">
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
                <div className="content-details">
                    {/* <h3 className="title">DETAILS/PRICE LIST</h3> */}

                    <div class="grid-dtf">
                        <div class="item-dtf">
                            <div class="content-dtf">
                                <h3 className="title">DETAILS/PRICE LIST</h3>
                            </div>
                        </div>
                        <div class="item-dtf">
                            <div class="content-dtf">
                                <img className="fav" src="/image/fav1.png" onClick={fav}/>
                            </div>
                        </div>
                        
                    </div>

                    <table className="table">
                        <tr className="table-title">
                            <th>
                                <p>PART</p>
                            </th>
                            <th>
                                <p>NAME</p>
                            </th>
                            <th>
                                <p>ADVICE</p>
                            </th>
                            <th>
                                <p>BANANA</p>
                            </th>
                            <th>
                                <p>MERCULAR</p>
                            </th>
                        </tr>
                        <tr className="table-mouse">
                            <td>
                                <p>mouse</p>
                            </td>
                            <td>
                                <p>{buildDetail.mouse.name}</p>
                            </td>
                            <td>
                                <p>{buildDetail.mouse.advice}</p>
                            </td>
                            <td>
                                <p>{buildDetail.mouse.banana}</p>
                            </td>
                            <td>
                                <p>{buildDetail.mouse.mercular}</p>
                            </td>
                        </tr>
                        <tr className="table-keyboard">
                            <td>
                                <p>keyboard</p>
                            </td>
                            <td>
                                <p>{buildDetail.keyboard.name}</p>
                            </td>
                            <td>
                                <p>{buildDetail.keyboard.advice}</p>
                            </td>
                            <td>
                                <p>{buildDetail.keyboard.banana}</p>
                            </td>
                            <td>
                                <p>{buildDetail.keyboard.mercular}</p>
                            </td>
                        </tr>
                        <tr className="table-headset">
                            <td>
                                <p>headset</p>
                            </td>
                            <td>
                                <p>{buildDetail.headset.name}</p>
                            </td>
                            <td>
                                <p>{buildDetail.headset.advice}</p>
                            </td>
                            <td>
                                <p>{buildDetail.headset.banana}</p>
                            </td>
                            <td>
                                <p>{buildDetail.headset.mercular}</p>
                            </td>
                        </tr>
                        <tr className="table-mousepad">
                            <td>
                                <p>mousepad</p>
                            </td>
                            <td>
                                <p>{buildDetail.mousepad.name}</p>
                            </td>
                            <td>
                                <p>{buildDetail.mousepad.advice}</p>
                            </td>
                            <td>
                                <p>{buildDetail.mousepad.banana}</p>
                            </td>
                            <td>
                                <p>{buildDetail.mousepad.mercular}</p>
                            </td>
                        </tr>
                        <tr className="table-microphone">
                            <td>
                                <p>microphone</p>
                            </td>
                            <td>
                                <p>{buildDetail.microphone.name}</p>
                            </td>
                            <td>
                                <p>{buildDetail.microphone.advice}</p>
                            </td>
                            <td>
                                <p>{buildDetail.microphone.banana}</p>
                            </td>
                            <td>
                                <p>{buildDetail.microphone.mercular}</p>
                            </td>
                        </tr>
                        <tr className="table-microphone">
                            <td>
                                <p>Total</p>
                            </td>
                            <td>
                                <p></p>
                            </td>
                            <td>
                                <p>{sumAdvice}</p>
                            </td>
                            <td>
                                <p>{sumBanana}</p>
                            </td>
                            <td>
                                <p>{sumMercular}</p>
                            </td>
                        </tr>
                    </table>
                </div>
                    {/* {JSON.stringify({build:buildDetail})} */}

            </div>

        </div>

    )
}

export default MyBuild;