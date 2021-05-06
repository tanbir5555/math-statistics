import React, { Component } from "react";

import Input from "./components/input";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ini_data: {
        classes: "",
        frequency: ""
      },
      data: {
        classes: [],
        frequency: []
      }
    };
    this.updateFrequency=this.updateFrequency.bind(this)
    this.updateClasses=this.updateClasses.bind(this)
  }

  updateFrequency(fre) {
    this.setState({
      ini_data: {
        frequency: fre
      }
    });
  }
  updateClasses(cla){

  }
  render() {
    return (
      <div className="">
        <Input
          frequency={this.state.ini_data.frequency}
          classes={this.state.ini_data.classes}
          setStateF={this.updateFrequency}
          setStateC={this.updateClasses}
        />
      </div>
    );
  }
}

export default Main;
