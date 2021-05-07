import React, { useState } from "react";
import Table from "./components/table";
import Input from "./components/input";
function Main() {
  let [classes, setClasses] = useState("10-20,20-30,30-40,40-50,50-60,60-70,70-200");
  let [highClass, setHighClass] = useState("");
  let [lowClass, setLowClass] = useState("");
  let [frequency, setFrequency] = useState("15,12,13,18,17,27,10");

  let [D_ , setD]=useState("")
  let [A_ , setA]=useState("")
  let [FreXD,setFreXD]=useState("")
  let [CAplus,setCAplus]=useState("")

  let [midPoints, setMidPoints] = useState("");
  let [freXmid,setFreXmid]=useState("")
  let [lessCumulativeFrequency,setLessCumulativeFrequency]=useState("")
  let [greaterCumulativeFrequency,setGreaterCumulativeFrequency]=useState("")
  let [frequencyDensity,setFrequencyDensity]=useState("")
  let [RelativeFrequency,setRelativeFrequency]=useState("")
  let [classRange,setClassRange]=useState("")
  let [PercentageFrequency,setPercentageFrequency]=useState("")


  //sum
  let [frequencyTotal,setFrequencyTotal]=useState('')
  let [sumFixi,setSumFixi]=useState("")
  let [sumFD,setSumFD]=useState("")

  //calculation
  let [x_,setX_]=useState("")
  let [x_2,setX_2]=useState("")

  let [ready, setReady]=useState(false);
  

  function updateClasses(cla) {
    setClasses(() => {
      return cla;
    });
    setReady(false)
  }

  function updateFrequency(fre) {
    setFrequency(() => {
      return fre;
    });
    setReady(false)
  }

  function classReady() {
    //class work //class work//class work//class work//class work
    console.log(classes);
    console.log(frequency);
    let viewClasses = classes.split(",");

    setClasses(viewClasses)
    //setting class view
    let lowClass = viewClasses.map((val) => val.split("-")[0]);
    lowClass = lowClass.map((value) => parseInt(value));
    setLowClass(lowClass);
    let highClass = viewClasses.map((val) => val.split("-")[1]);
    highClass = highClass.map((value) => parseInt(value));

    setHighClass(highClass);
    let middlePoint = lowClass.map((value, index) => {
      return (value + highClass[index]) / 2;
    });
    console.log(middlePoint);

    setMidPoints(() => {
      return middlePoint;
    });
    //class work//class work//class work//class work//class work

    let numFre = frequency.split(",");
    numFre = numFre.map((value) => parseInt(value));

    setFrequency(() => {
      return numFre;
    });
    let totalF=0;
    numFre.map((value)=>totalF+=value)
    setFrequencyTotal(totalF)
    console.log("frequencyTotal : ",totalF)

    //class range
    let classR=lowClass.map((value,index)=>highClass[index]-value)
    setClassRange(classR)
    //class range



    //Less Than Cumulative Frequency

    let lessThanCF=[]
    numFre.map((value,index)=>{
      if(index===0){
        lessThanCF.push(value)
        return value
      }else{
        lessThanCF.push(lessThanCF[lessThanCF.length-1]+value)
       return  lessThanCF[lessThanCF.length-1]+value
      }
    })
    setLessCumulativeFrequency(lessThanCF)

    console.log("lessThanCF :",lessThanCF)


    
    //Less Than Cumulative Frequency

    let greaterThanCF=[]
    numFre=numFre.reverse()
    numFre.map((value,index)=>{
      if(index===0){
        greaterThanCF.push(value)
        return value
      }else{
        greaterThanCF.push(greaterThanCF[greaterThanCF.length-1]+value)
       return  greaterThanCF[greaterThanCF.length-1]+value
      }
    })
    greaterThanCF=greaterThanCF.reverse()
    setGreaterCumulativeFrequency(greaterThanCF)

    console.log("greaterThanCF :",greaterThanCF)
//successful
numFre=numFre.reverse()
let FrequencyD=numFre.map((value,index)=>{
  return (value/classR[index])
})
setFrequencyDensity(()=>{
  return FrequencyD
})

console.log("setFrequencyDensity : ", FrequencyD)


    //frequency work
    //frequency work
    //frequency work
    //frequency work
    let RelativeF=numFre.map((value)=>(value/totalF).toFixed(3))
    setRelativeFrequency(RelativeF)
    console.log("RelativeF :",RelativeF)

    let percentageF=RelativeF.map((value=>(value*100).toFixed(2)+"%"))
    setPercentageFrequency(percentageF)
    console.log("setPercentageFrequency :",percentageF)

    let theA=middlePoint[parseInt((middlePoint.length)/2)]
    setA(theA)
    
    let totalClassR=0
    classR.map((value,index)=>{
      return totalClassR+=value

    })
    let GorClassR=(totalClassR/classR.length)
    let CPlus=true
    if(GorClassR===classR[0]){
      CPlus=true
    }else{
      CPlus=false
    }
    setCAplus(CPlus)

    let theD=middlePoint.map((value)=>{
      if(CPlus){
        console.log("same distance range")
        return ((value-theA)/classR[0])
      }else{
        console.log("NOT same distance range")
        return (value-theA)
      }
      
    })

    setD(theD)

     let frequencyXD=theD.map((value,index)=>{
     return numFre[index]*value
    })
    setFreXD(frequencyXD)


    //fixi

    let fixi=numFre.map((value,index)=>value*middlePoint[index])
    setFreXmid(fixi)

    let sumFixi=0
    fixi.map((value)=>sumFixi+=value)
    setSumFixi(sumFixi)

    let sumFrequencyXD=0
    frequencyXD.map((value)=>{
    return  sumFrequencyXD+=value
    })
    setSumFD(sumFrequencyXD)

    //MAIN CALCULATION


    //X_
    //sortMethod

    
   
    let TheX_;
    if(CPlus){
      TheX_=theA+(sumFrequencyXD/totalF)*classR[0]
      console.log("CPlus : True")
    }else{
      TheX_=theA+(sumFrequencyXD/totalF)
      console.log("CPlus : false")
    }
      
    setX_(TheX_)
    console.log(TheX_)

    //Real method

   

    let TheX2=sumFixi/totalF
    setX_2(TheX2)


    setReady(true)
  }


  //10-20,20-30,30-40,40-50
  //10,55,10,22

  return (
    <div className="">
      <Input
        frequency={frequency}
        classes={classes}
        setStateF={updateFrequency}
        setStateC={updateClasses}
        send={classReady}
      />
      {ready?<Table
        lcf={lessCumulativeFrequency}
        hcf={greaterCumulativeFrequency}
        classRange={classRange}
        freXmid={freXmid}
        frequencyDensity={frequencyDensity}  
        RelativeFrequency={RelativeFrequency}
        PercentageFrequency={PercentageFrequency}
        CAplus={CAplus}
        D_={D_}
        A_={A_}
        FreXD={FreXD}

        highClass={highClass}
        lowClass={lowClass}
        frequency={frequency}
        classes={classes}
        midPoints={midPoints}

        frequencyTotal={frequencyTotal}
        sumFixi={sumFixi}
        
        sumFD={sumFD}
        x_={x_}
        x_2={x_2}

      />:0}
    </div>
  );
}

export default Main;
