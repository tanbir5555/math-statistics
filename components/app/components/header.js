import React from 'react'
import './style/input.css'

export default function Header({mode,setMode}) {
    return (
        <div>
            <div className="container">
               {mode?<button onClick={()=>{setMode(false)}}  className="btn-send" >Switch</button>:<button onClick={()=>{setMode(true)}} className="btn-send" >Switch</button>} 
            </div>
        </div>
    )
}
