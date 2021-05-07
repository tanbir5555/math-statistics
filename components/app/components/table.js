import React from "react";
import './style/table.css'
export default function Table({CAplus,x_,x_2,sumFD,FreXD,D_,A_,sumFixi,frequencyTotal,PercentageFrequency,RelativeFrequency,frequencyDensity,freXmid,classRange,lcf,hcf,highClass,lowClass,frequency,classes,midPoints}) {
  return (
    <div className="container">
      <table id="customers">
      <tbody>
          
       
        <tr>
          <td><strong>classes</strong></td>
          <td><strong>frequency</strong></td>
          <td><strong>Less Than  Cumulative Frequency </strong></td>
          <td><strong>Greater Than  Cumulative Frequency</strong></td>
          <td><strong>highClass</strong></td>
          <td><strong>lowClass</strong></td>
          <td><strong>midPoints</strong></td>

          <td><strong>classRange</strong></td>
          <td><strong>fixi</strong></td>
          <td><strong>frequencyDensity</strong></td>
          <td><strong>RelativeFrequency</strong></td>
          <td><strong>PercentageFrequency</strong></td>
          {CAplus?<td><strong>d=(x-{A_})/range</strong></td>:<td><strong>d=(x-{A_})</strong></td>}
    
          <td><strong>Frequency*d</strong></td>
          <td><strong>Frequency*middlePoint</strong></td>


          {/* <td><strong></strong></td> */}
        </tr>

{classes.map((value,index)=>{

  return(
    <tr key={index}>
          <td>{value}</td>
          <td>{frequency[index]}</td>
          <td>{lcf[index]}</td>
          <td>{hcf[index]}</td>
          <td>{lowClass[index]}</td>
          <td>{highClass[index]}</td>
          <td>{midPoints[index]}</td>

          <td>{classRange[index]}</td>
          <td>{freXmid[index]}</td>
          <td>{frequencyDensity[index]}</td>
          <td>{RelativeFrequency[index]}</td>
          <td>{PercentageFrequency[index]}</td>
          <td>{D_[index]}</td>
          <td>{FreXD[index]}</td>
          <td>{freXmid[index]}</td>

          
      </tr>
  )
})}
        
        
       </tbody>
      </table>

      <div className='answers'>  
      {CAplus?<div className=''><strong className=''> Range (C): </strong> {classRange[0]}  </div>:null}
      <div className=''><strong className=''> A : </strong> {A_}  </div>
      <div className=''><strong className=''>Sum of Frequency (N) : </strong> {frequencyTotal}  </div>
      <div className=''><strong className=''> Sum of Frequency & d (x) : </strong> {sumFD}  </div>
      <div className=''><strong className=''> Sum of Frequency & midPoints (x) (sum fixi) : </strong> {sumFixi}  </div>
      <div className=''><strong className=''> x_ (sortMethod) : </strong> {x_}  </div>
      <div className=''><strong className=''> x_ (MainMethod) : </strong> {x_2} </div>  
       </div>
    </div>
  );
}
