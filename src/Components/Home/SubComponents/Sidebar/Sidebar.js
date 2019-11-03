import React, {Component} from 'react';
import {Accordion, Anchor, Box, Clock, Heading, Text, ThemeContext} from "grommet/es6";
import {loading, richAccordionTheme} from "../../Styling/ConstantComponents";
import RichPanel from "../RichPanel";
import {Bookmark, ContactInfo, Github, Linkedin, StatusInfo, Twitter} from "grommet-icons/es6";

class Sidebar extends Component {
    state = {
      highlightLoaded: false,
    };

  render() {
    const { highlightLoaded } = this.state;
    return (
      <>
        <Box
          className={"sidebar"}
          style={{height: "100%", borderImage: "black"}}
          width={"350px"}
          elevation={"small"}
          overflow={"auto"}>

          <Box fill direction="row" color={"light-2"} style={{height: "100vh"}}>
            <Box basis="large" style={{height: "100vh"}}>
              <Box
                background={"transparent"}
                as="header"
                height={"300px"}
                pad={{ horizontal: "xsmall" }}
                style={{
                  display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center",
                }}
              >
                <Heading level={3}
                         style={{fontFamily: "Bungee Shade",
                           borderBottom: "1px solid black",
                           paddingBottom: "2px",
                           color: "#dfe1dc", textShadow: "-25px -20.5px 0.50px #BEA49F",
                           marginBottom: "30px"}}>
                             <Clock type={"digital"} size={"medium"} style={{color: "#d5c9c8", fontStyle: "bold"}}/>
                  <strong
                    style={{fontFamily: "Bungee Shade",
                      color: "#cdcdcd", textShadow: "0px 35.5px 4.9px #CDBFC1",
                      marginBottom: "30px", marginTop: "5px"}}

                  >#0xLE</strong>
                </Heading>
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
                  <RichPanel icon={<StatusInfo color="#BEA49F" />} label="About" >
                    <Box
                      pad={{
                        top: "medium",
                        horizontal: "medium",
                        bottom: "medium"
                      }}
                      gap="xsmall"

                    >
                      <Box
                        gap="xsmall"

                      >
                        <Text color="light-3" size={"small"}>
                          A lifelong musician turned programmer.
                          I find that software is a unique medium for displaying creativity,
                          learning new ways of thinking, and seeing the world,
                          which has lead to a mostly healthy obsession since discovering it.
                          I will be cataloguing my experiences with it here, and hereby declare you
                          welcome to join me on my journey.
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
                          top: "medium",
                          horizontal: "medium",
                          bottom: "medium"
                        }}
                        gap="small"
                        overflow="auto"
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
                        top: "medium",
                        horizontal: "medium",
                        bottom: "medium"
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
      </>
    );
  }
}


export default Sidebar;
