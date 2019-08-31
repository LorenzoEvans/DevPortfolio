import React, {Component} from 'react';
import './NavBar.css'
import {Box, Tab, Tabs, Grid, Distribution, Text} from "grommet/es6";
import {RichTabTitle} from "../../Styling/ConstantComponents";
import {Apps, Brush, Home, Notes} from "grommet-icons/es6";
import { about } from './AboutContent'
const Content = () => {
  return (
    <div style={{width: "100%", height: "100%"}}>
      <Tabs
        className={"nav-tabs"}
        >
        <Tab
          title={<RichTabTitle
          label={"Home"} icon={<Home
          color={"light-1"}
          bottom={"white"}
          size={"2rem"}/>}
          />}
          style={
            {
              marginTop: "10px",
              marginBottom: "2.5px",
              width: "10.5rem",
              borderRight: "2px solid white",
              borderTop: "2px solid white",
              borderRadius: "0% 5% 0% 0%",
              borderWidth: "2px",
              borderTopWidth: "2px",
            }}>
            <Box
              gridArea="header"
              background="none"
              style={{borderTop: "2px solid gainsboro", borderBottom: "2px solid gainsboro", height: "20%"}}
            >
              Status
              Status
              Status
              Status
              Status
              Status
              Status
              Status
              Status
              Status
              Status
            </Box>
            <Box
              basis={"large"}
              background="none"
              style={{borderBottom: "2px solid gainsboro"}}
              >
            Dependencies
            </Box>
            <Box
              background="none"
              style={{borderBottom: "2px solid gainsboro", height: "20%"}}
              >

            Additional
            </Box>
        </Tab>
        <Tab
        title={
          <RichTabTitle icon={
              <Apps color={"light-1"} size={"2rem"}/>} label={"Apps"}/>}
              style={{
              marginTop: "10px",
              marginBottom: "2.5px",
              width: "10.5rem",
              borderBottom: "0px solid white",
              borderLeft: "0px solid white",
              borderWidth: "2px",
              borderBottomWidth: "2px",
              borderRadius: "0 0 0 5%",
              }}>

            <Box gridArea="header" background="light-5" elevation={"medium"}/>
            <Box gridArea="nav" background="light-5" />
            <Box gridArea="main" background="light-5" />
        </Tab>
        <Tab title={<RichTabTitle label={"Art"} icon={<Brush color={"light-1"} size={"2rem"}/>}/>}
          style={{
            borderRadius: "0 5% 0 0",
            marginTop: "10px",
            marginBottom: "2.5px",
            width: "10.5rem",
            borderRight: "0px solid white", borderTop: "0px solid white", borderWidth: "2px", borderBottomWidth: "1px"}}>
          <Box pad="small" style={{height: "90.80vh"}}>Two</Box>
        </Tab>
        <Tab title={<RichTabTitle label={"Writing"} icon={<Notes color={"light-1"} size={"2rem"}/>}/>}
          style={{
            borderRadius: "5% 0 0 0",
            marginTop: "10px",
            marginBottom: "2.5px",
            width: "10.5rem",
            marginRight: "107px",
            borderLeft: "0px solid white", borderTop: "0px solid white", borderWidth: "2px", borderBottomWidth: "1px" }}>


        </Tab>
      </Tabs>
    </div>
  );
};



export default Content;
