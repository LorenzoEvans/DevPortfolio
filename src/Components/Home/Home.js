import React, { Component } from 'react'
import RichPanel from './SubComponents/RichPanel'
import SiteNav from "./SubComponents/NavBar/NavBar";
import './Home.css'
import { theme, richAccordionTheme, loading } from './Styling/ConstantComponents'
import {
Grommet,
  Box,
  Button,
  Accordion,
  Anchor,
  Heading,
  Grid,
  Tabs,
  Text,
  ThemeContext,
  Tab,
  Clock
} from 'grommet'

import {
  StatusInfo,
  Github,
  Twitter,
  Linkedin,
  ContactInfo,
  Bookmark,
  Home,
  Brush,
  Notes,
  Music
} from 'grommet-icons'

class SideBar extends Component {
 constructor(props) {
   super(props);
   this.state = {
      highlightLoaded: false,
   }
 }

  render() {
  const { highlightLoaded } = this.state;
    return (
      <div className={"dummy-test-2"}>
        <Box elevation="40px"
          style={{display: "flex", flexDirection: "row", height: "100vh",}} >
          <Box
            className={"sidebar"}
            style={{height: "100%", borderImage: "black", background: "black", borderRight: "1px solid white"}}
            width={"350px"}
            overflow={"auto"}>

            <Box fill direction="row" color={"light-2"}>
              <Box basis="large">
                <Box
                  background={"transparent"}
                  as="header"
                  height={"200px"}
                  pad={{ horizontal: "small" }}
                  style={{
                  display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center",
                  borderBottom: "1px solid white", borderBottomWidth: "1px solid white",
                  }}
                >
                  <Heading level={3}
                  style={{fontFamily: "Bungee Shade",
                  borderBottom: "1px solid black",
                  color: "#dfe1dc", textShadow: "25px 20.5px 0.50px #BEA49F",
                  marginBottom: "30px"}}>
                    <strong style={{fontFamily: "Bungee Shade",
                      color: "#cdcdcd", textShadow: "35px 35.5px 5px #BEA49F",
                      marginBottom: "30px"}}>#0xLE</strong>
                  </Heading>
                  <Clock type={"digital"} size={"small"} style={{color: "#BEA49F"}}/>
                </Box>
                <ThemeContext.Extend value={richAccordionTheme}>
                  <Accordion
                    multiple
                    onActive={activeIndexes => {
                      if (activeIndexes.includes(1)) {
                        // give sometime to emulate an async call
                        setTimeout(() => {
                          this.setState({ highlightLoaded: true });
                        }, 1000);
                      }
                    }}
                  >
                    <RichPanel icon={<StatusInfo color="#BEA49F" />} label="About">
                      <Box
                        pad={{
                          bottom: "small",
                          horizontal: "small",
                          top: "small",
                        }}
                        gap="xsmall"
                        style={{borderTop: "1px solid white", borderTopWidth: "1px solid white"}}
                      >
                        <Box
                          gap="xsmall"

                        >
                          <Text color="light-3">
                            <strong>Purpose</strong>
                          </Text>
                          <Text color="light-3">
                            Used for general announcements like new releases,
                            trainings...
                          </Text>
                        </Box>
                        <Box gap="xsmall">
                          <Text color="light-3">
                          </Text>
                        </Box>
                      </Box>
                    </RichPanel>
                      <RichPanel
                        icon={<Bookmark color="#E2B3A9" />}
                        label="Highlights"
                      >
                        {highlightLoaded ? (
                          <Box
                            pad={{
                              bottom: "small",
                              horizontal: "small",
                              top: "small"
                            }}
                            gap="small"
                            overflow="auto"
                            style={{ maxHeight: "400px", borderTop: "1px solid white", borderTopWidth: "1px solid white" }}
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
                        ) : (
                          loading
                        )}
                      </RichPanel>
                    <RichPanel
                      icon={<ContactInfo color="#E2B3A9" />}
                      label="Contact Info"
                    >
                      <Box
                        pad={{
                          bottom: "small",
                          horizontal: "small",
                          top: "small"
                        }}
                        gap="medium"
                        style={{borderTop: "1px solid white", borderTopWidth: "1px solid white"}}
                      >
                        <Anchor reverse color={"#AEC6E2"} textDecoration={undefined} href="https://github.com/LorenzoEvans" label="Github" icon={<Github color={"#AACDD7"} />}/>
                          <Anchor  label={"Twitter"} reverse color={"#AEC6E2"} icon={<Twitter color={"#AACDD7"} />}/>
                          <Anchor label={"LinkedIn"} reverse color={"#AEC6E2"} icon={<Linkedin color={"#AACDD7"}/>}/>
                      </Box>
                    </RichPanel>
                  </Accordion>
                </ThemeContext.Extend>
              </Box>
            </Box>
          </Box>
          <SiteNav/>
        </Box>
      </div>
    );
  }
}

export default SideBar
