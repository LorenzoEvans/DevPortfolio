import React, {Component} from 'react';
import './NavBar.css'
import {Box, Tab, Tabs, Heading, InfiniteScroll, Text, Carousel, Image} from "grommet/es6";
import {RichTabTitle} from "../../Styling/ConstantComponents";
import {Apps, Brush, Home, Notes} from "grommet-icons/es6";
import { about } from './AboutContent'
import {Table, TableBody, TableCell, TableHeader, TableRow} from "grommet";


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
            style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            borderTop: "2px solid gainsboro"
            }}
          >
          <Box
            className={"gradient-border"}
            id={"box"}
            pad={{
              top: "small",
              horizontal: "small",
              bottom: "small"
            }}
            style={{border: "1.5px solid black"}}
            height={"medium"}
            width={"63%"}
            // basis={"2/4"}
            margin={"xsmall"}
            elevation={"xlarge"}
            gap="small"
            overflow="auto"
            animation={"fadeIn"}
            background={undefined}
          >
            <Box animation={"slideLeft"} elevation={"medium"}
            style={{border: "2px solid white"}} height={"xlarge"} overflow={"auto"} margin={"small"} alignContent={"center"}>
              <Heading margin={"xsmall"} level={"3"}>Mission Statement</Heading>
            <Text color="black" size="small" margin={"xsmall"} pad={"xsmall"} >
              My journey into programming took the scenic route. When I was young,
              I was the "go-to" guy for immediate family when it came to electronic/computer issues,
              so that allowed me to develop a bit of comfortability with technical things,
              but I was always intimidated by programming, so I never really delved into it.
              However, a year or two ago, I was working an overnight job as a security guard, and one day, I just got tired of working a dead-end, repetitive job,
              and set out to teach myself programming, and after a little under a year, I stumbled onto Lambda,
              and realized there was an opportunity to really immerse myself in programming,
              and come out on the other side with a fully fleshed out skill-set, and decided to take the leap of faith.
            </Text>
            </Box>
            <Box animation={"slideRight"} style={{border: "2px solid black"}} size="medium" basis={"medium"} alignContent={"center"} margin={"small"}>
              <Text  color="light-3"  size={"small"} margin={"small"}>
              With this knowledge, I hope to help strengthen the bridge and bond,
              between the arts and technology, as they are more intertwined than I
              believe we realize or appreciate, as a species and society.
              </Text>
            </Box>
          </Box>
          <Box
            className={"gradient-border"}
            id={"box"}
            pad={{
              top: "small",
              horizontal: "small",
              bottom: "small"
            }}
            height={"medium"}
            margin={"xsmall"}
            width={"34%"}
            // basis={"1/3"}
            elevation={"large"}
            gap="small"
            overflow="auto"
            background={undefined}
            animation={"fadeIn"}
            style={{border: "1.5px solid black"}}
          >
            <Box margin={"xsmall"} pad={"xsmall"}
            border={"dark-5"} height={"large"} overflow={"auto"} animation={"slideRight"} width={"medium"}>
              <Heading margin={"xsmall"} level={"3"}>Skill Stack</Heading>
              <Text color="black" size="small">
              <ul>
                <li>
                  Javascript
                  <ul>
                    <li>
                      React
                    </li>
                    <li>
                      Node/Express
                    </li>
                    <ul>
                    </ul>
                  </ul>
                </li>
                <li>
                CSS
                <ul>
                <li>
                SCSS
                </li>
                <li>
                LESS
                </li>
                </ul>
                </li>
              </ul>
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
            className={"gradient-border"}
            id={"box"}
            height={"30%"}
            margin={"xsmall"}
            // width={"medium"}
            basis={"full"}
            elevation={"large"}
            gap="small"
            overflow="auto"
            animation={"fadeIn"}
            background={undefined}
            style={{border: "1.5px solid black", marginBottom: "35px"}}
          >
              <Heading level={4} truncate={true}>Hobbies, Interests, Curio's</Heading>
            <Box animation={"slideRight"} alignContent={"center"}
                 style={{display: "flex", flexDirection: "row",}}
            >

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



export default Content;
