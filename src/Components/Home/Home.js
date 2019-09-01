import React, { Component } from 'react'
import SiteNav from "./SubComponents/SiteNav/SiteNav";
import './Home.css'
import Sidebar from "./SubComponents/Sidebar/Sidebar";
import {
  Box,
} from 'grommet'



class SideBar extends Component {
 constructor(props) {
   super(props);
   this.state = {
      highlightLoaded: false,
   }
 }

  render() {
    return (
      <div className={"gradient-bg"}>
        <Box elevation="40px"
          style={{display: "flex", flexDirection: "row", height: "100vh",}} >
          <Sidebar/>
          <SiteNav/>
        </Box>
      </div>
    );
  }
}

export default SideBar
