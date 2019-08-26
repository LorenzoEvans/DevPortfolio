import React, { Component } from 'react'
import RichPanel from './SubComponents/RichPanel'
import Animation from "./Animations/animations";
import { theme, richAccordionTheme, RichTabTitle, loading } from './Styling/ConstantComponents'
import './Home.css'
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
Clock } from 'grommet'
import { Apps, StatusInfo, Github, Twitter, Linkedin, ContactInfo, Bookmark, Home, Brush, Notes, Music} from 'grommet-icons'
import NavBar from "./SubComponents/NavBar";
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
      <div>
        <Grommet theme={theme}>
        <Box elevation="40px" style={{display: "flex", flexDirection: "row", height: "100vh",}} >
          <Box
          className={"sidebar"}
          style={{height: "100%", borderImage: "black"}}
          border={{color: "#cdcdcd",
          size: "medium",
          }}
          width={"350px"} overflow={"auto"}>

            <Box fill direction="row" color={"light-2"}>
              <Box basis="medium" border={undefined} >
                <Box
                  border={"bottom"}
                  background={"transparent"}
                  as="header"
                  pad={{ horizontal: "small" }}
                  style={{display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}
                >

                  <Heading level={3}
                  style={{fontFamily: "Bungee Shade",
                  color: "#837883", textShadow: "1.5px 1.5px 3.50px #74b5be",
                  marginBottom: "30px"}}>
                    <strong>#0xLE</strong>
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
                    <RichPanel icon={<StatusInfo color="#E2B3A9" />} label="About">
                      <Box
                        pad={{
                          bottom: "small",
                          horizontal: "small",
                          top: "small",
                        }}
                        gap="xsmall"
                      >
                        <Box gap="xsmall">
                          <Text color="light-3">
                            <strong>Purpose</strong>
                          </Text>
                          <Text>
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
                            style={{ maxHeight: "400px" }}
                          >
                            <Text color="light-3">

                            </Text>
                            <Text>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore
                            </Text>
                            <Text>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore
                            </Text>
                            <Text>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore
                            </Text>
                            <Text>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore
                            </Text>
                            <Text>
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
          <NavBar/>
        </Box>
        </Grommet>
      </div>
    );
  }
}

export default SideBar
