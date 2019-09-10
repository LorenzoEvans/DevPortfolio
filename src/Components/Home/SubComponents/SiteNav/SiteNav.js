import React from 'react';
import './SiteNav.css'
import {Box, Tab, Tabs} from "grommet";
import {RichTabTitle} from "../../Styling/ConstantComponents";
import { Apps, Brush, Home, Notes } from "grommet-icons"
import HomeContent from "./Contents/HomeContent";
import AppsContent from "./Contents/AppsContent";

const SiteNav = () => {
  return (
    <Box animation={"slideIn"} style={{width: "100%", height: "100vh"}} overflow={"auto"}>
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
            />}
          />}
          style={{fontFamily: 'Megrim'}}>
          <HomeContent/>
        </Tab>
        <Tab
          className={"single-tab"}
        title={
          <RichTabTitle className={"icon-style"} icon={<Apps color={"light-1"} size={"medium"}/>}
              label={"Apps"} style={{fontSize: '1.9rem'}}/>
              }
              style={{fontFamily: 'Megrim', fontSize: '1.9rem'}}>
          <AppsContent />
        </Tab>
        <Tab className={"single-tab"}
          title={<RichTabTitle
          className={"icon-style"}
          label={"Art"} icon={<Brush color={"light-1"} size={"medium"}/>}/>}
          style={{ fontFamily: 'Megrim'}}>
        </Tab>
        <Tab
          title={<RichTabTitle
          className={"icon-style"}
          label={"Writing"} icon={<Notes color={"light-1"} size={"medium"} style={{fontSize: '30px'}}/>}/>}
          style={{fontFamily: 'Megrim', fontSize: '30px'}}>
        </Tab>
      </Tabs>
    </Box>
  );
};



export default SiteNav;
