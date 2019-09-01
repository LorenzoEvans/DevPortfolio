import React, {Component} from 'react';
import './NavBar.css'
import {Box, Tab, Tabs, Grid, Distribution, Paragraph, InfiniteScroll, Text} from "grommet/es6";
import {RichTabTitle} from "../../Styling/ConstantComponents";
import {Apps, Brush, Home, Notes} from "grommet-icons/es6";
import { about } from './AboutContent'

const artArr = ['hi', 'how are you', 'welcome'];

const allItems = Array(2000)
  .fill(1)
  .map((_, i) => `item ${i + 1}`);

const SimpleInfiniteScroll = props => (
  <Box height="90vh" overflow="auto" width={"50%"}>
    <InfiniteScroll items={allItems} {...props}>
      {item => (
        <Box
          key={item}
          pad="medium"
          border={{ side: "bottom" }}
          align="center"
        >
          <Text>{item}</Text>
        </Box>
      )}
    </InfiniteScroll>
  </Box>
);

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
              display: "flex",
              flexDirection: "row",
              flexWrap: "row-wrap",
              justifyContent: "space-evenly"
            }}>
            <Box
            style={{
            height: "50%", border: "1.75px solid black", width: "50%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "row-wrap",
            justifyContent: "space-evenly"
            }}
            elevation={"small"}
            animation={"zoomIn"}
             >
              <Box animation={"fadeIn"}
              margin={"small"}
              pad={"small"}
              width={"33%"}
              overflow="scroll"
                style={{border: "2px solid gainsboro"}}
              >
                <h2>
                I like this!
                </h2>
                <Text margin="small" width={"33%"}>
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.

                </Text>
              </Box>
              <Box animation={"fadeIn"}
                   pad={"small"}
                   width={"67%"}
                   margin={"small"}
                   style={{border: "2px solid gainsboro"}}
              >

                <h2>
                I'd love to work on these!
                </h2>
                <Text margin="small">
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.
                </Text>
              </Box>

            </Box>
          <Box
            pad={{
              top: "medium",
              horizontal: "medium",
              bottom: "medium"
            }}
            gap="small"
            overflow="auto"
            height={"50px"}
          >

            <Text  color="light-3" size="small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
            </Text>
            <Text color="light-3" size="small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
            </Text>
            <Text color="light-3" size="small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
            </Text>
            <Text color="light-3" size="small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
            </Text>
            <Text color="light-3" size="small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
            </Text>
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
          <SimpleInfiniteScroll/>
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
