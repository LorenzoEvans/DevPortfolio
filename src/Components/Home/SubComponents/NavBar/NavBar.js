import React, {Component} from 'react';
import './NavBar.css'
import {Box, Tab, Tabs, Heading, InfiniteScroll, Text} from "grommet/es6";
import {RichTabTitle} from "../../Styling/ConstantComponents";


const Content = () => {
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
          <Box
            overflow="auto"
            height={"100vh"}
            style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}
          >
          <Box
            pad={{
              top: "small",
              horizontal: "small",
              bottom: "small"
            }}
            style={{border: "1.5px solid green"}}
            height={"medium"}
            width={"50%"}
            basis={"1/2"}
            margin={"small"}
            elevation={"large"}
            gap="small"
            overflow="auto"
            animation={"fadeIn"}
            background={undefined}
          >
            <Box border={"dark-5"} height={"small"} overflow={"auto"} margin={"small"} alignContent={"center"}>
              <Heading>I like this</Heading>
            <Text color="black" size="small" margin={"small"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
            </Text>
            </Box>
            <Box border={"dark-2"} overflow={"auto"}>
              <Text  color="dark-4" size="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
              </Text>
            </Box>
            <Box border={"dark-2"} overflow={"auto"}>
              <Text  color="dark-4" size="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
              </Text>
            </Box>
            <Box border={"dark-2"} overflow={"auto"}>
              <Text  color="dark-4" size="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
              </Text>
            </Box>
            <Box border={"dark-2"} overflow={"auto"}>
              <Text  color="dark-4" size="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
              </Text>
            </Box>
            <Box border={"dark-2"} overflow={"auto"}>
              <Text  color="dark-4" size="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
              </Text>
            </Box>
            <Box border={"dark-2"} overflow={"auto"}>
              <Text  color="dark-4" size="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
              </Text>
            </Box>
            <Box border={"dark-2"} overflow={"auto"}>
              <Text  color="dark-4" size="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
              </Text>
            </Box>
            <Box border={"dark-2"} overflow={"auto"}>
            <Text color="dark-4" size="small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
            </Text>
            </Box>
            <Box>
            <Text color="dark-4" size="small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
            </Text>
            </Box>
          </Box>
          <Box
            pad={{
              top: "small",
              horizontal: "small",
              bottom: "small"
            }}
            height={"medium"}
            margin={"small"}
            // width={"31%"}
            basis={"1/3"}
            elevation={"large"}
            gap="small"
            overflow="auto"
            background={undefined}
            animation={"fadeIn"}
            style={{border: "1.5px solid black"}}
          >
            <Box border={"dark-5"} height={"small"} overflow={"auto"}>
              <h3>I like this</h3>
              <Text color="black" size="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
              </Text>
            </Box>
            <Box border={"dark-2"} overflow={"auto"}>
              <Text  color="dark-4" size="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
              </Text>
            </Box>
            <Box border={"dark-2"} overflow={"auto"}>
              <Text color="dark-4" size="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
              </Text>
            </Box>
            <Box>
              <Text color="dark-4" size="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
              </Text>
            </Box>
          </Box><Box
            pad={{
              top: "small",
              horizontal: "small",
              bottom: "small"
            }}
            height={"small"}
            margin={"small"}
            // width={"medium"}
            basis={"3/4"}
            elevation={"large"}
            gap="small"
            overflow="auto"
            animation={"fadeIn"}
            background={undefined}
            style={{border: "1.5px solid yellow"}}
          >
            <Box border={"dark-5"} height={"small"} overflow={"auto"}>
              <h3>I like this</h3>
              <Text color="black" size="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
              </Text>
            </Box>
            <Box border={"dark-2"} overflow={"auto"}>
              <Text  color="dark-4" size="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
              </Text>
            </Box>
            <Box border={"dark-2"} overflow={"auto"}>
              <Text color="dark-4" size="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
              </Text>
            </Box>
            <Box>
              <Text color="dark-4" size="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
              </Text>
            </Box>
          </Box>
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
    </Box>
  );
};



export default Content;
