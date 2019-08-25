import React, { Component } from 'react'
import './Home.css'
import { Grommet, Box, Button, AccordionPanel, Accordion, Grid, Image, Menu, Tabs, Text, Tab, Carousel,  Clock } from 'grommet'
import { Projects, Aggregate, Brush, Notes, Music } from 'grommet-icons'

const RichTabTitle = ({ icon, label }) => (
  <Box direction="row" align="center" gap="xsmall" margin="xsmall">
    {icon}
    <Text size="small">
      <strong>{label}</strong>
    </Text>
  </Box>
);

class Home extends Component {
 constructor(props) {
   super(props)
   this.state = {
      tabs: ['About', 'Projects', 'Writing', 'Art', 'Contact'],
      position: 'left',
      visible: false
   }
 }



  render() {
      const theme = {
      global: {
      edgeSize: {
      small: "8px"
      },
        elevation: {
          light: {
            small: "0px 1px 5px rgba(12, 67, 170, 0.50)",
            medium: "0px 3px 8px rgba(32, 34, 112, 0.50)"
          }
        }
      },
      tabs: {
        borderBottomWidth: "medium",
        background: "light-5",
        border: undefined,
        gap: "110px",
        justify: "start",
        width: "100%",
        header: {
        background: undefined,
        },
        paddingTop: "5px"
      },
      tab: {
      background: "transparent",
        color: "#582C49",
        active:{
          color: "#E2B3A9",
        },
        border: undefined,
        pad: {
        bottom: "light-2",
        horizontal: "small",
        borderBottomStyle: {
        width: "20px"
        },
        // border: undefined
        },
        hover: {
        border: "dark-2",
        background: "#e2b3a9 "
        }
      }
      }
    return (
      <div>
        <Grommet theme={theme}>
        <Box style={{display: "flex", flexDirection: "row", height: "100vh"}}>
          <Box border={{color: "#E2B3A9", size: "large", style: 'inset'}} width={"400px"}>
        <Clock type={"digital"}/>
            <Box fill direction="row">
              <Box basis="medium" border="all">
                <Box
                  flex={false}
                  border="bottom"
                  background="light-2"
                  as="header"
                  pad={{ horizontal: "small" }}
                >
                  <Heading level={3}>
                    <strong>About #announcements</strong>
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
                    <RichPanel icon={<CircleInformation />} label="Channel Details">
                      <Box
                        pad={{
                          bottom: "medium",
                          horizontal: "small",
                          top: "small"
                        }}
                        gap="medium"
                      >
                        <Box gap="xsmall">
                          <Text color="dark-3">
                            <strong>Purpose</strong>
                          </Text>
                          <Text>
                            Used for general announcements like new releases,
                            trainings...
                          </Text>
                        </Box>
                        <Box gap="xsmall">
                          <Text color="dark-3">
                            <strong>Created</strong>
                          </Text>
                          <Text>Created by Bryan Jacquot on January 19, 2016</Text>
                        </Box>
                      </Box>
                    </RichPanel>
                    <RichPanel
                      icon={<Bookmark color="accent-1" />}
                      label="Highlights"
                    >
                      {highlightLoaded ? (
                        <Box
                          pad={{
                            bottom: "medium",
                            horizontal: "small",
                            top: "small"
                          }}
                          gap="medium"
                          overflow="auto"
                          style={{ maxHeight: "400px" }}
                        >
                          <Text color="dark-3">
                            Below is the top message in
                            <strong>#announcements</strong>.
                          </Text>
                          <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                          </Text>
                          <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                          </Text>
                          <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                          </Text>
                          <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                          </Text>
                          <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                          </Text>
                        </Box>
                      ) : (
                        loading
                      )}
                    </RichPanel>
                    <RichPanel
                      icon={<User color="accent-2" />}
                      label="2,000 members"
                    >
                      <Box
                        pad={{
                          bottom: "medium",
                          horizontal: "small",
                          top: "small"
                        }}
                        gap="medium"
                      >
                        Yeah believe me, this channel has 2,000 members.
                      </Box>
                    </RichPanel>
                  </Accordion>
                </ThemeContext.Extend>
              </Box>
            </Box>
          </Box>
          <Tabs className={"nav-tabs"} children={[<Clock type={"digital"}/>]} style={{width: "100%"}}>
            <Tab title={<RichTabTitle label={"About"} icon={<Aggregate color={"dark-1"} size={"20px"}/>}/>} style={{marginTop: "20px", width: "105px" ,borderRight: "2px solid black", borderTop: "2px solid black", borderWidth: "4px", borderBottomWidth: "4px"}}>
              <Box pad="small">One</Box>
            </Tab>
            <Tab title={<RichTabTitle icon={<Projects color={"dark-1"}size={"small"}/>} label={"Projects"}/>} style={{marginTop: "20px", width: "105px" ,borderBottom: "2px solid black", borderLeft: "2px solid black", borderWidth: "4px", borderBottomWidth: "4px"}}>
              <Box
                direction="row"
                border={{ color: 'brand', size: 'small' }}
                pad="medium"
              >
                <Box pad="small" background="dark-3" />
                <Box pad="medium" background="light-3" />
              </Box>
            </Tab>
            <Tab title={<RichTabTitle label={"Art"} icon={<Brush color={"dark-1"} size={"20px"}/>}/>} style={{marginTop: "20px", width: "105px" , borderRight: "2px solid black", borderTop: "2px solid black", borderWidth: "4px", borderBottomWidth: "4px"}}>
              <Box pad="small">Three</Box>
            </Tab>
            <Tab title={<RichTabTitle label={"Writing"} icon={<Notes color={"dark-1"} size={"20px"}/>}/>}  style={{marginTop: "20px", width: "105px" ,borderLeft: "2px solid black", borderTop: "2px solid black", borderWidth: "4px", borderBottomWidth: "4px"}}>
              <Box pad="small">Four</Box>
            </Tab>
            <Tab title={<RichTabTitle label={"Music"} icon={<Music color={"dark-1"} size={"20px"}/>}/>}  style={{marginTop: "20px", width: "105px" ,borderRight: "2px solid black", borderBottom: "2px solid black", borderWidth: "4px", borderBottomWidth: "4px"}}>
              <Box pad="small">Five</Box>
            </Tab>
          </Tabs>
        </Box>
        </Grommet>
      </div>
    );
  }
}

export default Home
