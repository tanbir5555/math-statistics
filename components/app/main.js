import React, { useState } from "react";
import Table from "./components/table";
import Input from "./components/input";
function Main() {
  let [classes, setClasses] = useState("");
  let [highClass, setHighClass] = useState("");
  let [lowClass, setLowClass] = useState("");
  let [frequency, setFrequency] = useState("");
  let [midPoints, setMidPoints] = useState("");
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

    //frequency work
    //frequency work
    //frequency work
    //frequency work
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
        highClass={highClass}
        lowClass={lowClass}
        frequency={frequency}
        classes={classes}
        midPoints={midPoints}
      />:0}
    </div>
  );
}

export default Main;
