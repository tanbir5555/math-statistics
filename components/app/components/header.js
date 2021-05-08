import React from 'react'
import './style/input.css'
import { Link } from "react-router-dom";
export default function Header({mode,setMode}) {
    return (
        <div>
            <div className="container">
               {mode?<Link onClick={()=>{setMode(false)}}  className="btn-send" to="/React-statistics-table-test">Switch</Link>:<Link onClick={()=>{setMode(true)}} className="btn-send" to="/React-statistics-table-test/exact">Switch</Link>} 
            </div>
        </div>
    )
}
