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
          className={"single-tab"}
          title={<RichTabTitle
          className={"icon-style"}
          label={"Home"} icon={<Home
          color={"light-1"}
          overflow={"auto"}
          bottom={"white"}
          size={"medium"}/>}
          />}
          style={
            {
            fontFamily: 'Megrim'
            }}>
          <HomeContent/>
        </Tab>
        <Tab
          className={"single-tab"}
        title={
          <RichTabTitle className={"icon-style"} icon={<Apps color={"light-1"} size={"medium"}/>}
              label={"Apps"}/>}
              style={{borderRadius: "0 0 0 5%", fontFamily: 'Megrim'}}>
        </Tab>
        <Tab className={"single-tab"}
          title={<RichTabTitle
          className={"icon-style"}
          label={"Art"} icon={<Brush color={"light-1"} size={"medium"}/>}/>}
          style={{ borderRadius: "0 5% 0 0", fontFamily: 'Megrim'}}>
        </Tab>
        <Tab
          title={<RichTabTitle
          className={"icon-style"}
          label={"Writing"} icon={<Notes color={"light-1"} size={"medium"}/>}/>}
          style={{borderRadius: "5% 0 0 0", fontFamily: 'Megrim'}}>
        </Tab>
      </Tabs>
    </Box>
  );
};



export default SiteNav;
