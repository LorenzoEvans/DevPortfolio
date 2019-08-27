import React, {Component} from 'react';
import './NavBar.css'
import {Box, Clock, Tab, Tabs} from "grommet/es6";
import {RichTabTitle} from "../../Styling/ConstantComponents";
import {Apps, Brush, Home, Music, Notes} from "grommet-icons/es6";
import anime from 'animejs'

anime({
  targets: 'core-background',

})
const Content = () => {
  return (
    <div style={{width: "100%", border: "2px solid red"}}>
      <Tabs
        className={"nav-tabs"}
        children={[<Clock type={"digital"}/>]}>
        <Tab
          title={<RichTabTitle
          label={"Home"} icon={<Home
          color={"dark-1"}
          size={"20px"}/>}/>}
          style={
            {
              marginTop: "20px",
              width: "105px",
              borderRight: "2px solid black",
              borderTop: "2px solid black",
              borderWidth: "4px",
              borderBottomWidth: "4px"
            }}>
          <Box
           class={"background-home"}
            pad="small"
            background={"light-1"}
          >


          </Box>
        </Tab>
        <Tab
        title={
          <RichTabTitle
            icon={
              <Apps
              color={"dark-1"}
              size={"20px"}/>}
              label={"Apps"}/>}
              style={
                {
                  marginTop: "20px", width: "105px" ,borderBottom: "2px solid black", borderLeft: "2px solid black", borderWidth: "4px", borderBottomWidth: "4px"}}>
          <Box
            direction="row"
            border={{ color: 'brand', size: 'small' }}
            pad="medium"
            style={{border: "2px solid green"}}
          >
            <Box pad="small" background="dark-3" />
            <Box pad="medium" background="light-3" />
          </Box>
        </Tab>
        <Tab title={<RichTabTitle label={"Art"} icon={<Brush color={"dark-1"} size={"20px"}/>}/>} style={{marginTop: "20px", width: "105px" , borderRight: "2px solid black", borderTop: "2px solid black", borderWidth: "4px", borderBottomWidth: "4px"}}>
          <Box pad="small"></Box>
        </Tab>
        <Tab title={<RichTabTitle label={"Writing"} icon={<Notes color={"dark-1"} size={"20px"}/>}/>}  style={{marginTop: "20px", width: "105px" ,borderLeft: "2px solid black", borderTop: "2px solid black", borderWidth: "4px", borderBottomWidth: "4px"}}>
          <Box pad="small">Four</Box>
        </Tab>
        <Tab title={<RichTabTitle label={"Music"} icon={<Music color={"dark-1"} size={"20px"}/>}/>}  style={{marginTop: "20px", width: "105px" ,borderRight: "2px solid black", borderBottom: "2px solid black", borderWidth: "4px", borderBottomWidth: "4px"}}>
          <Box pad="small">Five</Box>
        </Tab>
      </Tabs>
    </div>
  );
};

class SiteNav extends Component {
  render() {
    return (
      <>
      <Content/>
      </>
    );
  }
}

export default SiteNav;
