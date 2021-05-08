import React from 'react'
import "./style/input.css";
export default function InputType2({inputRange,updateInputRange,updateStart,updateEnd,startPoint,endPoint,processDone,process,clearAll,classes,setStateC,send}) {
   
    let show;

    let inputStyles={
        height:"80px",
    }
    if(processDone){
        show=(
           <div className=''>  
            <h3 className="header small">
            Enter distance or range of each <strong>class</strong>
          </h3>
          <div className="inputs-area">
            {" "}
            <input style={inputStyles} value={inputRange} onChange={(e)=>{updateInputRange(e.target.value)}} className="input" placeholder="10-20,20-30...."/>
              
            
          </div>

            <h3 className="header small">
            Enter where to start <strong>classes</strong>
          </h3>
          <div className="inputs-area">
            {" "}
            <input style={inputStyles} value={startPoint} onChange={(e)=>{updateStart(e.target.value)}} className="input" placeholder="10-20,20-30...."/>
              
            
          </div>

          <h3 className="header small">
          Enter where to End <strong>class</strong>
          </h3>
          <div className="inputs-area">
            {" "}
            <input style={inputStyles} value={endPoint} onChange={(e)=>{updateEnd(e.target.value)}} className="input" placeholder="10-20,20-30...."/>
              
            
          </div>
           
            </div>
        )
    }else{
        show=(
            <div className=''>  
            <h3 className="header small">
            Please Enter your <strong>classes</strong>
          </h3>
          <div className="inputs-area">
            {" "}
            <textarea value={classes} onChange={(e)=>{setStateC(e.target.value)}} className="input" placeholder="10-20,20-30....">
              
            </textarea>{" "}
          </div>
           
            </div>

        )
    }
    return (
      <div className="container">
        <h3 className="header">Making Statistics Math App</h3>
        <button onClick={()=>{clearAll()}} className='btn-clear'>  Clear </button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {show}
          {/* <h3 className="header small">
            Please Enter your <strong>Frequency</strong>{" "}
          </h3>
          <div className="inputs-area">
            {" "}
            <textarea value={frequency} onChange={(e)=>{setStateF(e.target.value)}} className="input" placeholder="5,8,7,10,2,1,3....">
              
            </textarea>{" "}
          </div> */}
          <button onClick={()=>{process()}} className="btn-send">Process</button>
          {processDone?<button onClick={()=>{send()}} className="btn-send">Send</button>:null}
        </form>
      </div>
    );
  }
  