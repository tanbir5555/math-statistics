import React from "react";
import './style/table.css'
export default function Table({CAplus,x_,x_2,sumFD,FreXD,D_,A_,sumFixi,frequencyTotal,PercentageFrequency,RelativeFrequency,frequencyDensity,freXmid,classRange,lcf,hcf,highClass,lowClass,frequency,classes,midPoints}) {
  return (
    <div className="container">
      <table id="customers">
      <tbody>
          
       
        <tr>
          <td><strong>Classes</strong></td>
          <td><strong>Frequency (fi)</strong></td>
          <td><strong>Less Than Cumulative Frequency (L.c.f)</strong></td>
          <td><strong>Greater Than Cumulative Frequency (M.c.f)</strong></td>
          <td><strong>Upper Class Limit (u/h)</strong></td>
          <td><strong>Lower Class Limit (s/L)</strong></td>
          <td><strong>Middle Points (xi)</strong></td>

          <td><strong>Class Range (c)</strong></td>
         
          <td><strong>Frequency Density (fi/c)</strong></td>
          <td><strong>Relative Frequency (fi/N)</strong></td>
          <td><strong>Percentage Frequency (fi/N)*100%</strong></td>
          {CAplus?<td><strong>d=(x-{A_})/range</strong></td>:<td><strong>d=(x-{A_})</strong></td>}

          <td><strong>Frequency * d</strong></td>
          <td><strong>Frequency * Mid Points (fixi)</strong></td>


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
      {CAplus?<div className='ans'><strong className='strong'> Range (C): </strong> {classRange[0]}  </div>:null}
      <div className='ans'><strong className='strong'> A : </strong> {A_}  </div>
      <div className='ans'><strong className='strong'>Sum of Frequency (N) : </strong> {frequencyTotal}  </div>
      <div className='ans'><strong className='strong'> Sum of Frequency & d (x) : </strong> {sumFD}  </div>
      <div className='ans'><strong className='strong'> Sum of Frequency & midPoints (x) (sum fixi) : </strong> {sumFixi}  </div>
      <div className='ans'>{CAplus?<strong className='strong'> x_=A+(sumFd/N)*c (sortMethod) : </strong>:<strong className='strong'> x_=A+(sumFd/N) (sortMethod) : </strong>} {x_}  </div>
      <div className='ans'><strong className='strong'> x_=sumFixi/N (MainMethod) : </strong> {x_2} </div>  
       </div>
    </div>
  );
}
