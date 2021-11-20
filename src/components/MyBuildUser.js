import React from "react";
import "./MyBuild.css";
import axios from "axios";

function MyBuildUser(props) {
  const { mouse, keyboard, headset, mousepad, microphone, id, user_id } = props;

  let mouseAdvice = 0;
  let keyboardAdvice = 0;
  let headsetAdvice = 0;
  let mousepadAdvice = 0;
  let microphoneAdvice = 0;
  if (mouse.advice == "N/A" || mouse.advice == "") {
    mouseAdvice = 0;
  } else {
    mouseAdvice = parseInt(mouse.advice);
  }
  if (keyboard.advice == "N/A" || keyboard.advice == "") {
    keyboardAdvice = 0;
  } else {
    keyboardAdvice = parseInt(keyboard.advice);
  }
  if (headset.advice == "N/A" || headset.advice == "") {
    headsetAdvice = 0;
  } else {
    headsetAdvice = parseInt(headset.advice);
  }
  if (mousepad.advice == "N/A" || mousepad.advice == "") {
    mousepadAdvice = 0;
  } else {
    mousepadAdvice = parseInt(mousepad.advice);
  }
  if (microphone.advice == "N/A" || microphone.advice == "") {
    microphoneAdvice = 0;
  } else {
    microphoneAdvice = parseInt(microphone.advice);
  }
  let sumAdvice = 0;
  sumAdvice =
    mouseAdvice +
      keyboardAdvice +
      headsetAdvice +
      mousepadAdvice +
      microphoneAdvice || 0;
  let sumAdviceShow = sumAdvice || "";

  let mouseBanana = 0;
  let keyboardBanana = 0;
  let headsetBanana = 0;
  let mousepadBanana = 0;
  let microphoneBanana = 0;
  if (mouse.banana == "N/A" || mouse.banana == "") {
    mouseBanana = 0;
  } else {
    mouseBanana = parseInt(mouse.banana);
  }
  if (keyboard.banana == "N/A" || keyboard.banana == "") {
    keyboardBanana = 0;
  } else {
    keyboardBanana = parseInt(keyboard.banana);
  }
  if (headset.banana == "N/A" || headset.banana == "") {
    headsetBanana = 0;
  } else {
    headsetBanana = parseInt(headset.banana);
  }
  if (mousepad.banana == "N/A" || mousepad.banana == "") {
    mousepadBanana = 0;
  } else {
    mousepadBanana = parseInt(mousepad.banana);
  }
  if (microphone.banana == "N/A" || microphone.banana == "") {
    microphoneBanana = 0;
  } else {
    microphoneBanana = parseInt(microphone.banana);
  }
  let sumBanana = 0;
  sumBanana =
    mouseBanana +
      keyboardBanana +
      headsetBanana +
      mousepadBanana +
      microphoneBanana || 0;
  let sumBananaShow = sumBanana || "";

  let mouseMercular = 0;
  let keyboardMercular = 0;
  let headsetMercular = 0;
  let mousepadMercular = 0;
  let microphoneMercular = 0;
  if (mouse.mercular == "N/A" || mouse.mercular == "") {
    mouseMercular = 0;
  } else {
    mouseMercular = parseInt(mouse.mercular);
  }
  if (keyboard.mercular == "N/A" || keyboard.mercular == "") {
    keyboardMercular = 0;
  } else {
    keyboardMercular = parseInt(keyboard.mercular);
  }
  if (headset.mercular == "N/A" || headset.mercular == "") {
    headsetMercular = 0;
  } else {
    headsetMercular = parseInt(headset.mercular);
  }
  if (mousepad.mercular == "N/A" || mousepad.mercular == "") {
    mousepadMercular = 0;
  } else {
    mousepadMercular = parseInt(mousepad.mercular);
  }
  if (microphone.mercular == "N/A" || microphone.mercular == "") {
    microphoneMercular = 0;
  } else {
    microphoneMercular = parseInt(microphone.mercular);
  }
  let sumMercular = 0;
  sumMercular =
    mouseMercular +
      keyboardMercular +
      headsetMercular +
      mousepadMercular +
      microphoneMercular || 0;
  let sumMercularShow = sumMercular || "";

  async function del(id, user_id) {
    const data = {
      userId: user_id,
      id: id,
    };
    await axios.delete("http://localhost:3001/user/build", { data });
  }

  console.log(id, user_id);
  return (
    <div className="App-mm">
      <div className="all-content-mb-mm">
        <div className="content-details-mm">
          {/* <h3 className="title">DETAILS/PRICE LIST</h3> */}

          <div className="grid-dtf-mm">
            <div className="item-dtf-mm">
              <div className="content-dtf-mm">
                <h3 className="title-mm">DETAILS/PRICE LIST</h3>
              </div>
            </div>
            <div className="item-dtf-mm">
              <div className="content-dtf-mm">
                <img
                  className="fav-mm"
                  src="/image/del.png"
                  onMouseOver={e => (e.currentTarget.src = "/image/delred.png")} 
                  onMouseOut={e => (e.currentTarget.src = "/image/del.png")} 
                  onClick={(e) => del(id, user_id)}
                />
              </div>
            </div>
          </div>

          <table className="table" background-color="rgb(31, 31, 31)">
            <tr className="table-title">
              <th>
                <p>PART</p>
              </th>
              <th>
                <p>NAME</p>
              </th>
              <th>
                <p>ADVICE (BAHT)</p>
              </th>
              <th>
                <p>BANANA (BAHT)</p>
              </th>
              <th>
                <p>MERCULAR (BAHT)</p>
              </th>
            </tr>
            <tr>
              <td>
                <p>mouse</p>
              </td>
              <td>
                <p>{mouse.name && mouse.name}</p>
              </td>
              <td>
                <p>{mouse.advice && mouse.advice}</p>
              </td>
              <td>
                <p>{mouse.banana && mouse.banana}</p>
              </td>
              <td>
                <p>{mouse.mercular && mouse.mercular}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>keyboard</p>
              </td>
              <td>
                <p>{keyboard.name && keyboard.name}</p>
              </td>
              <td>
                <p>{keyboard.advice && keyboard.advice}</p>
              </td>
              <td>
                <p>{keyboard.banana && keyboard.banana}</p>
              </td>
              <td>
                <p>{keyboard.mercular && keyboard.mercular}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>headset</p>
              </td>
              <td>
                <p>{headset.name && headset.name}</p>
              </td>
              <td>
                <p>{headset.advice && headset.advice}</p>
              </td>
              <td>
                <p>{headset.banana && headset.banana}</p>
              </td>
              <td>
                <p>{headset.mercular && headset.mercular}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>mousepad</p>
              </td>
              <td>
                <p>{mousepad.name && mousepad.name}</p>
              </td>
              <td>
                <p>{mousepad.advice && mousepad.advice}</p>
              </td>
              <td>
                <p>{mousepad.banana && mousepad.banana}</p>
              </td>
              <td>
                <p>{mousepad.mercular && mousepad.mercular}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>microphone</p>
              </td>
              <td>
                <p>{microphone.name && microphone.name}</p>
              </td>
              <td>
                <p>{microphone.advice && microphone.advice}</p>
              </td>
              <td>
                <p>{microphone.banana && microphone.banana}</p>
              </td>
              <td>
                <p>{microphone.mercular && microphone.mercular}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Total</p>
              </td>
              <td>
                <p></p>
              </td>
              <td>
                <p>{sumAdviceShow}</p>
              </td>
              <td>
                <p>{sumBananaShow}</p>
              </td>
              <td>
                <p>{sumMercularShow}</p>
              </td>
            </tr>
          </table>
        </div>
        {/* {JSON.stringify({build:)} */}
        {console.log(mouse)}
      </div>
    </div>
  );
}

export default MyBuildUser;
