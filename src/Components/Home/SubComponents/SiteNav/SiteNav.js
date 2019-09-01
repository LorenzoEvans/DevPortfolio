import React from 'react';
import './SiteNav.css'
import {Box, Tab, Tabs} from "grommet";
import {RichTabTitle} from "../../Styling/ConstantComponents";
import { Apps, Brush, Home, Notes } from "grommet-icons"
import HomeContent from "./Contents/HomeContent";

const SiteNav = () => {
  return (
    <Box style={{width: "100%", height: "100vh"}} overflow={"auto"}>
      <Tabs
        className={"nav-tabs"}
        >
        <Tab
          title={<RichTabTitle
          label={"Home"} icon={<Home
          color={"light-1"}
          overflow={"auto"}
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
          <HomeContent/>
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
        </Tab>
        <Tab title={<RichTabTitle label={"Art"} icon={<Brush color={"light-1"} size={"2rem"}/>}/>}
          style={{
            borderRadius: "0 5% 0 0",
            marginTop: "10px",
            marginBottom: "2.5px",
            width: "10.5rem",
            borderRight: "0px solid white", borderTop: "0px solid white", borderWidth: "2px", borderBottomWidth: "1px"}}>
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
    </Box>
  );
};



export default SiteNav;
