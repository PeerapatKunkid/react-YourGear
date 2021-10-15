import axios from "axios";
import React, { useState, useEffect, Component, sort } from "react";
import { Link, Switch, Route, onChange } from "react-router-dom";

function LoginPage() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    console.log("test"+name,email)
  return (
    <div>
    <from>
      <input className="fromItem" type="text" placeholder="name" onChanege={(e) => setName(e.target.value)}/>
      <input className="fromItem" type="text" placeholder="email" onChanege={(e) => setEmail(e.target.value)}/>
      <button className="updateButton">Update</button>
      </from>
    </div>
    
  );
}

export default LoginPage;
