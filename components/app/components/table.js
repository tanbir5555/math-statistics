import React from "react";
import './style/table.css'
export default function Table({highClass,lowClass,frequency,classes,midPoints}) {
  return (
    <div className="container">
      <table id="customers">
      <tbody>
          
       
        <tr>
          <td><strong>classes</strong></td>
          <td><strong>frequency</strong></td>
          <td><strong>highClass</strong></td>
          <td><strong>lowClass</strong></td>
          <td><strong>midPoints</strong></td>
          {/* <td><strong></strong></td> */}
        </tr>

{classes.map((value,index)=>{

  return(
    <tr key={index}>
          <td>{value}</td>
          <td>{frequency[index]}</td>
          <td>{lowClass[index]}</td>
          <td>{highClass[index]}</td>
          <td>{midPoints[index]}</td>
          
      </tr>
  )
})}
        
        
       </tbody>
      </table>
    </div>
  );
}
