import React from "react";
import "./style/input.css";
export default function Input({frequency,classes,setStateC,setStateF}) {
    
  return (
    <div className="container">
      <h3 className="header">Making Statistics Math App</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h3 className="header small">
          Please Enter your <strong>classes</strong>
        </h3>
        <div className="inputs-area">
          {" "}
          <textarea onChange={(e)=>{setStateC(e.target.value)}} className="input" placeholder="10-20,20-30....">
            {classes}
          </textarea>{" "}
        </div>
        <h3 className="header small">
          Please Enter your <strong>Frequency</strong>{" "}
        </h3>
        <div className="inputs-area">
          {" "}
          <textarea onChange={(e)=>{setStateF(e.target.value)}} className="input" placeholder="5,8,7,10,2,1,3....">
            {frequency}
          </textarea>{" "}
        </div>
        <button className="btn-send">Send</button>
      </form>
    </div>
  );
}
