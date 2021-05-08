import React, { useState } from "react";
import Table from "./components/table";
import Input from "./components/input";
import InputType2 from "./components/inputType2";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Main() {
  let [inputClasses, setInputClasses] = useState(
    "10-20,20-30,30-40,40-50,50-60,60-70,70-200"
  );
  let [inputClasses2, setInputClasses2] = useState("5,6,9,5,7,8,5");
  let [processDone, setProcessDone] = useState(false);
  let [startPoint,setStartPoint]=useState("")
  let [endPoint,setEndPoint]=useState("")
  let [inputRange,setInputRange]=useState("")

  let [inputFrequency, setInputFrequency] = useState("15,12,13,18,17,27,10");

  let [classes, setClasses] = useState("");
  let [highClass, setHighClass] = useState("");
  let [lowClass, setLowClass] = useState("");
  let [frequency, setFrequency] = useState("");

  let [D_, setD] = useState("");
  let [A_, setA] = useState("");
  let [FreXD, setFreXD] = useState("");
  let [CAplus, setCAplus] = useState("");

  let [midPoints, setMidPoints] = useState("");
  let [freXmid, setFreXmid] = useState("");
  let [lessCumulativeFrequency, setLessCumulativeFrequency] = useState("");
  let [greaterCumulativeFrequency, setGreaterCumulativeFrequency] = useState(
    ""
  );
  let [frequencyDensity, setFrequencyDensity] = useState("");
  let [RelativeFrequency, setRelativeFrequency] = useState("");
  let [classRange, setClassRange] = useState("");
  let [PercentageFrequency, setPercentageFrequency] = useState("");

  //sum
  let [frequencyTotal, setFrequencyTotal] = useState("");
  let [sumFixi, setSumFixi] = useState("");
  let [sumFD, setSumFD] = useState("");

  //calculation
  let [x_, setX_] = useState("");
  let [x_2, setX_2] = useState("");

  let [ready, setReady] = useState(false);

  function updateClasses(cla) {
    setInputClasses(() => {
      return cla;
    });

    clearVal();
  }

  function updateClasses2(cla) {
    setInputClasses2(cla);
  }
  function updateInputRange(ran){
    setInputRange(ran)
  }
  function updateStart(st){
    setStartPoint(st)
  }
  function updateEnd(en){
    setEndPoint(en)
  }
  function process() {
    let classesNew = inputClasses2.split(",");
    classesNew = classesNew.map((value) => parseInt(value));
    let sortClass = classesNew.sort(function (a, b) {
      return a - b;
    });
    let maxValClass = sortClass[sortClass.length - 1];
    let minValClass = sortClass[0];
    alert("min : " + minValClass + " max : " + maxValClass);
    let range = prompt("what would be the range of each class ?");
    let start = prompt("where to Start ?");
    start = parseFloat(start);
    let end = prompt("where to end ?");
    end = parseFloat(end);
    range = parseFloat(range);

    let rowCount = function () {
      let total = start;
      let numCounct = 0;
      while (total < end) {
        total += range;
        numCounct += 1;
      }
      //console.log(numCounct)
      return numCounct;
    };
    let upperClass = [],
      lowerClass = [],
      Frequency=[]
    for (let x = 0; x < rowCount(); x++) {
      lowerClass.push(start + x * range);
      upperClass.push(start + x * range + range);
      let condition=classesNew.filter((e)=>{
        return e>lowerClass[x] && e<upperClass[x];
      })
      // let howMany=0
      // classesNew.map((value)=>{
        
      //   if(value>=lowerClass[x] && value<upperClass[x]){
      //    howMany+=1
      //   }else{
          
      //   }
      // })
      Frequency.push(condition.length)
      console.log("condition :",condition)
    }
    
    setFrequency(Frequency)
    console.log(lowerClass);
    console.log(upperClass);

    let classStructure = upperClass.map((value, index) => {
      let StringLow = lowerClass[index].toString();
      let StringHigh = value.toString();
      return StringLow + "-" + StringHigh;
    });
    console.log(classStructure);
    setClasses(classStructure)
    
    General(classStructure,Frequency)
    setProcessDone(false)
    // console.log(rowCount())

  }

  function updateFrequency(fre) {
    setInputFrequency(() => {
      return fre;
    });

    clearVal();
  }
  function clearAll() {
    setInputFrequency("");
    setInputClasses("");
    clearVal();
  }
  function clearVal() {
    setInputClasses2("");
    setFrequency("");
    setClasses("");
    setHighClass("");
    setLowClass("");
    setReady(false);
    setD("");
    setA("");
    setFreXD("");
    setCAplus("");
    setMidPoints("");
    setFreXmid("");
    setLessCumulativeFrequency("");
    setGreaterCumulativeFrequency("");
    setFrequencyDensity("");
    setRelativeFrequency("");
    setClassRange("");
    setPercentageFrequency("");
    setFrequencyTotal("");
    setSumFixi("");
    setSumFD("");
    setX_("");
    setX_2("");
  }
  function classReady() {
    clearVal();
    //class work //class work//class work//class work//class work
    //console.log(classes);
    //console.log(frequency);
    // console.log(classes)
    let viewClasses = inputClasses.split(",");

    setClasses(viewClasses);
    General(viewClasses,inputFrequency.split(","))
    //setting class view
    
  }

  function General(viewClasses,FREQUENCY){
    let lowClass = viewClasses.map((val) => val.split("-")[0]);
    lowClass = lowClass.map((value) => parseInt(value));
    setLowClass(lowClass);
    let highClass = viewClasses.map((val) => val.split("-")[1]);
    highClass = highClass.map((value) => parseInt(value));

    setHighClass(highClass);
    let middlePoint = lowClass.map((value, index) => {
      return (value + highClass[index]) / 2;
    });
    //console.log(middlePoint);

    setMidPoints(() => {
      return middlePoint;
    });
    //class work//class work//class work//class work//class work

    let numFre = FREQUENCY;
    numFre = numFre.map((value) => parseInt(value));

    setFrequency(() => {
      return numFre;
    });

    let totalF = 0;
    numFre.map((value) => (totalF += value));
    setFrequencyTotal(totalF);
    //console.log("frequencyTotal : ",totalF)

    //class range
    let classR = lowClass.map((value, index) => highClass[index] - value);
    setClassRange(classR);
    //class range

    //Less Than Cumulative Frequency

    let lessThanCF = [];
    numFre.map((value, index) => {
      if (index === 0) {
        lessThanCF.push(value);
        return value;
      } else {
        lessThanCF.push(lessThanCF[lessThanCF.length - 1] + value);
        return lessThanCF[lessThanCF.length - 1] + value;
      }
    });
    setLessCumulativeFrequency(lessThanCF);

    //console.log("lessThanCF :",lessThanCF)

    //Less Than Cumulative Frequency

    let greaterThanCF = [];
    numFre = numFre.reverse();
    numFre.map((value, index) => {
      if (index === 0) {
        greaterThanCF.push(value);
        return value;
      } else {
        greaterThanCF.push(greaterThanCF[greaterThanCF.length - 1] + value);
        return greaterThanCF[greaterThanCF.length - 1] + value;
      }
    });
    greaterThanCF = greaterThanCF.reverse();
    setGreaterCumulativeFrequency(greaterThanCF);

    //console.log("greaterThanCF :",greaterThanCF)
    //successful
    numFre = numFre.reverse();
    let FrequencyD = numFre.map((value, index) => {
      return (value / classR[index]).toFixed(3);
    });
    setFrequencyDensity(() => {
      return FrequencyD;
    });

    //console.log("setFrequencyDensity : ", FrequencyD)

    //frequency work
    //frequency work
    //frequency work
    //frequency work
    let RelativeF = numFre.map((value) => (value / totalF).toFixed(3));
    setRelativeFrequency(RelativeF);
    //console.log("RelativeF :",RelativeF)

    let percentageF = RelativeF.map((value) => (value * 100).toFixed(2) + "%");
    setPercentageFrequency(percentageF);
    //console.log("setPercentageFrequency :",percentageF)

    let theA = middlePoint[parseInt(middlePoint.length / 2)];
    setA(theA);

    let totalClassR = 0;
    classR.map((value, index) => {
      return (totalClassR += value);
    });
    let GorClassR = totalClassR / classR.length;
    let CPlus = true;
    if (GorClassR === classR[0]) {
      CPlus = true;
    } else {
      CPlus = false;
    }
    setCAplus(CPlus);

    let theD = middlePoint.map((value) => {
      if (CPlus) {
        //console.log("same distance range")
        return (value - theA) / classR[0];
      } else {
        //console.log("NOT same distance range")
        return value - theA;
      }
    });

    setD(theD);

    let frequencyXD = theD.map((value, index) => {
      return numFre[index] * value;
    });
    setFreXD(frequencyXD);

    //fixi

    let fixi = numFre.map((value, index) => value * middlePoint[index]);
    setFreXmid(fixi);

    let sumFixi = 0;
    fixi.map((value) => (sumFixi += value));
    setSumFixi(sumFixi);

    let sumFrequencyXD = 0;
    frequencyXD.map((value) => {
      return (sumFrequencyXD += value);
    });
    setSumFD(sumFrequencyXD);

    //MAIN CALCULATION

    //X_
    //sortMethod

    let TheX_;
    if (CPlus) {
      TheX_ = theA + (sumFrequencyXD / totalF) * classR[0];
      //console.log("CPlus : True")
    } else {
      TheX_ = theA + sumFrequencyXD / totalF;
      //console.log("CPlus : false")
    }

    setX_(TheX_);
    //console.log(TheX_)

    //Real method

    let TheX2 = sumFixi / totalF;
    setX_2(TheX2);

    setReady(true);
  }

  //10-20,20-30,30-40,40-50
  //10,55,10,22

  return (
    <div className="">
      <Router>
        <Switch>
          <Route exact path="/React-statistics-table-test">
            <Input
              frequency={inputFrequency}
              classes={inputClasses}
              setStateF={updateFrequency}
              setStateC={updateClasses}
              send={classReady}
              clearAll={clearAll}
            />
          </Route>
          <Route exact path="/React-statistics-table-test/exact">
            <InputType2
              frequency={inputFrequency}
              classes={inputClasses2}
             
              setStateC={updateClasses2}
              send={classReady}
              clearAll={clearAll}
              process={process}
              processDone={processDone}
              inputRange={inputRange}
              updateInputRange={updateInputRange}


              startPoint={startPoint}
              updateStart={updateStart}
              endPoint={endPoint}
              updateEnd={updateEnd}

            />
          </Route>
        </Switch>

        {ready ? (
          <Table
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
          />
        ) : (
          0
        )}
      </Router>
    </div>
  );
}

export default Main;
