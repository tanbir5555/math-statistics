import React from "react";
import "./style/input.css";
export default function Input({clearAll,frequency,classes,setStateC,setStateF,send}) {
    
  return (
    <div className="container">
      <h3 className="header">Making Statistics Math App</h3>
      <button onClick={()=>{clearAll()}} className='btn-clear'>  Clear </button>
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
          <textarea value={classes} onChange={(e)=>{setStateC(e.target.value)}} className="input" placeholder="10-20,20-30....">
            
          </textarea>{" "}
        </div>
        <h3 className="header small">
          Please Enter your <strong>Frequency</strong>{" "}
        </h3>
        <div className="inputs-area">
          {" "}
          <textarea value={frequency} onChange={(e)=>{setStateF(e.target.value)}} className="input" placeholder="5,8,7,10,2,1,3....">
            
          </textarea>{" "}
        </div>
        <button onClick={()=>{send()}} className="btn-send">Send</button>
      </form>
    </div>
  );
}
