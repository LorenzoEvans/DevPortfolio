import React, {Component} from 'react';
import {Linkedin, Brush} from "grommet-icons/es6";
import {Anchor} from "grommet/es6";

class AppsContent extends Component {
  render() {
    return (
      <div>
        <Anchor href={"https://frozen-reaches-27902.herokuapp.com/"} label={"Immutable Gallery"} reverse color={"#AEC6E2"} icon={<Brush color={"#AACDD7"}/>}/>
      </div>
    );
  }
}

export default AppsContent;