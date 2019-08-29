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
    <div style={{width: "100%"}}>
      <Tabs
        className={"nav-tabs"}
        >
        <Tab
          title={<RichTabTitle
          label={"Home"} icon={<Home
          color={"light-1"}
          bottom={"white"}
          size={"20px"}/>}
          />}
          style={
            {
              marginTop: "20px",
              marginBottom: "5px",
              width: "105px",
              borderRight: "2px solid white",
              borderTop: "2px solid white",
              borderRadius: "0 5% 0 0",
              borderWidth: "1px",
              borderBottomWidth: "1px"
            }}>
          <Box pad="small">One</Box>
        </Tab>
        <Tab
        title={
          <RichTabTitle icon={
              <Apps color={"light-1"} size={"20px"}/>} label={"Apps"}/>}
              style={{
              marginTop: "20px",
              width: "105px" ,
              marginBottom: "5px",
              borderBottom: "0px solid white",
              borderLeft: "0px solid white",
              borderWidth: "1px",
              borderBottomWidth: "1px",
              borderRadius: "0 0 0 5%",
              }}>
          <Box pad="small">Two</Box>
        </Tab>
        <Tab title={<RichTabTitle label={"Art"} icon={<Brush color={"light-1"} size={"20px"}/>}/>}
          style={{
            borderRadius: "0 5% 0 0",
            marginTop: "20px",
            width: "105px",
            marginBottom: "5px",
            borderRight: "0px solid white", borderTop: "0px solid white", borderWidth: "1px", borderBottomWidth: "1px"}}>
          <Box pad="small">Three</Box>
        </Tab>
        <Tab title={<RichTabTitle label={"Writing"} icon={<Notes color={"light-1"} size={"20px"}/>}/>}
          style={{
            borderRadius: "5% 0 0 0",
            marginTop: "20px",
            width: "105px",
            marginBottom: "5px",
            borderLeft: "0px solid white", borderTop: "0px solid white", borderWidth: "1px", borderBottomWidth: "1px"}}>
          <Box pad="small">Four</Box>
        </Tab>
        <Tab title={<RichTabTitle label={"Music"} icon={<Music color={"light-1"} size={"20px"}/>}/>}
          style={{
            borderRadius: "0 0 5% 0",
            marginTop: "20px",
            width: "105px",
            marginBottom: "5px",
            borderRight: "0px solid white",
            borderBottom: "0px solid white", borderWidth: "1px", borderBottomWidth: "1px"}}>
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
