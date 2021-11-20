import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update,add } from "../redux/userSlice";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
import { remove,updateUserID} from "../redux/buildDetailSlice";
import "./SignInFacebook.css";

function SignInFacebook() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  let testuserid = "";
  const [name, setName] = useState();
  const [group, setGroup] = useState();
  const [abc,setAbc] = useState();

  const responseFacebook = async (response) => {

    axios.post("http://localhost:3001/user/", { userId:response.userID });
    setGroup(response.groups);
    setName(response.name);
    setAbc(response.userID);
    dispatch(add({ userID:response.userID }));
  };
 console.log(abc)
  // console.log(allInfo);
  useEffect(() => {
    dispatch(update({ name,group}));
    dispatch(updateUserID({
      userId: user.userID
    }))
    
  }, [user]);
  
  // useEffect(() => {
  //   console.log(`now data => ${name}`);
  //   console.log(`from store => ${user}`);
  // });

  return (
    <div >
      
      <FacebookLogin
        cssClass="btnFacebook"
        appId="384187966594543"
        fields="groups,name"
        autoLoad={false}
        callback={responseFacebook}
        publish_to_groups={true}
        icon={<img className="fa-facebook">
        </img>} textButton = "&nbsp;&nbsp;Sign In with Facebook"    
        // onClick={handleUpdate}
      />
      {/* <p>{JSON.stringify(allInfo)}</p> */}
      
    </div>
  );
}

export default SignInFacebook;
