import React, { Component } from "react";
import Table from './components/table'
import Input from "./components/input";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ini_data: {
        classes: "",
        frequency: "",

      },
      data: {
        tableClass:[],
        classesUpper: [],
        classesLower: [],
        frequency: [],
        middle:[],
        fX:[],
        A:0,
        d:[],
        sumFrequency:0,
        sumMiddle:0,
        sumD:0,

      },
      table:<Table/>
    };
    this.updateFrequency=this.updateFrequency.bind(this)
    this.updateClasses=this.updateClasses.bind(this)
    this.classReady=this.classReady.bind(this)
  }


  updateClasses(cla){
    this.setState({
        ...this.state,
        ini_data: {
            classes: cla
        }
      });

       setTimeout(() => {
        console.log(this.state)
    }, 10);
  }

  updateFrequency(fre) {
    this.setState({
        ...this.state,
      ini_data: {
        frequency: fre
      }
    });
    setTimeout(() => {
        console.log(this.state)
    }, 10);
  }

  classReady(){
    let classes=this.state.ini_data.classes;
    console.log(classes)
    let comaClass;
    let lowerClass=[],upperClass=[]

    comaClass=classes.split(",");
    console.log(comaClass)
    comaClass.map((value)=>{
        let valLowHigh=value.split("-")
        console.log(valLowHigh)
        lowerClass.push(parseInt(valLowHigh[0]))
         upperClass.push(parseInt(valLowHigh[1]))

        
        return valLowHigh
    })
    console.log("lowerClass: ",lowerClass)
    console.log("upperClass: ",upperClass)
    
    // setTimeout(() => {
    //     console.log("upper :",this.state.data.classesUpper)
    //     console.log("lower :",this.state.data.classesLower) 
    // }, 1000);

   
        this.setState({
            ...this.state,
            data:{
                classesUpper:upperClass,
                classesLower: lowerClass,
                tableClass:comaClass,
            }
        })
    
    setTimeout(() => {
        console.log("classesUpper :",this.state.data.classesUpper)
    console.log("classesLower :",this.state.data.classesLower)
    }, 100);

    let freQ=this.state.ini_data.frequency;
    console.log("Frequency :",freQ)
    console.log("Frequency :",freQ)
    console.log("Frequency :",freQ)

    // let newFrequency=freQ.split(",")
    // newFrequency=newFrequency.map((value)=>parseInt(value))
   

    // let middlePoint=lowerClass.map((value,index)=>{
    //     let upper=parseInt(upperClass[index])
    //     let lower=parseInt(value)
    //     let middle=(upper+lower)/2
    //     return middle

    // })

    // this.setState({
    //     ...this.state,
    //     data:{
    //         frequency:newFrequency,
    //         middle:middlePoint,
    //     }
    // })

    // setTimeout(() => {
    //     console.log(this.state)
    // }, 1000);

//10-20,20-30,30-40,40-50
//10,55,10,22
  }


 
  render() {
    return (
      <div className="">
        <Input
          frequency={this.state.ini_data.frequency}
          classes={this.state.ini_data.classes}
          setStateF={this.updateFrequency}
          setStateC={this.updateClasses}
          send={this.classReady}
        />
        {this.state.table}
      </div>
    );
  }
}

export default Main;
